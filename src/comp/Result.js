import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import './db.css';

function Result() {
  const [animeData, setAnimeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const location = useLocation();
  const animeList = location.state.animeList;
  const navigate = useNavigate();

  useEffect(() => {
    setAnimeData(
      animeList.map((anime) => {
        return {
          title: anime.title,
          disp: anime.disp,
          url: anime.url,
          rstatus: anime.rstatus,
          rating: anime.rating,
          genre: anime.genre,
          eplist: anime.eplist,
        };
      })
    );
  }, [animeList]);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const totalPages = Math.ceil(animeData.length / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    if (number === currentPage) {
      return <li key={number} className="active">{number}</li>;
    } else {
      return (
        <li key={number} onClick={() => setCurrentPage(number)}>
          {number}
        </li>
      );
    }
  });

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  function handleCardClick(title, image, disp, genre, rstatus, rating, eplist, eplink) {
    navigate('/Player', {
      state: {
        title: title,
        image: image,
        disp: disp,
        genre: genre,
        rstatus: rstatus,
        rating: rating,
        eplist: eplist,
        eplink: eplink,
      },
    });
  }

  return (
    <div>
      <div className="Anime">
        <h1>Search Result</h1>
        <div className="container">
          <div className="card-container">
            {animeData.slice(firstIndex, lastIndex).map((anime) => (
              <div className="card-wrapper" key={anime.title}>
                <Card onClick={() => handleCardClick(anime.title, anime.url, anime.disp, anime.genre, anime.rstatus, anime.rating, anime.eplist)}>
                  <Card.Img variant="top" src={anime.url} />
                  <Card.Body className="cb">
                    <Card.Title>{anime.title}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
        {/* Pagination */}
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <ul>{renderPageNumbers}</ul>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
