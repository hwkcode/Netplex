import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { IoPlaySharp, IoInformationCircleOutline } from "react-icons/io5";

class Feature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            muted: true
        };
        this.toggleMute = this.toggleMute.bind(this);
    }

    toggleMute = () => {
        const featureVideo = document.getElementById("featureVideo");
        if (featureVideo.muted) {
            featureVideo.muted = !featureVideo.muted;
            this.setState({muted: false})
        } else {
            featureVideo.muted = !featureVideo.muted;
            this.setState({ muted: true })
        }
    };

    componentDidMount() {
        this.props.fetchAllVideos();
    }

    render() {
        const randVideo = this.props.allVideosArray[0];
        if (this.props.allVideosArray.length === 0) {
            return null;
        }

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
                    </div>
                </div>
                <div className="fade-bottom"></div>
            </div>
        );
    }
}

export default Feature;