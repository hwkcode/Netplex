import React from "react";
import profileImg from "../../../app/assets/images/profileImg.png";
import NetplexLogo from '../../../app/assets/images/netplex_logo.png';

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.profile.name,
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleUpdate(e) {
        this.setState({ name: e.target.value });
    }

    handleClick(type) {
        return (e) => {
            e.preventDefault();
            if (type === "save") {
                if (this.props.new) {
                    this.props.createProfile(this.state);
                } else {
                    let newProfile = Object.assign({}, this.props.profile);
                    newProfile.name = this.state.name;
                    this.props.updateProfile(newProfile);
                }
            } else if (type === "delete") {
                this.props.deleteProfile(this.props.profile);
            }
            
            this.props.cancel();
        };
    }

    render() {
        return (
            <div className="manage-profile">
                <img src={NetplexLogo} alt="Netplex logo" className="profile-netplex-logo" />
                <form className="profile-form-container">
                    <div className="form-prompt">{this.props.new ? 'Add Profile' : 'Edit Profile'}</div>
                    <div className="form-prompt-message">{this.props.new ? 'Add a profile for another person watching Netflix.' : ''}</div>
                    <div className="form-input">
                        <img src={profileImg} alt="profile picture" className="profile-pic"/>
                        <input
                            type="text"
                            placeholder="Name"
                            onChange={this.handleUpdate}
                            value={this.state.name}
                            className="profile-name-input"
                            autoFocus
                        />
                    </div>
                    <div className="manage-profile-buttons">
                        <button onClick={this.handleClick('save')} className="red-button">Save</button>
                        <button onClick={this.handleClick('cancel')} className="white-button">Cancel</button>
                        {this.props.new ? null: (
                        <button onClick={this.handleClick('delete')} className="white-button">Delete Profile</button>
                        )}
                    </div>
                </form>
            </div>
        );
    }
}

export default ProfileForm;