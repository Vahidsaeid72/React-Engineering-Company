import React from 'react';
import './article.css';
import { FaCommentAlt, FaRegCalendarAlt } from "react-icons/fa";

const Article = () => {
    return (
        <div className="article">
            <div className="article-overlay">
                <div className="container">
                    <div className="article-content">
                        <div className="article-header-content">
                            <div className="header-content-title"><h1>مقاله ها</h1></div>
                            <div className="header-content-btn"><button>مقالات بیشتر</button></div>
                        </div>
                        <div className="article-body-content">
                            <div className="my-article">
                                <div className="date-and-comment">
                                    <span>18اردیبهشت98 <FaRegCalendarAlt /></span>
                                    <span>5 دیدگاه <FaCommentAlt /></span>
                                </div>
                                <div className="article-img">
                                    <img src="'./../../../images/bastan.jpg" alt="" />
                                </div>
                                <div className="atricle-title">
                                    <h2>سازه های باستانی</h2>
                                </div>
                                <p className="atricle-discription">
                                    لورم ایپسوم متن ساختگی برای استفاده در طراحی حاوی هیچ محتوای خاصی نمیباشد برای تست از آن استفاده می شود
                                </p>
                            </div>
                            <div className="my-article">
                                <div className="date-and-comment">
                                    <span>18اردیبهشت98 <FaRegCalendarAlt /></span>
                                    <span>5 دیدگاه <FaCommentAlt /></span>
                                </div>
                                <div className="article-img">
                                    <img src="'./../../../images/modern.jpg" alt="" />
                                </div>
                                <div className="atricle-title">
                                    <h2>سازه های مدرن</h2>
                                </div>
                                <p className="atricle-discription">
                                    لورم ایپسوم متن ساختگی برای استفاده در طراحی حاوی هیچ محتوای خاصی نمیباشد برای تست از آن استفاده می شود
                                </p>
                            </div>
                            <div className="my-article">
                                <div className="date-and-comment">
                                    <span>18اردیبهشت98 <FaRegCalendarAlt /></span>
                                    <span>5 دیدگاه <FaCommentAlt /></span>
                                </div>
                                <div className="article-img">
                                    <img src="'./../../../images/sonat.jpg" alt="" />
                                </div>
                                <div className="atricle-title">
                                    <h2>سازه های سنتی</h2>
                                </div>
                                <p className="atricle-discription">
                                    لورم ایپسوم متن ساختگی برای استفاده در طراحی حاوی هیچ محتوای خاصی نمیباشد برای تست از آن استفاده می شود
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;
