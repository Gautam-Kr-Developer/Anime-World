import React from 'react';
import img from '../img/NO Internet.png'
import './Nointernet.css'
const NoInternet = () => {
  return (
    <div>
      <div >
        
        <img className='nointernet' src={img} alt='NO INTERNET'/>
      </div>
    </div>
  );
};

export default NoInternet;
