import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from './FirebaseConfi'



firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function Contact() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const handleepNameChange = (event) => {
    setName(event.target.value);
  };
 
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handleMsgChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    if (!Name || !Email || !Message) {
      alert('Please fill all fields');
      return;
    }

    const firestore = firebase.firestore();
    const parentRef = firestore.collection("Contact");
    const childRef = parentRef.doc(Name);
    const data = {
      Name: Name,
      Email: Email,
      Message: Message,
    };
    childRef.set(data);
    alert("Thank you for contacting Anime World, We get in touch with you as soon as possible.!")
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={{ backgroundColor:'black', height:'93.2vh', paddingTop:'5%'}}>
      <div className='container' style={{padding:'1%'}}>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-6' style={{backgroundColor:'aliceblue',padding:'2% 0% 2% 10%'}}>
            <h1 style={{marginLeft:'5%', marginBottom:'4%', width:'fit-content', padding:'1% 5%', borderStyle:'solid', borderWidth:'0px 0px 2px 0px'}}>CONTACT US</h1>
            <h4>Name :</h4>
            <input type='text' placeholder='Name  *' style={{width:'75%', height:'35px'}}  value={Name} onChange={handleepNameChange}/> <br/><br/>
            <h4>E-mail :</h4>
            <input type='email' placeholder='Email *' style={{width:'75%', height:'35px'}} value={Email} onChange={handleEmailChange} /><br/><br/>
            <h4>Message :</h4>
            <textarea className='txtarea' placeholder='Enter your message here! *'  value={Message} onChange={handleMsgChange}></textarea><br/><br/>
            <Button onClick={handleClick}>Submit</Button>
          </div>
          <div className='col-md-2'></div>
          <div className='col-md-2'></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
