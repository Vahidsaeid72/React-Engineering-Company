import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DataProject } from './data';
import './mySlider.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const MySlider = () => {
    const [myData, setMyData] = useState(DataProject);


    return (
        <Carousel
            className="project-slider"
            responsive={responsive}
            swipeable={false}
            draggable={false}
            showDots={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all 0.5s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            // dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >

            {myData.map(d => (
                <div key={d.id + "_slide"} className="content-slid">
                    <img src={d.image} alt="" />
                    <h2>{d.title}</h2>
                    <p>{d.text}</p>
                </div>
            ))}

        </Carousel>

    );
}

export default MySlider;
