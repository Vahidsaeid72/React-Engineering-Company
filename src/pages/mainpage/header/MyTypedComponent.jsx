import React, { Component } from 'react';
import Typed from 'react-typed';
import './Header.css';

const MyTypedComponent = () => {
    return (
        <div className="my-typed">
            <Typed
                strings={[
                    'با بروز ترین ابزار ها',
                    'در سریع ترین زمان',
                    'با بهترین کیفیت']}
                typeSpeed={50}
                backSpeed={50}
                loop >
            </Typed>
        </div>
    );
}

export default MyTypedComponent;
