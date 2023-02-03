import { Link } from "react-router-dom";

//styles & images
import "./navbar.css";
import Temple from "../assets/temple.svg";

import React from "react";

const Navbar = () => {
  return (
    <div>
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
    </div>
  );
};

export default Navbar;
