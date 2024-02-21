import { React, useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import './db.css';
import img from '../img/header-bg.jpg'
import firebaseConfig from './FirebaseConfi'


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Anime() {
  const [databaseData, setDatabaseData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  useEffect(() => {
    const fetchData = async () => {
      const parentRef = collection(db, 'Anime');
      const snapshot = await getDocs(parentRef);

      const animeList = [];
      for (const docRef of snapshot.docs) {
        const docData = docRef.data();

        const childRef = doc(parentRef, docRef.id, 'eplist', 'episodes');
        const childSnapshot = await getDoc(childRef);
        const childData = childSnapshot.exists() ? childSnapshot.data() : {};

        animeList.push({ ...docData, eplist: childData });
      }
      setDatabaseData(animeList);
    };

    fetchData();
  }, []);

  const navigate = useNavigate();
  function handleCardClick(title, image, disp, genre, rstatus, rating, eplist, eplink) {
    navigate('/Player', { state: { title: title, image: image, disp: disp , genre:genre, rstatus:rstatus, rating:rating, eplist: eplist, eplink:eplink } });
  }

  // Pagination
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const totalPages = Math.ceil(Object.keys(databaseData || {}).length / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    if (number === currentPage) {
      return (
        <li key={number} className="active">{number}</li>
      )
    } else {
      return (
        <li key={number} onClick={() => setCurrentPage(number)}>{number}</li>
      );
    }
  });

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div className='Anime'>
      <img className='img' src={img} alt='headerimg'/>
      <h1>Animes</h1>
      <div className="container">
        <div className="card-container">
          {databaseData && Object.entries(databaseData).slice(firstIndex, lastIndex).map(([key, value]) => (
            <div key={key} className="card-wrapper">
              <Card onClick={() => handleCardClick(value.title, value.url, value.disp, value.genre, value.rstatus, value.rating, value.eplist)}>
                <Card.Img variant="top" src={value.url} />
                <Card.Body className='cb'>
                  <Card.Title>{value.title}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
          <ul>{renderPageNumbers}</ul>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>

      </div>
    </div>
  )
}

export default Anime;