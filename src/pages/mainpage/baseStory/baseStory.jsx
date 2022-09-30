import React from 'react';
import './baseStory.css';
import myposter from './../../../images/covervideo.jpg'
import { FaHardHat, FaTools, FaWrench, FaPencilRuler } from "react-icons/fa";

const BaseStory = () => {
    return (
        <section className='base-story'>
            <div className="container">
                <div className="content">
                    <div className="demo-video">
                        <video poster={myposter} controls width="600" height="400">
                            <source src='videos/myVideo.mp4' type="video/mp4" />
                        </video>
                    </div>
                    <div className="services">
                        <div className="services-title">
                            <h2>چه کاری برای شما می کنیم؟</h2>
                            <h3>لورم ایپسوم متن ساختگی جهت نمایش ظاهر محتوای پیج هیچ معنی خاصی ندارد</h3>
                        </div>
                        <div className="services-items">
                            <div className="services-item">
                                <FaHardHat />
                                <h4>نوسازی</h4>
                            </div>
                            <div className="services-item">
                                <FaTools />
                                <h4>نقشه کشی</h4>
                            </div>
                            <div className="services-item">
                                <FaWrench />
                                <h4>ساختمان سازی</h4>
                            </div>
                            <div className="services-item">
                                <FaPencilRuler />
                                <h4>خاکبرداری</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BaseStory;
