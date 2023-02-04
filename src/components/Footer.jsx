import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>&#169; Copyright {currentYear} by GM_Web</p>
        </footer>
    );
};

export default Footer;
