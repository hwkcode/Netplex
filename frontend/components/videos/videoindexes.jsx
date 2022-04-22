import React from 'react';
import VideoIndexContainer from './videoindex_container';

class VideoIndexes extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllVideos();
        this.props.fetchAllGenres();
    }

    componentWillUnmount() {
        this.props.fetchAllVideos();
        this.props.fetchAllGenres();
    }

    render() {
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