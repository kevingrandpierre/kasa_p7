import React from "react";
import Logo from "../../LOGO.png";
import "./header.css";

function Header() {
    return (
        <header>
            <nav className="navigation">
                <div className="nav_logo">
                    <img src={Logo} alt="logo kasa" />
                </div>
                <ul className="nav_links">
                    <li>
                        <a href="/">Accueil</a>
                    </li>
                    <li>
                        <a href="/about">A propos</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;