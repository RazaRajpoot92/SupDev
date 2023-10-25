import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.scss"

function Header(){
    return(
        <nav>
            <h1>SupDev</h1>

            <main>

                <Link to={"/"}>Home</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/#about"}>About</Link>
                <Link to={"/#Brands"}>Brands</Link>
                <Link to={"/service"}>Services</Link>

            </main>

        </nav>
    );
}

export default Header;