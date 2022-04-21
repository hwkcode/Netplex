import React from "react";
import NavBarContainer from '../nav/navbar_container';
import VideoItemContainer from '../videos/videoitem_container';

class MyList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMyList();
    }

    render() {
        return (
            <div className="my-list-videos">
                <NavBarContainer />
                <div className="list-title">My List</div>
                <ul className="list-videos">
                    {Object.values(this.props.myvideos).map(video => {
                        return (
                            <li key={video.id}>
                                <VideoItemContainer video={video} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default MyList;