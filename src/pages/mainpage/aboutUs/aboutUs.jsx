import React from 'react';
import './aboutUs.css';
import {
    FaFacebook,
    FaInstagram,
    FaTwitterSquare,
    FaLinkedin,
} from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="AboutUs">
            <div className="container">
                <div className="AboutUs-content">
                    <div className="description">
                        <div className="description-title">
                            <h2>درباره ما</h2>
                        </div>
                        <div className="description-text">
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد،</p>
                        </div>
                        <div className="description-btn">
                            <button>درباره ما</button>
                        </div>
                    </div>
                    <div className="myImages">
                        <div className="about-team-item">
                            <img src="/images/1.jpg" alt="" />
                            <div className="about-slide">
                                <ul>
                                    <li><a href="/"><FaFacebook /></a></li>
                                    <li><a href="/"><FaInstagram /></a></li>
                                    <li><a href="/"><FaTwitterSquare /></a></li>
                                    <li><a href="/"><FaLinkedin /></a></li>
                                </ul>
                                <h4>محمد نادری</h4>
                                <h6>بک اند</h6>
                            </div>
                        </div>
                        <div className="about-team-item">
                            <img src="/images/2.jpg" alt="" />
                            <div className="about-slide">
                                <ul>
                                    <li><a href="/"><FaFacebook /></a></li>
                                    <li><a href="/"><FaInstagram /></a></li>
                                    <li><a href="/"><FaTwitterSquare /></a></li>
                                    <li><a href="/"><FaLinkedin /></a></li>
                                </ul>
                                <h4>وحید سعید</h4>
                                <h6>فرانت اند</h6>
                            </div>
                        </div>
                        <div className="about-team-item">
                            <img src="/images/4.jpg" alt="" />
                            <div className="about-slide">
                                <ul>
                                    <li><a href="/"><FaFacebook /></a></li>
                                    <li><a href="/"><FaInstagram /></a></li>
                                    <li><a href="/"><FaTwitterSquare /></a></li>
                                    <li><a href="/"><FaLinkedin /></a></li>
                                </ul>
                                <h4>ناهید محمدی</h4>
                                <h6>سئو</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
