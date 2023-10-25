import React from "react";
import "../style/Footer.scss";

const Footer = ()=>{
    return(
        <div className="footer">

            <div className="brand-name">
                <h1>Super Dev</h1>
                <p>@All right reserved</p>
            </div>

            <div className="footer-links">
                <h2 >Follow Us</h2>
                <a href="#">Youtube</a>
                <a href="#">Facebook</a>
                <a href="#">GitHub</a>
                <a href="#">Instagram</a>
            </div>

        </div>
    );
}

export default Footer;