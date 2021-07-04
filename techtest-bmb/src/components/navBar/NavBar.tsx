import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.scss"


const NavBar = () => {

  return (
    <>
      <header className="header-container">
          <span className="header-container__buttonsLinks">
           <Link to="/" >
             Movies
           </Link>
          </span>
          <span className="header-container__buttonsLinks">
            <Link to="/tv">
             Tv Shows
            </Link>
          </span>
      </header>
    </>
  );
}


export default NavBar;