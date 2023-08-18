import React from "react";
import Logo1 from "../../assets/images/LOGO(1).png";
import "./footer.css";

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_contain'>
                <img className='footer_contain_logo' src={Logo1} alt='Logo du site'></img>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}


export default Footer;