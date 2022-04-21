import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";

class VideoWatch extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.fetchVideo(this.props.id);
    }

    render() {
        debugger
        if (!this.props.video) { return null; }
        return (
            <div className="watch">
                <div className="back">
                    <Link to={"/browse"} className="back">
                        <IoIosArrowRoundBack className="back-arrow"/>
                    </Link>
                </div>
                <video
                    src={this.props.video.video}
                    autoPlay
                    controls
                    className="video"
                />
            </div>
        );

    }
}

export default withRouter(VideoWatch);



