import React from 'react';
import './Footer.css'

const getCurrentDate = () => {
    const year = new Date().getFullYear();
    return year;
}
const Footer = () => {
    return (
        <div className="container App footer mt-3">
            <p>&copy;All rights reserved by Biponi Shop. {getCurrentDate()}</p>
        </div>
    );
};

export default Footer;