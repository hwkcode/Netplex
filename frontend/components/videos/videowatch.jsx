import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";

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
                    <Link to={"/browse"}>
                        <IoArrowBackSharp />
                        &nbsp; Back to browse
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





        // export default function VideoWatch() {
        //     const newLocal = "https://netplex-seeds.s3.amazonaws.com/despicableme2.mp4";
        //     const trailer = newLocal;

        //     return (
        //         <div className="watch">
        //             <div className="back">
        //                 <Link to={"/browse"}>
        //                     <IoArrowBackSharp />
        //                     &nbsp; Back to browse
        //                 </Link>
        //             </div>
        //             <video
        //                 className="video"
        //                 autoPlay
        //                 progress
        //                 controls
        //                 src={trailer}
        //             />
        //         </div>
        //     );
        // }