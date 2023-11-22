import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Londynek.net</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Add News</Link>
      </nav>
    </header>
  );
}

export default Header;
