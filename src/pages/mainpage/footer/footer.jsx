import React from 'react';
import './footer.css';
import {
    FaFacebook,
    FaInstagram,
    FaTwitterSquare,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="overlay-footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-content-top">
                            <div className="footer-top-title"><h3>ما کی هستیم</h3></div>
                            <div className="footer-top-description">
                                <h5>
                                    هیچ محتوای خاصی نمیباشد برای تست از آن استفاده می شودهیچ محتوای خاصی نمیباشد برای تست از آن استفاده می شودلورم ایپسوم متن ساختگی برای استفاده در طراحی حاوی هیچ محتوای خاصی نمیباشد برای تست از آن استفاده می شود
                                </h5>
                                <div className="input">
                                    <div>
                                        <input type="text" placeholder='جستوجو کن' />
                                        <button><h4>میگردم</h4></button>
                                    </div>
                                    <div className="social-footer">
                                        <span><FaFacebook /></span>
                                        <span><FaInstagram /></span>
                                        <span><FaTwitterSquare /></span>
                                        <span><FaLinkedin /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-content-body">
                            <div className="hot-content">
                                <h3>مطالب داغ</h3>
                                <div className="myItems">
                                    <div className="myItems-content">
                                        <h4>مطلب 1</h4>
                                        <h5>مطلب داغ اول</h5>
                                    </div>
                                    <div className="myItems-image"><img src="./../../../images/article.png" alt="" /></div>
                                </div>
                                <div className="myItems">
                                    <div className="myItems-content">
                                        <h4>مطلب 1</h4>
                                        <h5>مطلب داغ اول</h5>
                                    </div>
                                    <div className="myItems-image"><img src="./../../../images/betonriz.jpg" alt="" /></div>
                                </div>
                                <div className="myItems">
                                    <div className="myItems-content">
                                        <h4>مطلب 1</h4>
                                        <h5>مطلب داغ اول</h5>
                                    </div>
                                    <div className="myItems-image"><img src="./../../../images/modern.jpg" alt="" /></div>
                                </div>
                            </div>
                            <div className="quick-access">
                                <h3>دسترسی سریع</h3>
                                <div className="myItems">
                                    <div className="myItems-content">
                                        <h4>مطلب 1</h4>
                                        <h5>مطلب داغ اول</h5>
                                    </div>
                                    <div className="myItems-image"><img src="./../../../images/project1.jpg" alt="" /></div>
                                </div>
                                <div className="myItems">
                                    <div className="myItems-content">
                                        <h4>مطلب 1</h4>
                                        <h5>مطلب داغ اول</h5>
                                    </div>
                                    <div className="myItems-image"><img src="./../../../images/project2.jpg" alt="" /></div>
                                </div>
                                <div className="myItems">
                                    <div className="myItems-content">
                                        <h4>مطلب 1</h4>
                                        <h5>مطلب داغ اول</h5>
                                    </div>
                                    <div className="myItems-image"><img src="./../../../images/project3.jpg" alt="" /></div>
                                </div>
                                <div className="myItems">
                                    <div className="myItems-content">
                                        <h4>مطلب 1</h4>
                                        <h5>مطلب داغ اول</h5>
                                    </div>
                                    <div className="myItems-image"><img src="./../../../images/project4.jpg" alt="" /></div>
                                </div>
                            </div>
                            <div className="Examples-works">
                                <h3>نمونه کار ها</h3>
                                <div className="myItems">
                                    <div className="myItems-content">
                                        <h4>مطلب 1</h4>
                                        <h5>مطلب داغ اول</h5>
                                    </div>
                                    <div className="myItems-image"><img src="./../../../images/project5.jpg" alt="" /></div>
                                </div>
                                <div className="myItems">
                                    <div className="myItems-content">
                                        <h4>مطلب 1</h4>
                                        <h5>مطلب داغ اول</h5>
                                    </div>
                                    <div className="myItems-image"><img src="./../../../images/sonat.jpg" alt="" /></div>
                                </div>
                                <div className="myItems">
                                    <div className="myItems-content">
                                        <h4>مطلب 1</h4>
                                        <h5>مطلب داغ اول</h5>
                                    </div>
                                    <div className="myItems-image"><img src="./../../../images/bastan.jpg" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-write">
                    <h5>طراحی شده با استفاده از دوره اموزشی استاد معصومی در سایت تاپ لرن</h5>
                </div>
            </div>
        </div>
    );
}

export default Footer;
