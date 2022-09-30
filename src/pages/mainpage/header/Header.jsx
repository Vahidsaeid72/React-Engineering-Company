import React from 'react';
import './Header.css';

import MyTypedComponent from './MyTypedComponent';



const Header = () => {
    return (
        <div className="header">
            <div className="content">
                <div className="container">
                    <div className="header-desc">
                        <h1>شرکت فنی و مهندسی ایرانیان</h1>
                        <MyTypedComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
