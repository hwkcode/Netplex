import React, { useRef, useState } from "react";
import Video from "./video/video";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

function VideoRow() {

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
        if (direction === 'right' && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            videosRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    };

    return (
        <div className="video-row">
            <div className="row-title">Continue to watch</div>
            <div className="video-container">
                <IoChevronBackSharp 
                    className="arrow left" 
                    onClick={() => handleClick('left')} 
                    style= {{display: !isMoved && "none"}}  
                />
                <div className="videos" ref={videosRef}>
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                </div>
                <IoChevronForwardSharp className="arrow right" onClick={() => handleClick('right')} />
            </div>
        </div>
    );
}

export default VideoRow;