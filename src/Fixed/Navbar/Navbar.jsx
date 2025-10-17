import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="sg:flex-col sm:flex justify-between p-2 border border-pink-400 items-center">
      <nav className="flex gap-3 sm:gap-10 justify-center ">
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/Register">Sign up</NavLink>
        <NavLink to="/LogIn">LogIn</NavLink>
      </nav>
       <button className="bg-purple-500 px-3 p-1 rounded-lg text-white">LogIn</button>
    </div>
  );
};

export default Navbar;
