import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <Link to="/" className="active-page">Hem</Link>
            <Link to="/about">Om mig</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/utbildning">Utbildning</Link>
            <Link to="/arbete">Arbetserfarenhet</Link>
        </nav>
    );
}

function CustomLink ({to, children, ...props}){
  const path = window.location.pathname

  return (
    <li className= {path === to ? "active" : ""}>
    <Link to={to} {...props}>
      {children}
    </Link>
    </li>

  )


}

export default Header;


//Färgsätta aktiv -fel i logiken ovan