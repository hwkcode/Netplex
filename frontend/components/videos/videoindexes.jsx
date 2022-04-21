import React from 'react';
import VideoIndexContainer from './videoindex_container';

class VideoIndexes extends React.Component {
    constructor(props) {
        // debugger
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.fetchAllVideos();
        this.props.fetchAllGenres();
    }

    componentWillUnmount() {
        this.props.fetchAllVideos();
        this.props.fetchAllGenres();
    }

    render() {
        // debugger
        return (
            <div className='video-indexes-container'>
                {Object.values(this.props.genres).map(genre => {
                    return (
                        <ul key={genre.id}>
                            <VideoIndexContainer
                                genre={genre}
                            />
                        </ul>
                    );
                })};
            </div>
        );
    }
}

export default VideoIndexes;





















// render() {
//     return (
//         <div className='video-indexes-container'>
//             test
//             <ul className='video-indexes'>
//                 {Object.values(this.props.genres).map(genre => {
//                     debugger;
//                     return (
//                         <li key={genre.id}>
//                             <VideoIndexContainer
//                                 genre={genre}
//                             // toggleSpotlightPlaying={this.toggleSpotlightPlaying} 
//                             />
//                         </li>
//                     );
//                 })};
//             </ul>
//         </div>
//     );
// }