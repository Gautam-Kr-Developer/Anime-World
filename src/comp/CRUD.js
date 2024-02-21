import React, { useState, useRef, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { useLocation } from "react-router-dom";
import bg from '../img/header-bg.jpg'
import './Admin.css'
import 'firebase/compat/firestore';
import firebaseConfig from './FirebaseConfi'


firebase.initializeApp(firebaseConfig);

const CRUD = () => {
  // For hiding content
  const location = useLocation();
  const [showTopAnimes, setShowTopAnimes] = useState(false);
  const [showTopMovies, setShowTopMovies] = useState(false);
  const [showAnime, setShowAnime] = useState(false);
  const [showMovies, setShowMovies] = useState(false);

  useEffect(() => {
    const  data  = location.state.title;
    switch (data) {
      case 'TopAnimes':
        setShowTopAnimes(true);
        break;
      case 'TopMovies':
        setShowTopMovies(true);
        break;
      case 'Anime':
        setShowAnime(true);
        break;
      case 'Movies':
        setShowMovies(true);
        break;
      default:
        break;
    }
  }, [location.state.title]);

  const clearInputs = () => {
    setTitle("");
    setUrl("");
    setDisp("");
    setGenre("");
    setRating("");
    setStatus("");
    setEpTitle("");
    setEpURL("");
    // setTchild("");
    setMTitle("");
    setMTchild("");
    setMGenre("");
    SetMDisp("");
    setMStatus("");
    setMRating("");
    setMimgURL("");
    setMovieURL("");
    setTopMTitle("");
    // setTopMTchild("");
    setTopMGenre("");
    setTopMUrl("");
    setTopMDisp("");
    setTopMStatus("");
    setTopMRating("");
    setTopMEpURL("");
    setTopMEpTitle("");

    setTopATitle("");
    // setTopATchild("");
    setTopAGenre("");
    setTopAUrl("");
    setTopADisp("");
    setTopAStatus("");
    setTopARating("");
    setTopAEpURL("");
    setTopAEpTitle("");
    setTopMTitle("");
    // setTopMTchild("");
    setTopMGenre("");
    setTopMUrl("");
    setTopMDisp("");
    setTopMStatus("");
    setTopMRating("");
    setTopMEpURL("");
    setTopMEpTitle("");
    titleRef.current.focus();
  };

  // TOP ANIME SECTION
  const [TopAtitle, setTopATitle] = useState("");
  const [TopAchild, setTopATchild] = useState("");
  const [TopAgenre, setTopAGenre] = useState("");
  const [TopAurl, setTopAUrl] = useState("");
  const [TopAdisp, setTopADisp] = useState("");
  const [TopAstatus, setTopAStatus] = useState("");
  const [TopArating, setTopARating] = useState("");
  const [TopAepURL, setTopAEpURL] = useState("");
  const [TopAepTitle, setTopAEpTitle] = useState("");

  const titleRef = useRef(null);

  const handleTopAchildChange = (event) => {
    setTopATchild(event.target.value);
  };
  const handleTopATitleChange = (event) => {
    setTopATitle(event.target.value);
  };
  const handleTopAGenreChange = (event) => {
    setTopAGenre(event.target.value);
  };
  const handleTopAUrlChange = (event) => {
    setTopAUrl(event.target.value);
  };
  const handleTopADispChange = (event) => {
    setTopADisp(event.target.value);
  };
  const handleTopAStatusChange = (event) => {
    setTopAStatus(event.target.value);
  };
  const handleTopARatingChange = (event) => {
    setTopARating(event.target.value);
  };
  const handleTopAEpTitleChange = (event) => {
    setTopAEpTitle(event.target.value);
  };

  const handleTopAEpURLChange = (event) => {
    setTopAEpURL(event.target.value);
  };


  const handleTopAClick = () => {
    if (!TopAtitle || !TopAurl || !TopAdisp || !TopAgenre || !TopArating || !TopAstatus) {
      alert('Please fill all fields');
      return;
    }
    const firestore  = firebase.firestore ();
    const parentRef = firestore.collection("Topanime");
    const childRef = parentRef.doc(TopAchild);
    const data = {
      title: TopAtitle,
      genre: TopAgenre,
      disp: TopAdisp,
      rstatus: TopAstatus,
      rating: TopArating,
      url: TopAurl,

    };
    childRef.set(data);
    clearInputs();
  };

  const handleTopAepClick = () => {
    if (!TopAepTitle || !TopAepURL || !TopAchild) {
      alert('Please fill all fields');
      return;
    }
    const firestore = firebase.firestore();
    const parentRef = firestore.collection("Topanime").doc(TopAchild);
    const subchildRef = parentRef.collection("eplist");
    const data = {
      [TopAepTitle]: TopAepURL,
    };
    subchildRef.doc("episodes").set(data, { merge: true })
      .then(() => {
        console.log("Document successfully written!");
        clearInputs();
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };


  // TOP MOVIES SECTION
  const [TopMtitle, setTopMTitle] = useState("");
  const [TopMchild, setTopMTchild] = useState("");
  const [TopMgenre, setTopMGenre] = useState("");
  const [TopMimgURL, setTopMUrl] = useState("");
  const [TopMdisp, setTopMDisp] = useState("");
  const [TopMstatus, setTopMStatus] = useState("");
  const [TopMrating, setTopMRating] = useState("");
  const [TopMepURL, setTopMEpURL] = useState("");
  const [TopMepTitle, setTopMEpTitle] = useState("");

  const handleTopMchildChange = (event) => {
    setTopMTchild(event.target.value);
  };
  const handleepTopMtitleChange = (event) => {
    setTopMTitle(event.target.value);
  };
  const handleTopTopMGenreChange = (event) => {
    setTopMGenre(event.target.value);
  };
  const handleTopMUrlChange = (event) => {
    setTopMUrl(event.target.value);
  };
  const handleTopMDispChange = (event) => {
    setTopMDisp(event.target.value);
  };
  const handleTopMStatusChange = (event) => {
    setTopMStatus(event.target.value);
  };
  const handleTopMRatingChange = (event) => {
    setTopMRating(event.target.value);
  };
  const handleTopMTitleChange = (event) => {
    setTopMEpTitle(event.target.value);
  };

  const handleTopMURLChange = (event) => {
    setTopMEpURL(event.target.value);
  };


  const handleTopMClick = () => {
    if (!TopMtitle || !TopMimgURL || !TopMdisp || !TopMgenre || !TopMrating || !TopMstatus) {
      alert('Please fill all fields');
      return;
    }
    const firestore = firebase.firestore();
    const parentRef = firestore.collection("Topmovies");
    const childRef = parentRef.doc(TopMchild);
    const data = {
      title: TopMtitle,
      genre: TopMgenre,
      disp: TopMdisp,
      rstatus: TopMstatus,
      rating: TopMrating,
      url: TopMimgURL,

    };
    childRef.set(data);
    clearInputs();
  };

  const handleTopMEPClick = () => {
    if (!TopMepTitle || !TopMepURL || !TopMchild) {
      alert('Please fill all fields');
      return;
    }
    const firestore = firebase.firestore();
    const parentRef = firestore.collection("Topmovies").doc(TopMchild);
    // const childRef = parentRef.child(TopMchild); // get reference to parent node
    const subchildRef = parentRef.collection("eplist"); // get reference to sub-child node
    const data = {
      [TopMepTitle]: TopMepURL,

    };
    subchildRef.doc("episodes").set(data, { merge: true })
    .then(() => {
      console.log("Document successfully written!");
      clearInputs();
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });    clearInputs();
  };





  // Anime Section
  const [title, setTitle] = useState("");
  const [Tchild, setTchild] = useState("");
  const [genre, setGenre] = useState("");
  const [url, setUrl] = useState("");
  const [disp, setDisp] = useState("");
  const [status, setStatus] = useState("");
  const [rating, setRating] = useState("");
  const [epURL, setEpURL] = useState("");
  const [epTitle, setEpTitle] = useState("");


  const handleepTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };
  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };
  const handleDispChange = (event) => {
    setDisp(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleEpURLChange = (event) => {
    setEpURL(event.target.value);
  };
  const handleepTchildChange = (event) => {
    setTchild(event.target.value);
  };


  const handleepClick = () => {
    if (!epTitle || !epURL || !Tchild) {
      alert('Please fill all fields');
      return;
    }
    const firestore = firebase.firestore();
    const parentRef = firestore.collection("Anime").doc(Tchild);
    // const childRef = parentRef.child(); // get reference to parent node
    const subchildRef = parentRef.collection("eplist"); // get reference to sub-child node
    const data = {
      [epTitle]: epURL,

    };
    subchildRef.doc("episodes").set(data, { merge: true })
    .then(() => {
      console.log("Document successfully written!");
      clearInputs();
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });    clearInputs();
  };



  const handleClick = () => {
    if (!title || !url || !disp || !genre || !rating || !status) {
      alert('Please fill all fields');
      return;
    }
    const firestore = firebase.firestore();
    const parentRef = firestore.collection("Anime");
    const childRef = parentRef.doc(Tchild);
    const data = {
      title: title,
      genre: genre,
      disp: disp,
      rstatus: status,
      rating: rating,
      url: url,

    };
    childRef.set(data);
    clearInputs();
  };
  const handleEpTitleChange = (event) => {
    setEpTitle(event.target.value);
  };




  // Movie Section

  const [Mtitle, setMTitle] = useState("");
  // MTchild name will be child in db
  const [MTchild, setMTchild] = useState("");
  const [Mgenre, setMGenre] = useState("");
  const [Mdisp, SetMDisp] = useState("");
  const [Mstatus, setMStatus] = useState("");
  const [Mrating, setMRating] = useState("");
  const [MimgURL, setMimgURL] = useState("");
  const [MovieURL, setMovieURL] = useState("");
  const [MovieTitle, setMovieTitle] = useState("");


  const handleepMTitleChange = (event) => {
    setMTitle(event.target.value);
  };
  const handleepMTchildChange = (event) => {
    setMTchild(event.target.value);
  };
  const handleMUrlChange = (event) => {
    setMimgURL(event.target.value);
  };
  const handleMDispChange = (event) => {
    SetMDisp(event.target.value);
  };
  const handleMGenreChange = (event) => {
    setMGenre(event.target.value);
  };
  const handleMRatingChange = (event) => {
    setMRating(event.target.value);
  };
  const handleMStatusChange = (event) => {
    setMStatus(event.target.value);
  };
  const handleMovieURLChange = (event) => {
    setMovieURL(event.target.value);
  };
  const handleMovieTitleChange = (event) => {
    setMovieTitle(event.target.value);
  };

  // Button click function
  const handleMClick = () => {
    if (
      Mtitle.trim() === '' ||
      MimgURL.trim() === '' ||
      Mdisp.trim() === '' ||
      Mgenre.trim() === '' ||
      Mrating.trim() === '' ||
      Mstatus.trim() === ''
    ) {
      alert('Please fill out all input fields');
      return;
    }

    const firestore = firebase.firestore();
    const parentRef = firestore.collection("Movies");
    const childRef = parentRef.doc(MTchild);
    const data = {
      title: Mtitle,
      genre: Mgenre,
      disp: Mdisp,
      rstatus: Mstatus,
      rating: Mrating,
      url: MimgURL,
    };
    childRef.set(data);
    clearInputs();
  };
  const handleMovieEPClick = () => {
    if (MovieTitle.trim() === '' || MovieURL.trim() === '' || MTchild.trim() === '') {
      alert('Please fill out all input fields');
      return;
    }
    const firestore = firebase.firestore();
    const parentRef = firestore.collection("Movies").doc(MTchild);
    const subchildRef = parentRef.collection("eplist"); // get reference to sub-child node
    const data = {
      [MovieTitle]: MovieURL,

    };
    subchildRef.doc("episodes").set(data, { merge: true })
    .then(() => {
      console.log("Document successfully written!");
      clearInputs();
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
    clearInputs();
  };




  return (
    <div className='adminmain'>
      <div className='img'><img src={bg} alt='img' />
      </div>

      {/* bootstrap */}


      {/* ANIME SECTION */}
      {showAnime && <section>
        <div className='Anime'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className='col-md-5'> <br /> <br />
                <h2>Add Anime Cards Here</h2> <br />
                <input ref={titleRef} placeholder=' **Anime Name For Db**' className='Ainput' type="text" value={Tchild} onChange={handleepTchildChange} />
                <br /> <br />
                <div className='Aform'>
                  <h4>Anime Title</h4><input type='text' className='Ainput' placeholder='Anime Title' value={title} onChange={handleepTitleChange}></input> <br /> <br />

                  <h4>Image URL</h4> <input type='text' className='Ainput' placeholder='Image URL' value={url} onChange={handleUrlChange}></input> <br /> <br />

                  <h4>Episode Discription</h4><input type='text' className='Ainput' placeholder='Anime Discription' value={disp} onChange={handleDispChange} ></input> <br /> <br />

                  <h4>Genre</h4><input type='text' className='Ainput' placeholder='Genre' value={genre} onChange={handleGenreChange}></input> <br /> <br />

                  <h4>Rating</h4> <input type='text' className='Ainput' placeholder='Rating' value={rating} onChange={handleRatingChange}></input> <br /> <br />

                  <h4>Status</h4> <input type='text' className='Ainput' placeholder='Status' value={status} onChange={handleStatusChange}></input> <br /> <br />

                  <button className='BTN' onClick={handleClick} >Add New Anime Card</button>
                </div>
              </div>
              <div className='col-md-5'>
                <div className='Aform'> <br /> <br />
                  <h2> Add New Episodes Here</h2> <br />
                  <input ref={titleRef} placeholder='Anime Name For Db ' className='Ainput' type="text" value={Tchild} onChange={handleepTchildChange} /> <br /> <br />

                  <h4>Episode Title</h4>
                  <input type='text' placeholder='Episode Title' className='Ainput' value={epTitle} onChange={handleEpTitleChange} /> <br /> <br />

                  <h4>Episode URL</h4>
                  <input type='text' placeholder='Episode URL' className='Ainput' value={epURL} onChange={handleEpURLChange}></input>

                </div>

                <br />
                <button className='BTN' onClick={handleepClick} >Add Episode</button>
              </div>
              <div className='col-md-1'></div>

            </div>

          </div>
        </div>
      </section>}
      {/* MOIVES SECTION */}
      {showMovies && <section>
        <div className='Movies'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className='col-md-5 movies'> <br /> <br />
                <h2>Add Top Movies Cards Here</h2> <br />
                <input ref={titleRef} placeholder=' **Anime Movie Name For Db**' className='Ainput' type="text" value={MTchild} onChange={handleepMTchildChange} />
                <br /> <br />
                <div className='Aform'>
                  <h4>Movie Title</h4><input type='text' className='Ainput' placeholder='Anime Title' value={Mtitle} onChange={handleepMTitleChange}></input> <br /> <br />

                  <h4>Image URL</h4> <input type='text' className='Ainput' placeholder='Image URL' value={MimgURL} onChange={handleMUrlChange}></input> <br /> <br />

                  <h4>Movie Discription</h4><input type='text' className='Ainput' placeholder='Movie Discription' value={Mdisp} onChange={handleMDispChange} ></input> <br /> <br />

                  <h4>Genre</h4><input type='text' className='Ainput' placeholder='Genre' value={Mgenre} onChange={handleMGenreChange}></input> <br /> <br />

                  <h4>Rating</h4> <input type='text' className='Ainput' placeholder='Rating' value={Mrating} onChange={handleMRatingChange}></input> <br /> <br />

                  <h4>Status</h4> <input type='text' className='Ainput' placeholder='Status' value={Mstatus} onChange={handleMStatusChange}></input> <br /> <br />


                  <button className='BTN' onClick={handleMClick} >Add New Movie Card</button>
                </div>
              </div>

              <div className='col-md-5'>

                <div className='Aform'> <br /> <br />
                  <h2> Add New Episodes Here</h2> <br />
                  <input ref={titleRef} placeholder=' **Anime Movie Name For Db**' className='Ainput' type="text" value={MTchild} onChange={handleepMTchildChange} />

                  <h4>Movie Title</h4>
                  <input type='text' placeholder='Episode Title' className='tbinp' value={MovieTitle} onChange={handleMovieTitleChange} /> <br /> <br />

                  <h4>Movie URL</h4>
                  <input type='text' className='Ainput' placeholder='Movie URL' value={MovieURL} onChange={handleMovieURLChange}></input> <br /> <br />

                </div>

                <br />
                <button className='BTN' onClick={handleMovieEPClick} >Add New Movie</button>

              </div>
              <div className='col-md-1'></div>
            </div>

          </div>
        </div>
      </section>}
      {/*TOP ANIME SECTION */}
      {showTopAnimes && <section>
        <div className='Top Anime'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className='col-md-5'> <br /> <br />
                <h2>Add Top Anime Cards Here</h2> <br />
                <input ref={titleRef} placeholder=' **Anime Name For Db**' className='Ainput' type="text" value={TopAchild} onChange={handleTopAchildChange} />
                <br /> <br />
                <div className='Aform'>
                  <h4>Anime Title</h4><input type='text' className='Ainput' placeholder='Anime Title' value={TopAtitle} onChange={handleTopATitleChange}></input> <br /> <br />

                  <h4>Image URL</h4> <input type='text' className='Ainput' placeholder='Image URL' value={TopAurl} onChange={handleTopAUrlChange}></input> <br /> <br />

                  <h4>Episode Discription</h4><input type='text' className='Ainput' placeholder='Anime Discription' value={TopAdisp} onChange={handleTopADispChange} ></input> <br /> <br />

                  <h4>Genre</h4><input type='text' className='Ainput' placeholder='Genre' value={TopAgenre} onChange={handleTopAGenreChange}></input> <br /> <br />

                  <h4>Rating</h4> <input type='text' className='Ainput' placeholder='Rating' value={TopArating} onChange={handleTopARatingChange}></input> <br /> <br />

                  <h4>Status</h4> <input type='text' className='Ainput' placeholder='Status' value={TopAstatus} onChange={handleTopAStatusChange}></input> <br /> <br />

                  <button className='BTN' onClick={handleTopAClick} >Add New Anime Card</button>
                </div>
              </div>
              <div className='col-md-5'>
                <div className='Aform'> <br /> <br />
                  <h2> Add New Episodes Here</h2> <br />
                  <input ref={titleRef} placeholder='Anime Name For Db ' className='Ainput' type="text" value={TopAchild} onChange={handleTopAchildChange} /> <br /> <br />

                  <h4>Episode Title</h4>
                  <input type='text' placeholder='Episode Title' className='Ainput' value={TopAepTitle} onChange={handleTopAEpTitleChange} /> <br /> <br />

                  <h4>Episode URL</h4>
                  <input type='text' placeholder='Episode URL' className='Ainput' value={TopAepURL} onChange={handleTopAEpURLChange}></input>

                </div>

                <br />
                <button className='BTN' onClick={handleTopAepClick} >Add Episode</button>
              </div>
              <div className='col-md-1'></div>

            </div>

          </div>
        </div>
      </section>}


      {/*TOP MOVIES SECTION */}
      {showTopMovies && <section>
        <div className='TopMovies'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className='col-md-5 movies'> <br /> <br />
                <h2>Add Top Movies Here</h2> <br />
                <input ref={titleRef} placeholder=' **Anime Movie Name For Db**' className='Ainput' type="text" value={TopMchild} onChange={handleTopMchildChange} />
                <br /> <br />
                <div className='Aform'>
                  <h4>Movie Title</h4><input type='text' className='Ainput' placeholder='Anime Title' value={TopMtitle} onChange={handleepTopMtitleChange}></input> <br /> <br />

                  <h4>Image URL</h4> <input type='text' className='Ainput' placeholder='Image URL' value={TopMimgURL} onChange={handleTopMUrlChange}></input> <br /> <br />

                  <h4>Movie Discription</h4><input type='text' className='Ainput' placeholder='Movie Discription' value={TopMdisp} onChange={handleTopMDispChange} ></input> <br /> <br />

                  <h4>Genre</h4><input type='text' className='Ainput' placeholder='Genre' value={TopMgenre} onChange={handleTopTopMGenreChange}></input> <br /> <br />

                  <h4>Rating</h4> <input type='text' className='Ainput' placeholder='Rating' value={TopMrating} onChange={handleTopMRatingChange}></input> <br /> <br />

                  <h4>Status</h4> <input type='text' className='Ainput' placeholder='Status' value={TopMstatus} onChange={handleTopMStatusChange}></input> <br /> <br />


                  <button className='BTN' onClick={handleTopMClick} >Add New Movie Card</button>
                </div>
              </div>

              <div className='col-md-5'>

                <div className='Aform'> <br /> <br />
                  <h2> Add New Episodes Here</h2> <br />
                  <input ref={titleRef} placeholder=' **Anime Movie Name For Db**' className='Ainput' type="text" value={TopMchild} onChange={handleTopMchildChange} />

                  <h4>Movie Title</h4>
                  <input type='text' placeholder='Episode Title' className='tbinp' value={TopMepTitle} onChange={handleTopMTitleChange} /> <br /> <br />

                  <h4>Movie URL</h4>
                  <input type='text' className='Ainput' placeholder='Movie URL' value={TopMepURL} onChange={handleTopMURLChange}></input> <br /> <br />

                </div>

                <br />
                <button className='BTN' onClick={handleTopMEPClick} >Add Top Movie</button>

              </div>
              <div className='col-md-1'></div>
            </div>

          </div>
        </div>
      </section>}

      {/* Upcoming SECTION */}
      
    </div>



  );
};
export default CRUD;