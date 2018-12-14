import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <div className="Navigation">
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/location">Location</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Navigation;
