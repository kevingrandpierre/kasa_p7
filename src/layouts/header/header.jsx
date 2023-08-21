import React, { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/LOGO.png";
import "./header.css";

function Header() {
    const location = useLocation();

    return (
        <header>
            <nav className="navigation">
                <div className="nav_logo">
                    <Link to="/">
                        <img src={Logo} alt="logo kasa" />
                    </Link>
                </div>
                <ul className="nav_links">
                    <li>
                        {/*Permet de définir un lien vers la page d'accueil et de le souligner s'il n'est pas actif*/}
                        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link>
                    </li>
                    <li>
                        {/* Permet de définir un lien vers la page about et de le souligner s'il n'est pas actif  */}
                        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
