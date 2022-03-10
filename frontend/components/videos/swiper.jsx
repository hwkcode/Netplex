import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import VideoItemContainer from './videoitem_container';

class SwiperRow extends React.Component {
    constructor(props) {
        super(props);
        // debugger
    }

    render() {

        // debugger
        return (
            <div className="swiper-row">
                <div className="genre-name">{this.props.genre.name}</div>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {this.props.allVideoObjects.map((video, index) => {
                        if (video.genreIds === this.props.genre.id) {
                            <SwiperSlide key={index}>
                                {/* Slide1 */}
                                <VideoItemContainer video={video} className="video-item" />
                            </SwiperSlide>
                        }
                    })}
                </Swiper>
            </div>
        );
    }
}

export default SwiperRow;


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