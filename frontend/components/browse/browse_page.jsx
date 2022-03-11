import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import FeatureContainer from '../feature/feature_container';
import VideoIndexesContainer from "../videos/videoindexes_container";

class BrowsePage extends React.Component {
    render() { 
        return (
            <div className='browse'>
                <NavBarContainer />
                <FeatureContainer />
                <VideoIndexesContainer />
            </div>
        );
    }
}

export default BrowsePage;