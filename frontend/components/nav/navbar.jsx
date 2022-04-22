import React from "react";
import NetplexLogo from '../../../app/assets/images/netplex_logo.png';
import { IoMdCreate } from "react-icons/io";
import { IoCaretDownSharp } from "react-icons/io5";
import profileImg from "../../../app/assets/images/profileImg.png";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolling: false
        };
        this.endSession = this.endSession.bind(this);
        this.setProfile = this.setProfile.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllProfiles();
        document.addEventListener('scroll', () => {
            const scrolling = window.scrollY > 100;
            if (scrolling !== this.state.scrolling) {
                this.setState({ scrolling });
            }
        });

    }

    endSession() {
        this.props.logout();
    }

    setProfile(profile) {
        return () => {
            this.props.activateProfile(profile)
        };
    }

    render() {
        return (
            <div className={this.state.scrolling ? "navbar scrolled" : "navbar"}>
                <div className="navbar-container">
                    <div className="navbar-container__left">
                        <Link to="/browse"><img src={NetplexLogo} alt="Netplex logo" className="netplex-logo" /></Link>
                        <Link to="/browse" id="link">Home</Link>
                        <a target='_blank' href="https://www.linkedin.com/in/jonathankimmbapmp/" id="link">LinkedIn</a>
                        <a target='_blank' href="https://angel.co/u/jonathan-kim-mba-pmp" id="link">AngelList</a>
                        <a target='_blank' href="https://hwkcode.github.io/" id="link">Portfolio</a>
                        <a target='_blank' href="https://github.com/hwkcode" id="link">Github</a>
                        <Link to="/mylist" id="link">My List</Link>
                    </div>
                    <div className="navbar-container__right">
                        <div className="profile-icons">
                            <div className="current-profile-name">{this.props.currentProfile === undefined ? '' : `Welcome ${this.props.currentProfile.name}!`}</div>
                            <img src={profileImg} alt="Profile avatar" className="profile-avatar" />
                            <IoCaretDownSharp className="caret" />
                            <ul className="profile-options">
                                <div className="shapes">
                                    <div className='triangle' />
                                </div>
                                {Object.values(this.props.profiles).map(profile => {
                                    return (
                                        <Link to="/browse" key={profile.id} onClick={this.setProfile(profile)} className="profile-option">
                                            <img src={profileImg} className="profile-avatar-dropdown" />
                                            {profile.name}
                                        </Link>
                                    );
                                })}
                                <div className="manage-profiles-option">
                                    <IoMdCreate className="manage-profiles-icon" />
                                    <Link to='/profiles' className="manage-profiles-link">Manage Profiles</Link>
                                </div>
                                <span onClick={this.endSession} className="sign-out-link">Sign out of Netplex</span>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default NavBar;
