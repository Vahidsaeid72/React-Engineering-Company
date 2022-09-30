import React from 'react';
import './Specifications.css';
import { FaRegClock, FaMapMarkedAlt, FaPhoneAlt, FaMobileAlt } from "react-icons/fa";

const Specifications = () => {
    return (
        <div className="Specifications">
            <div className="container">
                <div className="content">
                    <div className="items-header">
                        <div>
                            <p>شنبه تا پنجشنبه 8 صبح تا 5 بعد از ظهر</p>
                            <p>جمعه تعطیل است</p>
                        </div>
                        <div className="MyIcons">
                            <FaRegClock />
                        </div>
                    </div>
                    <div className="items-header">
                        <div>
                            <p>نیشابور خیابان بعثت پلاک 48</p>
                        </div>
                        <div className="MyIcons">
                            <FaMapMarkedAlt />
                        </div>
                    </div>
                    <div className="items-header">
                        <div>
                            <p>شنبه تا پنجشنبه 8 صبح تا 5 بعد از ظهر</p>
                            <p>جمعه تعطیل است</p>
                        </div>
                        <div className="MyIcons">
                            <FaPhoneAlt />
                        </div>
                    </div>
                    <div className="items-header">
                        <div>
                            <p>شنبه تا پنجشنبه 8 صبح تا 5 بعد از ظهر</p>
                            <p>جمعه تعطیل است</p>
                        </div>
                        <div className="MyIcons">
                            <FaMobileAlt />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Specifications;
