
import React from 'react'
import { FaLinkedin } from "react-icons/fa";

export default function Footer(){
    return(
<footer>
    <a href="https://www.linkedin.com/in/anna-s%C3%B6derberg-a486897b/" target="_blank" title='LinkedIn-profil'>
    <FaLinkedin className="fa-brands fa-linkedin" />
    </a>
    <p className="footernumber">Telefon: 0703 88 37 80</p>
</footer>
    );
}
