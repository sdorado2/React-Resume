import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div>Main Page</div>
      </Link>
      <Link to="/summary">
        <div>Summary</div>
      </Link>
      <Link to="/skills">
        <div>Skills</div>
      </Link>
      <Link to="/experience">
        <div>Experience</div>
      </Link>
      <Link to="/projects">
        <div>Projects</div>
      </Link>
      <Link to="/education">
        <div>Education</div>
      </Link>
    </div>
  );
}

export default Navbar;
