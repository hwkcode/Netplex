import React, { useState } from "react";
import NetplexLogo from '../../../app/assets/images/netplex_logo.png';
import ProfileAvatarYellow from '../../../app/assets/images/profile-avatar-yellow.png';
import { IoSearchSharp, IoNotificationsSharp, IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";
// import { FaPen } from "react-icons/fa";
// import { Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolling: false
        };
        this.endSession = this.endSession.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const scrolling = window.scrollY > 100;
            if (scrolling !== this.state.scrolling) {
                this.setState({ scrolling });
            }
        });
    }

    // componentWillUnmount() {
    //     document.removeEventListener('scroll', this.handleScroll);
    // }

    endSession() {
        // debugger
        this.props.logout();
    }

    // const[isScrolled, setIsScrolled] = useState(false);

    // window.onscroll = () => {
    //     setIsScrolled(window.pageYOffset > 100 ? true : false);
    //     return () => (window.onscroll = null);
    // };

    render() {
        return (
            <div className={this.state.scrolling ? "navbar scrolled" : "navbar"}>
                <div className="navbar-container">
                    <div className="navbar-container__left">
                        <img src={NetplexLogo} alt="Netplex logo" className="netplex-logo" />
                        <span>Home</span>
                        <span>TV Shows</span>
                        <span>Movies</span>
                        <span>New & Popular</span>
                        <span>My List</span>
                    </div>
                    <div className="navbar-container__right">
                        <IoSearchSharp className="icons" />
                        <span>Kids</span>
                        <span>DVD</span>
                        <IoNotificationsSharp className="icons" />
                        <div className="profile">
                            <div className="profile-icons">
                                <img src={ProfileAvatarYellow} alt="Profile avatar" className="profile-avatar" />
                                <IoCaretDownSharp className="caret" />
                            </div>
                            <div className="profile-options">
                                <span>Manage Profiles</span>
                                <span onClick={this.endSession}>Sign Out of Netplex</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default NavBar;
