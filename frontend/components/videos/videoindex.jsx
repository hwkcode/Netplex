import React from 'react';
import VideoItemContainer from './videoitem_container';

function VideoIndex(props) {

    return (
        <div className='video-index-container'>
            <div className='video-index-title'>{props.genre.name}</div>
            <div className="video-index">
                {Object.values(props.videos).map((video, index) => {
                    if (video.genreIds.includes(props.genre.id)) {
                        return (
                            <li key={index}>
                                <VideoItemContainer video={video} index={index} />
                            </li>
                        );
                    }
                    return;
                })}
            </div>
        </div>
    );
};

export default VideoIndex;

















// const VideoIndex = props => {
//     const videos = Object.values(props.videos).map((video, index) => {
//         debugger;
//         if (video.genreIds.includes(props.genre.id)) {
//             // if (parseInt(video.genreIds) === props.genre.id) {    // [106] = 106
//             debugger;
//             return (
//                 <div key={index}>
//                     <VideoItemContainer video={video} />
//                 </div>
//             );
//         }
//         return;
//     });
//     // debugger;
//     return (
//         <div className='video-index-container'>
//             <p className='video-index-title'>{props.genre.name}</p>
//             <ul className='video-index'>
//                 <li>{videos}</li>
//             </ul>
//         </div>
//     );
// };



// import React, { useRef, useState } from "react";
// import VideoItem from "./videoitem";
// import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

// function VideoIndex(props) {

//     const [isMoved, setIsMoved] = useState(false);
//     const [slideNumber, setSlideNumber] = useState(0);

//     const videosRef = useRef();

//     const handleClick = (direction) => {
//         setIsMoved(true);
//         let distance = videosRef.current.getBoundingClientRect().x - 50;
//         if (direction === 'left' && slideNumber > 0) {
//             setSlideNumber(slideNumber - 1);
//             videosRef.current.style.transform = `translateX(${230 + distance}px)`;
//         }
//         if (direction === 'right' && slideNumber < 5) {
//             setSlideNumber(slideNumber + 1);
//             videosRef.current.style.transform = `translateX(${-230 + distance}px)`;
//         }
//     };

//     return (
//         <div className="video-row">
//             <div className="row-title">{props.genre.name}</div>
//             <div className="video-container">
//                 <IoChevronBackSharp
//                     className="arrow left"
//                     onClick={() => handleClick('left')}
//                     style={{ display: !isMoved && "none" }}
//                 />
//                 <div className="videos" ref={videosRef}>
//                     <VideoItem index={0} />
//                     <VideoItem index={1} />
//                     <VideoItem index={2} />
//                     <VideoItem index={3} />
//                     <VideoItem index={4} />
//                     <VideoItem index={5} />
//                     <VideoItem index={6} />
//                     <VideoItem index={7} />
//                     <VideoItem index={8} />
//                     <VideoItem index={9} />
//                     <VideoItem index={10} />
//                 </div>
//                 <IoChevronForwardSharp className="arrow right" onClick={() => handleClick('right')} />
//             </div>
//         </div>
//     );
// }

// export default VideoIndex;

// import React, { useRef, useState } from "react";
// import VideoItem from "./videoitem";
// import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";


// class VideoIndex extends React.Component {
//     debugger;
//     constructor(props) {
//         super(props);
//         this.state = {
//             isMoved: false,
//             slideNumber: 0
//         };
//         this.handleClick = this.handleClick.bind(this);
//         this.videosRef = React.createRef();
//     }

//     // const [isMoved, setIsMoved] = useState(false);
//     // const [slideNumber, setSlideNumber] = useState(0);

//     // const videosRef = useRef();

//    handleClick(direction) {
//         this.setState({ isMoved: true });
//         let distance = this.videosRef.current.getBoundingClientRect().x - 50;
//         if (direction === 'left' && this.state.slideNumber > 0) {
//             this.setState({ slideNumber: slideNumber - 1 });
//             this.videosRef.current.style.transform = `translateX(${230 + distance}px)`;
//         }
//         if (direction === 'right' && this.state.slideNumber < 5) {
//             this.setState({ slideNumber: slideNumber + 1 });
//             thiis.videosRef.current.style.transform = `translateX(${-230 + distance}px)`;
//         }
//     };

//     render() {
//         return (
//             <div className="video-row">
//                 <div className="row-title">Continue to watch</div>
//                 <div className="video-container">
//                     <IoChevronBackSharp
//                         className="arrow left"
//                         onClick={this.handleClick('left')}
//                         style={{ display: !this.state.isMoved && "none" }}
//                     />
//                     <div className="videos" ref={this.videosRef}>
//                         <VideoItem />
//                         <VideoItem />
//                         <VideoItem />
//                         <VideoItem />
//                         <VideoItem />
//                         <VideoItem />
//                         <VideoItem />
//                         <VideoItem />
//                         <VideoItem />
//                         <VideoItem />
//                     </div>
//                     <IoChevronForwardSharp className="arrow right" onClick={this.handleClick('right')} />
//                 </div>
//             </div>
//         );
//     }
// }

// export default VideoIndex;


