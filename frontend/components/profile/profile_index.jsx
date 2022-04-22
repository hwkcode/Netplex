import React from "react";
import ProfileFormContainer from "./profile_form_container";
import profileImg from "../../../app/assets/images/profileImg.png";
import editProfileImg from "../../../app/assets/images/editProfileImg.JPG";
import NetplexLogo from '../../../app/assets/images/netplex_logo.png';

class ProfileIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            manage: false,
            profile: null,
            new: false,
            form: false
        };
        this.toggleManage = this.toggleManage.bind(this);
        this.profileVideos = this.profileVideos.bind(this);
        this.addNewProfile = this.addNewProfile.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllProfiles();
    }

    toggleManage() {
        this.setState({ manage: !this.state.manage });
    }

    addNewProfile() {
        this.setState({
            form: true,
            profile: { name: '' },
            new: true
        });
    }

    profileVideos(profile) {
        if (!this.state.manage) {
            return () => {
                this.props.activateProfile(profile);
                this.props.history.push('/browse');
            };
        } else {
            return () => {
                this.setState({
                    form: true,
                    profile
                });
            };
        }
    }

    cancel() {
        this.setState({ 
            form: false, 
            profile: null, 
            new: false 
        });
    }

    render() {
        const prompt = this.state.manage ? "Manage Profiles:" : "Who's watching?";
        const buttonInfo = this.state.manage ? "Done" : "Manage Profiles";

        const addProfile = Object.values(this.props.profiles).length < 5 ? (
            <li onClick={this.addNewProfile} className="add-profile-container">
                <div className="add-profile-icon"></div>
                <div className="add-profile-text">Add Profile</div>
            </li>
        ) : null;

        if (!this.state.form) {
            return (
                <div className="manage-profiles">
                    <img src={NetplexLogo} alt="Netplex logo" className="profile-netplex-logo" />
                    <div className="profiles-container">
                        <div className="prompt-title">
                            {prompt}
                        </div>
                        <ul className="profiles">
                            {Object.values(this.props.profiles).map(profile => (
                                <li onClick={this.profileVideos(profile)} key={profile.id} className="profile-item">
                                    <img src={this.state.manage ? editProfileImg : profileImg} className="profile-item-pic"/>
                                    <div className="profile-name">{profile.name}</div>
                                </li>
                            ))}
                            {addProfile}
                        </ul>
                        <button onClick={this.toggleManage} className={this.state.manage ? 'red-button' : 'white-button'}>
                            {buttonInfo}
                        </button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="profile-form-input">
                    <ProfileFormContainer
                        profile={this.state.profile}
                        new={this.state.new}
                        cancel={this.cancel}
                    />
                </div>
            );
        }
    }
}

export default ProfileIndex;