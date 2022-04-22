import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";

class VideoWatch extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.id);
    }

    render() {
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



