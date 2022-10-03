import React, { useState } from 'react';
import { Data } from './Data';
import './TabMenu.css';
import img1 from './../../../images/4.jpg';

const TabMenu = () => {
    const [data, setData] = useState(Data);
    const [selectedData, setSelectedData] = useState(data[0]);


    const handleSelect = (selectedId) => {
        const index = data.findIndex(d => d.id === selectedId);
        setSelectedData(data[index]);
        console.log(index)
    }
    return (
        <div className="TabMenu">
            <div className="overlay">
                <div className="container">
                    <div className="TabMenu-title">
                        <h1>خدمات دیگر ما</h1>
                    </div>
                    <div className="content">

                        <ul className="content-title">
                            {data.map(d => (
                                <li key={d.id + '_id'} onClick={() => handleSelect(d.id)} className={`${d.id === selectedData.id ? 'active' : ''}`}>
                                    <h4>{d.title}</h4>
                                    <div className="content-title-icon">{d.icon}</div>
                                </li>
                            ))}

                        </ul>

                        <div className="content-body">
                            <div className="content-body-mohtava">
                                <div className="content-body-title"><h3>{selectedData.title}</h3></div>
                                <div className="content-body-description">{selectedData.text}</div>
                            </div>
                            <div className="content-body-pic"><img src={`${selectedData.image}`} alt="" /></div>
                        </div>
                        <div className="content-more-info">
                            <p>اطلاعات بیشتر ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabMenu;
