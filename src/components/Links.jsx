import React from "react";
import { NavLink } from "react-router-dom";
import { FiLogIn, FiHome } from "react-icons/fi";
import { FaRegRegistered } from "react-icons/fa";

const Links = () => {
  return (
    <div
      className="links"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <NavLink to="/login">
        <i>
          <FiLogIn />
        </i>
        Login
      </NavLink>
      <NavLink to="/register">
        <FaRegRegistered />
        Register
      </NavLink>
      <NavLink to="/">
        <FiHome />
        Home
      </NavLink>
    </div>
  );
};

export default Links;
