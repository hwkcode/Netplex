import React from "react";
import { Link } from 'react-router-dom';
import { IoAddCircleOutline, IoCheckmarkCircleOutline, IoPlayCircleSharp, IoThumbsUpOutline, IoThumbsUpSharp, IoThumbsDownOutline, IoThumbsDownSharp } from "react-icons/io5";

class VideoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            click: false,
            inList: Object.keys(props.myVideos).includes(String(props.video.id))
        };
        this._handleMouseEnter = this._handleMouseEnter.bind(this);
        this._handleMouseLeave = this._handleMouseLeave.bind(this);
        this._handleClick = this._handleClick.bind(this);
        this._addToList = this._addToList.bind(this);
        this._removeFromList = this._removeFromList.bind(this);
        this.toggleClick = this.toggleClick.bind(this);
    }

    _handleMouseEnter() {
        this.setState({ hover: true });
    }
    _handleMouseLeave() {
        this.setState({ hover: false });
    }

    _handleClick(e) {
        e.preventDefault();
        debugger;
        this.props.history.push(`/videos/${this.props.video.id}`);
    }

    _addToList() {
        this.setState({ inList: true });
        this.props.addToList(this.props.video);
    }

    _removeFromList() {
        this.setState({ inList: false });
        this.props.removeFromList(this.props.video);
    }

    toggleClick() {
        this.setState({ click: !this.state.click });
    }

    render() {
        if (!this.props.video) { return null; }

        const myListButton = this.state.inList ? (
            <IoCheckmarkCircleOutline
                className='list-button'
                onClick={this._removeFromList}
            />
        ) : (
            <IoAddCircleOutline
                className='list-button'
                onClick={this._addToList}
            />
        );

        const like = this.state.click ? <IoThumbsUpOutline className="thumbs" onClick={this.toggleClick} /> : <IoThumbsUpSharp className="thumbs" onClick={this.toggleClick}/>;
        const dislike = this.state.click ? <IoThumbsDownSharp className="thumbs" onClick={this.toggleClick} /> : <IoThumbsDownOutline className="thumbs" onClick={this.toggleClick}/>;

        return (
            <div className='show-container' onMouseEnter={this._handleMouseEnter} onMouseLeave={this._handleMouseLeave}>
                {this.state.hover ? (
                    <>
                        <video
                            src={this.props.video.video}
                            autoPlay
                            muted
                            onEnded={this.handleMouseLeave}
                            onClick={this._handleClick}
                        />
                        <div className="video-info">
                            <div className='modal-buttons'>
                                <div className="play-buttons">
                                    <Link to={`/videos/${this.props.video.id}`}>
                                        <IoPlayCircleSharp
                                            className='play-button'
                                        />
                                    </Link>
                                    {myListButton}
                                    {like}
                                    {dislike}
                                </div>
                            </div>
                            <p className='video-description'>
                                {this.props.video.description.slice(0, 150) + '...'}
                            </p>
                        </div>
                    </>
                ) : (
                    <img
                        src={this.props.video.thumbnail}
                    />
                )}
            </div>
        );
    }

}

export default VideoItem;