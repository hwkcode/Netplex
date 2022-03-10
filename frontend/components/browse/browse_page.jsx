import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import FeatureContainer from '../feature/feature_container';
import SwiperRow from '../videos/swiper';

class BrowsePage extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount() {
    // this.props.fetchAllVideos()
    //     .then(() => this.props.fetchAllGenres());


    // this.props.fetchLists();
    // debugger
    // }



    render() {

        // if (!this.props.videos) {
        //     return null;
        // } else {
        // const randVideo = this.props.allVideosArray[Math.floor(Math.random() * (this.props.allVideosArray.length - 1))];

        // debugger

        return (
            <div>
                <NavBarContainer />
                <FeatureContainer
                // allVideosArray={this.props.allVideosArray}
                // list={this.props.list}
                // addToList={this.props.addToList}
                // removeFromList={this.props.removeFromList}
                // userId={this.props.userId}
                />
                {/* <div className="swiper-row">
                    {this.props.allGenresArray.map((genre, index) => <SwiperRow genre={genre} key={index} allVideoObjects={this.props.allVideosArray} />)}
                </div> */}
                {/* <Footer /> */}
            </div>
        );
        // }
    }
}

export default BrowsePage;