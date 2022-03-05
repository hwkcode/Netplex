import React from "react";
import { Link } from "react-router-dom";
import NetplexLogo from '../../../app/assets/images/netplex_logo.png';
import BackgroundImage from '../../../app/assets/images/netflix_background.jpg';
import PanelAImage from '../../../app/assets/images/panel-a.png';
import PanelBImage from '../../../app/assets/images/panel-b.jpg';
import PanelCGif from '../../../app/assets/images/panel-c.gif';
import PanelDImage from '../../../app/assets/images/panel-d.png';
import { IoAddOutline, IoCloseOutline } from "react-icons/io5";

class SplashPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            activeAccordion: -1
        };
        this.handleAccordionClick = this.handleAccordionClick.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    handleAccordionClick(questionNumber) {
        return e => {
            if (this.state.activeAccordion === questionNumber) {
                this.setState({ activeAccordion: -1 });
            } else {
                this.setState({ activeAccordion: questionNumber });
            }
        };
    }

    validate() {
        let emailError = '';
        if (!this.state.email) {
            emailError = "Email is required!";
        };

        if (emailError) {
            this.setState({ emailError });
            return false;
        }

        return true;
    }

    handleSubmit(e) {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.props.history.push(`/signup1?email=${this.state.email}`);
        }
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

    demoLogin() {
        const demo = {
            email: "demouser@gmail.com",
            password: "demopassword"
        };
        this.props.login(demo);
    }

    render() {
        return (
            <div className="splash-page">
                <img src={NetplexLogo} alt="Netplex logo" className="netplex-logo" />
                <Link to="/login" className="button sign-in">Sign In</Link>
                <button className="button demo" onClick={this.demoLogin}>Demo</button>
                <img src={BackgroundImage} alt="Netflix movie tiles" className="tile__background-image" />

                <div className="tile__text">
                    <div className="tile-title">Unlimited movies, TV shows, and more.</div>
                    <div className="tile-subtitle">Watch anywhere. Cancel anytime.</div>
                    <div className="tile-prompt">Ready to watch? Enter your email to create or restart your membership.</div>
                    <div className="tile-form">
                        <form onSubmit={this.handleSubmit} className="tile-input">
                            <div className="input-field">
                                <input type="email"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    placeholder=" "
                                    className="input-email"
                                />
                                <label>Email address</label>
                            </div>
                            <div className="email-error">{this.state.emailError}</div>
                            <button type="submit" className="button btn-xl">Get Started ></button>
                        </form>
                    </div>
                </div>

                <div className="panel">
                    <div className="panel__text">
                        <div className="panel-title">Enjoy on your TV.</div>
                        <div className="panel-subtitle">Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</div>
                    </div>
                    <div className="panel__image">
                        <img src={PanelAImage} alt="TV" className="PanelAImage" />
                    </div>
                </div>
                <div className="panel">
                    <div className="panel__image">
                        <img src={PanelBImage} alt="TV" className="PanelBImage" />
                    </div>
                    <div className="panel__text">
                        <div className="panel-title">Download your shows to watch offline.</div>
                        <div className="panel-subtitle">Save your favorites easily and always have something to watch.</div>
                    </div>
                </div>
                <div className="panel">
                    <div className="panel__text">
                        <div className="panel-title">Watch everywhere.</div>
                        <div className="panel-subtitle">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</div>
                    </div>
                    <div className="panel__image">
                        <img src={PanelCGif} alt="TV" className="PanelCImage" />
                    </div>
                </div>
                <div className="panel">
                    <div className="panel__image">
                        <img src={PanelDImage} alt="TV" className="PanelDImage" />
                    </div>
                    <div className="panel__text">
                        <div className="panel-title">Create profiles for kids.</div>
                        <div className="panel-subtitle">Send kids on adventures with their favorite characters in a space made just for them&#8212;free with your membership.</div>
                    </div>
                </div>
                <div className="faqs">
                    <div className="faq-title">Frequently Asked Questions</div>
                    <div className="accordion">
                        <div className="faq">
                            <div className="faq-question" onClick={this.handleAccordionClick(1)}>What is Netflix?
                                <span>{this.state.activeAccordion === 1 ? <IoCloseOutline /> : <IoAddOutline />}</span>
                            </div>
                            <div className={this.state.activeAccordion === 1 ? "faq-answer show" : "faq-answer"}>
                                <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                                <br />
                                <p>You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                            </div>
                        </div>
                        <div className="faq">
                            <div className="faq-question" onClick={this.handleAccordionClick(2)}>How much does Netflix cost?
                                <span>{this.state.activeAccordion === 2 ? <IoCloseOutline /> : <IoAddOutline />}</span>
                            </div>
                            <div className={this.state.activeAccordion === 2 ? "faq-answer show" : "faq-answer"}>
                                <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts.</p>
                            </div>
                        </div>
                        <div className="faq">
                            <div className="faq-question" onClick={this.handleAccordionClick(3)}>Where can I watch?
                                <span>{this.state.activeAccordion === 3 ? <IoCloseOutline /> : <IoAddOutline />}</span>
                            </div>
                            <div className={this.state.activeAccordion === 3 ? "faq-answer show" : "faq-answer"}>
                                <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                                <br />
                                <p>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                            </div>
                        </div>
                        <div className="faq">
                            <div className="faq-question" onClick={this.handleAccordionClick(4)}>How do I cancel?
                                <span>{this.state.activeAccordion === 4 ? <IoCloseOutline /> : <IoAddOutline />}</span>
                            </div>
                            <div className={this.state.activeAccordion === 4 ? "faq-answer show" : "faq-answer"}>
                                <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.</p>
                            </div>
                        </div>
                        <div className="faq">
                            <div className="faq-question" onClick={this.handleAccordionClick(5)}>What can I watch on Netflix?
                                <span>{this.state.activeAccordion === 5 ? <IoCloseOutline /> : <IoAddOutline />}</span>
                            </div>
                            <div className={this.state.activeAccordion === 5 ? "faq-answer show" : "faq-answer"}>
                                <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                            </div>
                        </div>
                        <div className="faq">
                            <div className="faq-question" onClick={this.handleAccordionClick(6)}>Is Netflix good for kids?
                                <span>{this.state.activeAccordion === 6 ? <IoCloseOutline /> : <IoAddOutline />}</span>
                            </div>
                            <div className={this.state.activeAccordion === 6 ? "faq-answer show" : "faq-answer"}>
                                <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</p>
                                <br />
                                <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SplashPage;
