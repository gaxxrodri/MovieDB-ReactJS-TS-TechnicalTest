import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <>
      <header className="header">

      <div>
        <Link to="/" >
         Movies
        </Link>
        <Link to="/tv">
          Tv Shows
        </Link>
      </div>
      </header>
    </>
  );
}


export default Header;