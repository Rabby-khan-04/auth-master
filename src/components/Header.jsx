import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar bg-primary text-primary-content justify-between">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        Auth Master
      </Link>
      <nav>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
