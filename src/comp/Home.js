import React from 'react';
import { Carousel,} from 'react-bootstrap';
import './Home.css';
import opvideo from '../img/onepiece.mp4'
import narutovideo from '../img/naruto.mp4'
import dbzvideo from '../img/dbz.mp4'
import bleachvideo from '../img/bleach.mp4'
import opmvideo from '../img/onepunch.mp4'
import Movies from './Movies';
import TopAnime from './TopAnime';
import './db.css'
import naruto from '../img/CARSOEL/NARU.jpg'
import op from '../img/CARSOEL/OP1.jpg'
import opm from '../img/CARSOEL/saitama.jpg'
import bleach from '../img/CARSOEL/bleach.jpg'
import goku from '../img/CARSOEL/GOKU (1).png'
const Home = () => {
  return (
    <div>
      {/* video slider starts here */}
      <div className='videocarousel'>
      <Carousel>
      <Carousel.Item>
            <video autoPlay muted loop>
            <source src={opvideo} type="video/mp4" />
          </video>
        <Carousel.Caption>
          <h3>One Piece</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          
      <video autoPlay muted loop>
            <source src={narutovideo} type="video/mp4" />
          </video>
        

        <Carousel.Caption>
          <h3>Naruto</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <video autoPlay muted loop>
            <source src={dbzvideo} type="video/mp4" />
          </video>

        <Carousel.Caption>
          <h3>Dragon Ball Z</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <video autoPlay muted loop>
            <source src={opmvideo} type="video/mp4" />
          </video>

        <Carousel.Caption>
          <h3>One Punch Man</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <video autoPlay muted loop>
            <source src={bleachvideo} type="video/mp4" />
          </video>
        <Carousel.Caption>
          <h3>Bleach</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    {/* video slider Ends here! */}


{/* IMG SLIDER */}
<div className='imgcarousel'>
    <Carousel className='carousel' >
      <Carousel.Item>
          <img src={op} alt='' />
        <Carousel.Caption>
          <h3>One Piece</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={naruto} alt=''/>
        <Carousel.Caption>
          <h3>Naruto</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={goku} alt=''/>
        <Carousel.Caption>
          <h3>Dragon Ball Z</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={opm} alt=''/>

        <Carousel.Caption>
          <h3>One Punch Man</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={bleach} alt=''/>
        <Carousel.Caption>
          <h3>Bleach</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='Body'>

       
        <h1 className='Title'style={{color:'aliceblue'}}>Top Animes</h1>
     
             <TopAnime/>


             <h1 className='Title1'>Popular Animes Movies</h1>
            
            <Movies/>
  
          {/* content ends here */}
              
          
    </div>
    {/* Body ends here */}
                  

    


    </div>
  );
};

export default Home;
