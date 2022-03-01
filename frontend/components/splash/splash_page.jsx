import React from "react";
import { Link } from "react-router-dom";
import StoryCardBPng from '../../../app/assets/images/story-card-b.png';

class SplashPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        return (
            <div className="splash-page">
                <div className="netplex-logo"></div>
                <div className="story-cards">
                    <div className="story-card-a">
                        <div className="story-card-a__background">
                            <div className="card-image__gradient"></div>
                        </div>
                        <div className="story-card-a__text">
                            <div className="card-title">Unlimited movies, TV shows, and more.</div>
                            <div className="card-subtitle">Watch anywhere. Cancel anytime.</div>
                            <div className="card-form-title">Ready to watch? Enter your email to create or restart your membership.</div>
                            <div className="card-form">
                                <input type="email"
                                    value={this.state.email}
                                    placeholder="Email address"
                                    onChange={this.update('email')}
                                    className="card-input-email"
                                />
                                {/* {this.renderErrors()} */}
                                <Link to={`/signup1?email=${this.state.email}`} className="btn btn-xl">Get Started <i className="fas fa-chevron-right btn-icon"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="story-card-b">
                        <div className="story-card-b-container">
                            <div className="story-card-b__text">
                                <div className="card-title">Enjoy on your TV.</div>
                                <div className="card-subtitle">Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</div>
                            </div>
                            <div className="story-card-b__image">
                                <img src={StoryCardBPng} alt="TV" className="tv" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }



}

export default SplashPage;