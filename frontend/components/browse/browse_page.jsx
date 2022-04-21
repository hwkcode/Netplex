import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import FeatureContainer from '../feature/feature_container';
import VideoIndexesContainer from "../videos/videoindexes_container";
import Footer from '../footer/footer';

class BrowsePage extends React.Component {
    render() { 
        return (
            <div className='browse'>
                <NavBarContainer />
                <FeatureContainer />
                <VideoIndexesContainer />
                <Footer />
            </div>
        );
    }
}

export default BrowsePage;