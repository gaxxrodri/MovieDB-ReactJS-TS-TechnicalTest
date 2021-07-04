import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <section className="notFound-container">
    <h1>Error - 404</h1>
    <h3>Nothing to see here...</h3>
    <Link to="/">Back to safety</Link>
  </section>
);

export default NotFound;
