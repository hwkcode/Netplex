import React from 'react';
import { Link } from "react-router-dom";
import NetplexLogo from '../../../app/assets/images/netplex_logo.png';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: window.location.href.split("email=")[1],
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className="signup-errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-form-page"> 
                <div className="nav-bar">
                    <Link to="/"><img src={NetplexLogo} alt="Netplex logo" className="netplex-logo" /></Link>
                    <Link to="/login" className="link">Sign In</Link>
                </div>
                <form onSubmit={this.handleSubmit} className="signup-form">
                    <div className="status">Step <strong>2</strong> of <strong>2</strong></div>                                         
                    <div className="title">Create a password to start your membership</div>                     
                    <div className="message">You're almost done!</div>    
                    <div className="message">We hate paperwork, too.</div>  
                    <div className="signup-inputs">     
                        <input type="email"
                            value={this.state.email}
                            placeholder=" "
                            onChange={this.update('email')}
                            className="signup-input"
                        />
                        <label>Email address</label>
                    </div>
                    <div className="signup-inputs">  
                        <input type="password"
                            value={this.state.password}
                            placeholder=" "
                            onChange={this.update('password')}
                            className="signup-input"
                        />
                        <label>Add a password</label>
                    </div>
                    {this.renderErrors()}
                    <button type="submit" className="button submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default SignupForm;
