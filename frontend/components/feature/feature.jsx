import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { IoPlaySharp, IoInformationCircleOutline } from "react-icons/io5";



class Feature extends React.Component {
    // debugger;
    constructor(props) {
        super(props);
        this.state = {
            muted: true
        };
        this.toggleMute = this.toggleMute.bind(this);
    }

    // const[muted, setMuted] = useState(true);

    // debugger
    //     function addOrRemoveFromList(e) {
    //     const requiredArgs = {
    //         video_id: randVideo.id,
    //         user_id: props.userId,
    //     };

    //     if (props.list.includes(randVideo.id)) {
    //         props.removeFromList(requiredArgs);
    //     } else {
    //         props.addToList({
    //             video_id: randVideo.id,
    //             user_id: props.userId,
    //         });
    //     }
    // }

    toggleMute = () => {
        const featureVideo = document.getElementById("featureVideo");
        if (featureVideo.muted) {
            featureVideo.muted = !featureVideo.muted;
            this.setState({muted: false})
        } else {
            featureVideo.muted = !featureVideo.muted;
            this.setState({ muted: true })
        }

        // let muted = this.state.muted;
        // if (muted) {
        //     featureVideo.muted = false;
        //     // this.setState({ muted: false });
        // } else {
        //     featureVideo.muted = true;
        //     // this.setState({ muted: true });
        // }
        // this.setState({ muted: !muted })
    };

    componentDidMount() {
        this.props.fetchAllVideos();
        //     .then(() => this.props.fetchAllGenres());


        // this.props.fetchLists();
        // debugger;
    }

    render() {
        // debugger
        // const randVideo = (this.props.allVideosArray[0]).map(video => video.id);
        // let randVideo = this.props.allVideosArray[0][1];
        // const randVideo = this.props.allVideosArray;
        // debugger;
        // const randVideo = this.props.allVideosArray[Math.floor(Math.random() * (this.props.allVideosArray.length))];
        const randVideo = this.props.allVideosArray[0];
        if (this.props.allVideosArray.length === 0) {
            // console.log(this.props);
            return null;
        }
        // let randNumber = Math.floor(Math.random() * (this.props.allVideosArray.length));
        // let randVideo = this.props.allVideosArray[randNumber];
        // debugger
        return (
            <div className="video-container">
                <div className="video-gradient">
                    <video muted autoPlay loop id="featureVideo">
                        <source src={randVideo.video} />
                    </video>
                </div>
                <div onClick={this.toggleMute} className="mute-volume">{this.state.muted ? <FaVolumeMute className="icon" /> : <FaVolumeUp className="icon" />}</div>
                <div className="videoDetailsContainer">
                    <div className="title">{randVideo.title}</div>
                    <div className="description">{randVideo.description}</div>
                    <div className="buttons">
                        <Link to={`/videos/${randVideo.id}`} className="play-button"><IoPlaySharp className="icon" />&nbsp;&nbsp;Play</Link>
                        {/* <div className="list-button" onClick={addOrRemoveFromList}>
                                <span className="plusOrMinus">{props.list.includes(randVideo.id) ? "-" : "+"}</span>
                                <span className="buttonText">{props.list.includes(randVideo.id) ? " Remove" : " Add To List"}</span>
                            </div> */}
                    </div>
                </div>
                <div className="fade-bottom"></div>
            </div>
        );
    }
}



export default Feature;