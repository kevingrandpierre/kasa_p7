import React from "react";
import Logo1 from "../../LOGO (1).png";
import "./footer.css";

function Footer() {
    return (
        <footer>
            <div className="footer_logo">
                <img src={Logo1} alt="logo kasa" />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;