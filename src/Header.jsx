import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();

    // Function to determine if the link is active
    const isActive = (path) => {
        return location.pathname === path;
    };

    // Function to get the style for active links
    const getActiveStyle = (path) => {
        return isActive(path) ? { color: "rgb(165, 165, 165)" } : {};
    };

    return (
        <nav>
            <Link to="/" style={getActiveStyle("/")} className={isActive("/") ? "active-page" : ""}>Hem</Link>
            <Link to="/about" style={getActiveStyle("/about")} className={isActive("/about") ? "active-page" : ""}>Om mig</Link>
            <Link to="/portfolio" style={getActiveStyle("/portfolio")} className={isActive("/portfolio") ? "active-page" : ""}>Portfolio</Link>
            <Link to="/utbildning" style={getActiveStyle("/utbildning")}className={isActive("/utbildning") ? "active-page" : ""}>Utbildning</Link>
            <Link to="/arbete" style={getActiveStyle("/arbete")}className={isActive("/arbete") ? "active-page" : ""}>Arbetserfarenhet</Link>
        </nav>
    );
}

export default Header;
