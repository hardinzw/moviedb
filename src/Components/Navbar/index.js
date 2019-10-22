import React from "react";
import './style.css';

const Navbar = props => {
  return (
    <nav>
      <a className="navbar-brand" href="/">Streamster</a>
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="/">Home</a>
        <a className="nav-item nav-link" href="/tv">TV</a>
        <a className="nav-item nav-link" href="/movies">Movies</a>
        <a className="nav-item nav-link" href="/signup">Sign Up</a>
        <a className="nav-item nav-link" href="/login">Log In</a>
      </div>
    </nav>
  );
}

export default Navbar;