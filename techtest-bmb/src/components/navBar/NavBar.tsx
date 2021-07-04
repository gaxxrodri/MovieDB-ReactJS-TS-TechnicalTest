import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.scss"
import logo from '../../assets/logo.svg';


const NavBar = () => {

  return (
    <>
      <nav className="nav-container">
        <Link className="logo" to='/'>
          <img src={logo} alt="logo" />
        </Link>
          <span className="nav-container__buttonsLinks">
            <Link to="/" >
                Movies
            </Link>
          </span>
          <span className="nav-container__buttonsLinks">
            <Link to="/tv">
                Tv Shows
            </Link>
          </span>
      </nav>
    </>
  );
}


export default NavBar;