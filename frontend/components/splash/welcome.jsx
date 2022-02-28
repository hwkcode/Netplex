import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
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

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        return (
            <div className="welcome">
                <div className="section-title">Unlimited movies, TV shows, and more.</div>
                <br />
                <div className="section-subtitle">Watch anywhere. Cancel anytime.</div>
                <br />
                <div className="section-form-title">Ready to watch? Enter your email to create or restart your membership.</div>
                <input type="email"
                    value={this.state.email}
                    placeholder="Email address"
                    onChange={this.update('email')}
                // className="input"
                />
                {/* {this.renderErrors()} */}
                <Link to={`/signup1?email=${this.state.email}`} className="btn btn-xl">Get Started <i className="fas fa-chevron-right btn-icon"></i></Link>
            </div>
        );
    }
};

export default Welcome;

// "title": "Enjoy on your TV.",
// "subTitle": "Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
// "image": "/images/misc/home-tv.jpg",
// "alt": "Tiger King on Netflix",
// "direction": "row";



