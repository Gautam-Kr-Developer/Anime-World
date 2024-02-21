import { React } from 'react'
import { Card } from 'react-bootstrap';
import './Home.css'
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from "react";
import './db.css'
import firebaseConfig from './FirebaseConfi'

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Movies() {

  const [databaseData, setDatabaseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const parentRef = collection(db, 'Topmovies');
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
  return (

    <div>
      
    <div className="container">
      <div className="card-container">
        {databaseData && Object.entries(databaseData).map(([key, value]) => (
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
    </div>
  </div>
  )
}

export default Movies
