import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

//styles & images
import "./navbar.css";
import Temple from "../assets/temple.svg";

import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="logo" />
          <span>Will Do</span>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
