import React from "react";
import { Link } from "react-router-dom";

class SignupMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: window.location.href.split("email=")[1],
            password: ''
        }
    }

    render() {
        return(
            <div className="signup-page">
                <div className="signup-message-container">
                    <div className="step-indicator">Step <strong>1</strong> of 2</div>     {/*font 13*/}
                    <div className="step-title">Finish setting up your account</div>     {/*font 32*/}
                    <br />
                    <div className="step-message">Netflix is personalized for you. Create a password to watch on any device at any time.</div> {/*font 18*/}
                    <br />
                    <Link to={`/signup?email=${this.state.email}`} type="submit" className="btn">Continue</Link>
                </div>
            </div>
        )
    }

}

export default SignupMessage;
