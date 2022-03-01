import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
            <div className="login-form-page">
                <div className="login-background">
                    <div className="login-background__gradient">
                        <div className="login-form-container">
                            <div className="login-form-input-container"> 
                                <div className="login-form-main-container"> 
                                    <form onSubmit={this.handleSubmit} className="login-form">
                                        <div className="login-form-title">Sign In</div>                                         
                                        <input type="email"
                                            value={this.state.email}
                                            placeholder="Email address"
                                            onChange={this.update('email')}
                                            className="input-login-form"
                                        />
                                        <br />
                                        <input type="password"
                                            value={this.state.password}
                                            placeholder="Password"
                                            onChange={this.update('password')}
                                            className="input-login-form"
                                        />
                                        <br />
                                        <button type="submit" className="btn">Sign In</button>
                                    <div>New to Netplex? 
                                        <Link to="/signup"> Sign up now</Link>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;
