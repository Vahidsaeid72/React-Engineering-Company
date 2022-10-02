import React, { useEffect, useState } from 'react';
import './project.css';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import MySlider from './mySlider';





const Project = () => {





    return (
        <div className="project">
            {/* <div className="icon-next">
                <button ><FaAngleRight /></button>
                <button ><FaAngleLeft /></button>
            </div> */}
            <div className="container">
                <div className="project-content">
                    <div className="header-content">
                        <div className="header-content-title"><h1>پروژه ها</h1></div>
                        <div className="header-content-btn"><button>اینجا کلیک کنید</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
