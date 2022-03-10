import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import VideoItemContainer from './videoitem_container';


function SwiperContainer(props) {

    SwiperCore.use([Navigation]);

    if (Object.values(props.allVideoObjects).length) {
        // debugger
        return (
            <div className="carousel" >
                <p>{props.genre.name}</p>
                <Swiper loop={true} navigation slidesPerView={6}>
                    {props.allVideoObjects.map((video, index) => {
                        if (video.genreIds === props.genre.id) {
                            <SwiperSlide key={index} className="slide">
                                {/* Slide1 */}
                                console.log(video.genreIds);
                                <VideoItemContainer video={video} className="video-item" />
                            </SwiperSlide>;
                        }
                    })}
                </Swiper>
            </div>
        );
    } else {
        return (null);
    }
}
export default SwiperContainer;