import React, { useState } from 'react';
import { Form, FormControl, Button,Dropdown } from 'react-bootstrap';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { useNavigate } from 'react-router-dom';
import firebaseConfig from './FirebaseConfi'


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function Search() {
  const [selectedOption, setSelectedOption] = useState('Anime');
const [inputValue, setInputValue] = useState('');

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  }

  const navigate = useNavigate();


 async function handleSearchClick() {
    if (!inputValue) {
      alert('Please enter search term');
      return;
    }

    if (selectedOption === 'Anime') {
      const parentRef = collection(db, 'Anime');
      const snapshot = await getDocs(parentRef);
      const animeList = [];

      for (const docRef of snapshot.docs) {
        const docData = docRef.data();
        if (docData.title.toLowerCase().includes(inputValue.toLowerCase())) {
          const childRef = doc(parentRef, docRef.id, 'eplist', 'episodes');
          const childSnapshot = await getDoc(childRef);
          const childData = childSnapshot.exists() ? childSnapshot.data() : {};

          animeList.push({ ...docData, eplist: childData });
        }
      }

      if (animeList.length > 0) {
        navigate('/Result', { state: { animeList :animeList } });

      } else {
        alert('No results found');
      }
   
   
    } else {
      const parentRef = collection(db, 'Movies');
      const snapshot = await getDocs(parentRef);
      const animeList = [];

      for (const docRef of snapshot.docs) {
        const docData = docRef.data();
        if (docData.title.toLowerCase().includes(inputValue.toLowerCase())) {
          const childRef = doc(parentRef, docRef.id, 'eplist', 'episodes');
          const childSnapshot = await getDoc(childRef);
          const childData = childSnapshot.exists() ? childSnapshot.data() : {};

          animeList.push({ ...docData, eplist: childData });
        }
      }

      if (animeList.length > 0) {
        navigate('/Result', { state: { animeList :animeList } });

      } else {
        alert('No results found');
      }
   
     
    }
  }
  return (
    <div>
      <Form className="d-flex ml-auto ">
                <FormControl type="search" className='' placeholder="Search" aria-label="Search" onChange={(event) => setInputValue(event.target.value)} />
                <Dropdown className="ml-2 dropdown">
                  <Dropdown.Toggle variant="outline-light">
                    {selectedOption}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item value="Anime" onClick={() => handleOptionChange('Anime')}>Anime</Dropdown.Item>
                    <Dropdown.Item value="Movies" onClick={() => handleOptionChange('Movies')}>Movies</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button variant="outline-light" onClick={handleSearchClick}>Search</Button>
              </Form>
    </div>
  )
}

export default Search
