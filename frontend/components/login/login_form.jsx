import React from 'react';
import { Link } from 'react-router-dom';
import NetplexLogo from '../../../app/assets/images/netplex_logo.png';
import BackgroundImage from '../../../app/assets/images/netflix_background.jpg';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
            <div className="login-form-page">
                <Link to="/"><img src={NetplexLogo} alt="Netplex logo" className="netplex-logo" /></Link>
                <img src={BackgroundImage} alt="Netflix movie tiles" className="background-image" />
                <div className="login-form-container"> 
                    <form onSubmit={this.handleSubmit} className="login-form">
                        <div className="login-form-title">Sign In</div>
                        <div className="login-inputs">                                       
                            <input type="email"
                                value={this.state.email}
                                placeholder=" "
                                onChange={this.update('email')}
                                className="login-input"
                            />
                            <label>Email address</label>
                        </div>
                        <div className="login-inputs">  
                            <input type="password"
                                value={this.state.password}
                                placeholder=" "
                                onChange={this.update('password')}
                                className="login-input"
                            />
                            <label>Password</label>
                        </div>
                        {this.renderErrors()}
                        <button type="submit" className="button submit">Sign In</button>
                        <div className="login-question">New to Netplex? 
                            <Link to="/"> Sign up now</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;
