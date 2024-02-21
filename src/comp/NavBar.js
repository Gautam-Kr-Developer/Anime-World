import React from 'react';
import { Navbar, Nav,Form,} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link, useLocation,Navigate } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Discription from './Discription';
import Admin from './Admin';
import CRUD from './CRUD';
import Anime from './Anime';
import AnimeMovies from './AnimeMovies';
import Logo from '../img/logo-.png';
import Search from './Search'
import Result from './Result';



function NavbarLinks() {
  const location = useLocation();

  return (
    <Nav style={{paddingLeft:'5%', backgroundColor: 'transparent' }} navbarScroll>
      <Nav.Link as={Link} to="/home" className={location.pathname === '/home' ? 'active' : ''}>
        Home
      </Nav.Link>
      <Nav.Link as={Link} to="/Anime" className={location.pathname === '/Anime' ? 'active' : ''}>
        Anime
      </Nav.Link>
      <Nav.Link as={Link} to="/Movies" className={location.pathname === '/Movies' ? 'active' : ''}>
        Movies
      </Nav.Link>
      <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>
        About
      </Nav.Link>
      <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
        Contact
      </Nav.Link>
     
      
      
    </Nav>
    
  );
}

export default function NavbarComp() {

  return (
    <>
      <Router>
        
        <div>
          <Navbar bg="dark" variant={'dark'} expand="lg">
            <Navbar.Brand as={Link} to="/" style={{ marginLeft: '10%' }}>
              <img className="Logo" src={Logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <NavbarLinks />
         
              <Form className='search' ><Search/></Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Player" element={<Discription />} />
            <Route path="/DemonDevAdmin" element={<Admin />} />
            <Route path="/CRUD" element={<CRUD />} />
            <Route path="/Anime" element={<Anime />} />
            <Route path="/Movies" element={<AnimeMovies />} />
            <Route path="/Result" element={<Result />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}