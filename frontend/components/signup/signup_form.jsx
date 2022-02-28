import React from 'react';

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
            <div className="signup-page">
                <div className="signup-container">
                    <div className="step-indicator">Step <strong>2</strong> of 2</div>                                         
                    <div className="step-message">Create a password to start your membership</div>   
                    <br />                        
                    <div className="step-message">Just a few more steps and you're done! We hate paperwork, too.</div>       
                    <form onSubmit={this.handleSubmit} className="signup-form">
                        <input type="email"
                            value={this.state.email}
                            placeholder="Email address"
                            onChange={this.update('email')}
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.update('password')}
                        />
                        {this.renderErrors()}
                        <br />
                        <button type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignupForm;
