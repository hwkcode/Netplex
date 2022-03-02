import React from "react";
import { Link } from "react-router-dom";
import NetplexLogo from '../../../app/assets/images/netplex_logo.png';

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
                <div className="nav-bar">
                    <img src={NetplexLogo} alt="Netplex logo" className="netplex-logo" />
                    <Link to="/login" className="link">Sign In</Link>
                </div>
                <div className="signup-container">
                    <div className="devicesImage"></div>
                    <div className="status">Step <strong>1</strong> of <strong>2</strong></div>     
                    <div className="title">Finish setting up your account</div>     
                    <br />
                    <div className="message">Netflix is personalized for you. Create a password to watch on any device at any time.</div> {/*font 18*/}
                    <Link to={`/signup?email=${this.state.email}`} type="submit" className="button continue">Continue</Link>
                </div>
            </div>
        )
    }

}

export default SignupMessage;

// <div className="signup-page">
//     <img src={NetplexLogo} alt="Netplex logo" className="netplex-logo" />
//     <Link to="/login" className="button sign-in">Sign In</Link>
//     <div className="signup-container">
//         <div className="signup-message-container">
//             <div className="signup-step-container">
//                 <div className="step-logo-container">
//                     <div className="step-logo"></div>
//                 </div>
//                 <div className="step-indicator">Step <strong>1</strong> of 2</div>     
//                 <div className="step-title">Finish setting up your account</div>     
//                 <br />
//                 <div className="step-message">Netflix is personalized for you. Create a password to watch on any device at any time.</div> {/*font 18*/}
//             </div>
//         </div>
//         <Link to={`/signup?email=${this.state.email}`} type="submit" className="button continue">Continue</Link>
//     </div>
// </div>
