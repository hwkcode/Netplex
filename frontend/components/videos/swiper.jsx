import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";

export default function Swiper() {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    };
    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={() => handleClick("left")}
                    style={{ display: !isMoved && "none" }}
                />
                <div className="container" ref={listRef}>
                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem index={3} />
                    <ListItem index={4} />
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem index={7} />
                    <ListItem index={8} />
                    <ListItem index={9} />
                </div>
                <ArrowForwardIosOutlined
                    className="sliderArrow right"
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    );
}


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from "swiper";
// import VideoItemContainer from './videoitem_container';

// class SwiperRow extends React.Component {
//     constructor(props) {
//         super(props);
//         // debugger
//     }

//     render() {

//         // debugger
//         return (
//             <div className="swiper-row">
//                 <div className="genre-name">{this.props.genre.name}</div>
//                 <Swiper
//                     slidesPerView={6}
//                     spaceBetween={10}
//                     loop={true}
//                     pagination={{
//                         clickable: true,
//                     }}
//                     navigation={true}
//                     modules={[Pagination, Navigation]}
//                     className="mySwiper"
//                 >
//                     {this.props.allVideoObjects.map((video, index) => {
//                         if (video.genreIds === this.props.genre.id) {
//                             <SwiperSlide>
//                                 {/* Slide1 */}
//                                 <VideoItemContainer video={video} className="video-item" />
//                             </SwiperSlide>;
//                         }
//                     })}
//                 </Swiper>
//             </div>
//         );
//     }
// }

// export default SwiperRow;