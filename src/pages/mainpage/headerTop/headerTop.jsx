import React from 'react';
import './headerTop.css'
import {
    FaFacebook,
    FaInstagram,
    FaTwitterSquare,
    FaLinkedin,
} from "react-icons/fa";

const HeaderTop = () => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="content">
                    <div className="wellcome">
                        <p>سلام به سایت من خوش امدید </p>
                    </div>
                    <ul className="socials">
                        <li><FaFacebook /></li>
                        <li><FaInstagram /></li>
                        <li><FaTwitterSquare /></li>
                        <li><FaLinkedin /></li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;
