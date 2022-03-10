import React from 'react';
import { Link } from "react-router-dom";
import NavBar from '../nav/navbar';
import Feature from '../feature/feature';
import VideoRow from '../videos/video_row';

class BrowsePage extends React.Component {
    constructor(props) {
        super(props);
        // this.endSession = this.endSession.bind(this);
    }

    // endSession() {
    //     this.props.logout();
    // }

    render() {
        return (
            <div className="browse">
                <NavBar />
                <Feature />
                <VideoRow />
                <VideoRow />
                <VideoRow />
                <VideoRow />
                <VideoRow />
                <VideoRow />
                <VideoRow />
            </div>
        );
    }


}

export default BrowsePage;