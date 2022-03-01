import React from 'react';
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: window.location.href.split("email=")[1],
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
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
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-form-page">
                <div className="signup-form-container">
                    <div className="signup-form-message-container">
                        <div className="signup-form-step-container"> 
                            <form onSubmit={this.handleSubmit} className="signup-form">
                                <div className="step-form-indicator">Step <strong>2</strong> of 2</div>                                         
                                <div className="step-form-title">Create a password to start your membership</div>                     
                                <div className="step-form-message">Just a few more steps and you're done!</div>    
                                <div className="step-form-message"> We hate paperwork, too.</div>       
                                <input type="email"
                                    value={this.state.email}
                                    placeholder="Email address"
                                    onChange={this.update('email')}
                                    className="input-signup-form"
                                />
                                <input type="password"
                                    value={this.state.password}
                                    placeholder="Add a password"
                                    onChange={this.update('password')}
                                    className="input-signup-form"
                                />
                                {this.renderErrors()}
                                <Link to='/browse' type="submit" className="btn submit">Submit</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupForm;
