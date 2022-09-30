import React from 'react';
import './Navbar.css'
import { FcLibrary } from "react-icons/fc";
const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="container">
                <div className="content">
                    <ul className="nav-menu">
                        <li> <a href="/">صفحه اول</a></li>
                        <li><a href="/">خدمات ما</a></li>
                        <li><a href="/">درباره ما</a></li>
                        <li><a href="/">تماس با شرکت</a></li>
                    </ul>
                    <div className="logo-brand">
                        <FcLibrary />
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
