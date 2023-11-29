import React from "react";
import { NavLink } from "react-router-dom";

function Navbvar() {
  return (
    <ul>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/">Deconnexion</NavLink>
      </li>
    </ul>
  );
}

export default Navbvar;
