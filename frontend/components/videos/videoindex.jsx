import VideoItemContainer from './videoitem_container';
import React, { useRef, useState } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

function VideoIndex(props) {

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const videosRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = videosRef.current.getBoundingClientRect().x - 50;
        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            videosRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === 'right' && slideNumber < 2) {
            setSlideNumber(slideNumber + 1);
            videosRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    };

    return (
        <div className='video-index-container'>                                        
            <div className='video-index-title'>{props.genre.name}</div>
            <div className="video-index">                                               
                <IoChevronBackSharp
                    className="arrow left"
                    onClick={() => handleClick('left')}
                    style={{ display: !isMoved && "none" }}
                />
                <div className="video-items" ref={videosRef}>                           
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
                <IoChevronForwardSharp className="arrow right" onClick={() => handleClick('right')} />
            </div>
        </div>
    );
};

export default VideoIndex;