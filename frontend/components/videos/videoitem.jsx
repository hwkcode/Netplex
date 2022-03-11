import React from "react";
// import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { IoPlayCircleOutline, IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

class VideoItem extends React.Component {
    constructor(props) {
        // debugger
        super(props);
        this.state = {
            hover: false,
            // inList: Object.keys(props.myVideos).includes(String(props.video.id))
        };
        this._handleMouseEnter = this._handleMouseEnter.bind(this);
        this._handleMouseLeave = this._handleMouseLeave.bind(this);
        this._handleClick = this._handleClick.bind(this);
        this._addToList = this._addToList.bind(this);
        this._removeFromList = this._removeFromList.bind(this);
    }


    _handleMouseEnter() {
        this.setState({ hover: true });
    }
    _handleMouseLeave() {
        this.setState({ hover: false });
    }

    _handleClick(e) {
        e.preventDefault();
        debugger
        this.props.history.push(`/videos/${this.props.video.id}`);
    }

    _addToList() {
        this.setState({ inList: true });
        this.props.addToList(this.props.video);
    }

    _removeFromList() {
        this.setState({ inList: false });
        this.props.removeFromList(this.props.video);
    }

    render() {
        if (!this.props.video) { return null; }

        const play = <IoPlayCircleOutline />;
        const add = <IoAddCircleOutline />;
        const remove = <IoRemoveCircleOutline />;

        const myListButton = this.state.inList ? (
            <IoRemoveCircleOutline
                className={'list-btn'}
                onClick={this._removeFromList}
            />

            // <img
            //     className={'list-btn'}
            //     onClick={this._removeFromList}
            //     src={remove}
            //     alt='Remove from My List' />
        ) : (
            <IoAddCircleOutline
                className={'list-btn'}
                onClick={this._addToList}
            />

            // <img
            //     className={'list-btn'}
            //     onClick={this._addToList}
            //     src={add} />
        );


        // const item = this.state.hover ? (
        //     <div className='videos-container'>
        //         <video
        //             src={this.props.video.video}
        //             autoPlay
        //             muted
        //             // playing={this.state.hover}
        //             className='video-item'
        //             width='100%'
        //             height='100%'
        //             onEnded={this.handleMouseLeave}
        //             onClick={this._handleClick}
        //         />
        //         <div className='modal-btns'>
        //             <img className='list-btn' onClick={this._handleClick} src={play} />
        //             {myListButton}
        //         </div>
        //         <p
        //             className='video-description'
        //         >{this.props.video.description.slice(0, 150) + '...'}</p>
        //     </div>
        // ) : (
        //     <img
        //         src={this.props.video.thumbnail}
        //         className='video-thumbnail' />
        // );

        return (
            <div
                className='show-container'
                // style={{ left: this.state.hover && this.props.index * 225 - 50 + this.props.index * 2.5 }}
                onMouseEnter={this._handleMouseEnter}
                onMouseLeave={this._handleMouseLeave}
            >
                <img
                    src={this.props.video.thumbnail}
                />
                {this.state.hover && (
                    <>
                        <video
                            src={this.props.video.video}
                            autoPlay
                            muted
                            // playing={this.state.hover}
                            // className='video-item'
                            // width='100%'
                            // height='100%'
                            onEnded={this.handleMouseLeave}
                            onClick={this._handleClick}
                        />
                        <div className="video-info">
                            <div className='modal-btns'>
                                <Link to={`/videos/${this.props.video.id}`}>
                                    <IoPlayCircleOutline
                                        className='list-btn'
                                        // onClick={this._handleClick}
                                    />
                                </Link>
                                {myListButton}
                            </div>
                            <p className='video-description'>
                                {this.props.video.description.slice(0, 150) + '...'}
                            </p>
                        </div>
                    </>
                )}
            </div>
        );
    }

}

export default VideoItem;
// export default withRouter(VideoItem);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React from "react";
// // import { withRouter } from "react-router";
// import { IoPlayCircleOutline, IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

// class VideoItem extends React.Component {
//     constructor(props) {
//         // debugger
//         super(props);
//         this.state = {
//             hover: false,
//             // inList: Object.keys(props.myVideos).includes(String(props.video.id))
//         };
//         this._handleMouseEnter = this._handleMouseEnter.bind(this);
//         this._handleMouseLeave = this._handleMouseLeave.bind(this);
//         this._handleClick = this._handleClick.bind(this);
//         this._addToList = this._addToList.bind(this);
//         this._removeFromList = this._removeFromList.bind(this);
//     }


//     _handleMouseEnter() {
//         this.setState({ hover: true });
//     }
//     _handleMouseLeave() {
//         this.setState({ hover: false });
//     }

//     _handleClick(e) {
//         e.preventDefault();
//         this.props.history.push(`/videos/${this.props.video.id}`);
//     }

//     _addToList() {
//         this.setState({ inList: true });
//         this.props.addToList(this.props.video);
//     }

//     _removeFromList() {
//         this.setState({ inList: false });
//         this.props.removeFromList(this.props.video);
//     }

//     render() {
//         if (!this.props.video) { return null; }

//         const play = <IoPlayCircleOutline />;
//         const add = <IoAddCircleOutline />;
//         const remove = <IoRemoveCircleOutline />;

//         const myListButton = this.state.inList ? (
//             <img
//                 className={'list-btn'}
//                 onClick={this._removeFromList}
//                 src={remove}
//                 alt='Remove from My List' />
//         ) : (
//             <img
//                 className={'list-btn'}
//                 onClick={this._addToList}
//                 src={add} />
//         );


//         const item = this.state.hover ? (
//             <div className='videos-container'>
//                 <video
//                     src={this.props.video.video}
//                     playing={this.state.hover}
//                     className='react-player'
//                     width='100%'
//                     height='100%'
//                     onEnded={this.handleMouseLeave}
//                     onClick={this._handleClick}
//                 />
//                 <div className='modal-btns'>
//                     <img className='list-btn' onClick={this._handleClick} src={play} />
//                     {myListButton}
//                 </div>
//                 <p
//                     className='video-description'
//                 >{this.props.video.description.slice(0, 150) + '...'}</p>
//             </div>
//         ) : (
//             <img
//                 src={this.props.video.thumbnail}
//                 className='player-thumbnail' />
//         );

//         return (
//             <div
//                 onMouseEnter={this._handleMouseEnter}
//                 onMouseLeave={this._handleMouseLeave}
//                 className='video-item'
//             >
//                 {item}
//             </div>
//         );
//     }

// }



//////////////////////////////////////////////////////////////////////////////////////////////////////////




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { IoPlaySharp, IoAddCircleSharp, IoThumbsUpSharp, IoThumbsDownSharp } from "react-icons/io5";

// export default function VideoItem({ index }) {
//     const [isHovered, setIsHovered] = useState(false);
//     const newLocal = "https://netplex-seeds.s3.amazonaws.com/despicableme2.mp4";
//     const trailer = newLocal;

//     return (
//         <div
//             className="videoItem"
//             style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//         >
//             <img
//                 src="https://netplex-seeds.s3.amazonaws.com/despicableme2thumbnail.png"
//                 alt=""
//             />
//             {isHovered && (
//                 <>
//                     <video src={trailer} autoPlay={true} loop muted />
//                     <div className="itemInfo">
//                         <div className="icons">
//                             <Link to={"/videos/1"}><IoPlaySharp className="icon" /></Link>
//                             <IoAddCircleSharp className="icon" />
//                             <IoThumbsUpSharp className="icon" />
//                             <IoThumbsDownSharp className="icon" />
//                         </div>
//                         <div className="itemInfoTop">
//                             <span>1 hr 37 mins</span>
//                             <span className="limit">PG</span>
//                             <span>2013</span>
//                         </div>
//                         <div className="desc">
//                             More gadgets, more minions, more mayhem! As Gru turns his back on his baddie ways to care for his girls, a secret agency recruits him to fight evil.
//                         </div>
//                         <div className="genre">Comedy</div>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// }

// export default VideoItem;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { IoPlayCircleSharp } from "react-icons/io5";
// import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

// class VideoItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.videoElement = React.createRef();
//         this.videoContainer = React.createRef();
//         this.state = {
//             muteStatus: true,
//             hovering: false,
//             videoPlaying: 0,
//         };
//         this.stopVideo = this.stopVideo.bind(this);
//         this.playVideo = this.playVideo.bind(this);
//         this.shortenDescription = this.shortenDescription.bind(this);
//         this.toggleMute = this.toggleMute.bind(this);
//         this.addToList = this.addToList.bind(this);
//         this.deleteListItem = this.deleteListItem.bind(this);
//         this.throttlePlay = this.throttlePlay.bind(this);
//     }


//     addToList(e) {
//         this.props.addToList({
//             video_id: this.props.video.id,
//             user_id: this.props.id,
//         });
//     }

//     deleteListItem(e) {
//         this.props.deleteListItem({
//             video_id: this.props.video.id,
//             user_id: this.props.id,
//         });
//     }

//     toggleMute() {
//         if (this.state.muteStatus) {
//             this.videoElement.current.muted = false;
//             this.setState({
//                 muteStatus: false
//             });
//         } else {
//             this.videoElement.current.muted = true;
//             this.setState({
//                 muteStatus: true
//             });
//         }
//     }

//     playVideo() {
//         if (this.state.hovering === true) {
//             this.videoElement.current.play();
//             this.setState({
//                 videoPlaying: this.props.video.id
//             });
//         }
//     }

//     stopVideo() {
//         this.setState({
//             hovering: false
//         });
//         if (this.state.videoPlaying === this.props.video.id) {
//             this.videoElement.current.load();
//             this.setState({
//                 videoPlaying: 0
//             });
//         }
//     }

//     shortenDescription(description) {
//         return description.slice(0, 35) + "...";
//     }

//     throttlePlay() {
//         this.setState({
//             hovering: true
//         });
//         setTimeout(this.playVideo, 1000);
//     }

//     render() {
//         if (this.props.video) {
//             return (
//                 <div className="videoSlideContainer"
//                     onMouseEnter={this.throttlePlay}
//                     onMouseLeave={this.stopVideo}
//                     ref={this.videoContainer}>
//                     <Link to={`/videos/${this.props.video.id}`}>
//                         <video
//                             ref={this.videoElement}
//                             loop={true}
//                             muted={true}
//                             poster={this.props.video.thumbnail}
//                             src={this.props.video.video}
//                             className="carouselVideo" />
//                     </Link>
//                     <div onClick={this.toggleMute} className="muteButton">{(this.state.muteStatus) ? <FaVolumeMute /> : <FaVolumeUp />}</div>
//                     <div className="videoDropDown">
//                         <div className="buttonWrapper">
//                             <span>
//                                 <Link to={`/videos/${this.props.video.id}`}><IoPlayCircleSharp /></Link>
//                             </span>
//                             <span>
//                                 {
//                                     this.props.inList ?
//                                         <i onClick={this.deleteListItem} className="fas fa-minus-circle"></i> :
//                                         <i onClick={this.addToList} className="fas fa-plus-circle"></i>
//                                 }
//                             </span>
//                             <h4>{this.props.video.title}</h4>
//                         </div>
//                         <p>{this.shortenDescription(this.props.video.description)}</p>
//                     </div>
//                 </div>
//             );
//         } else {
//             return null;
//         }
//     }
// }

// export default VideoItem;