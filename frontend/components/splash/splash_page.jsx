import React from "react";
import { Link } from "react-router-dom";
import NetplexLogo from '../../../app/assets/images/netplex_logo.png';
import BackgroundImage from '../../../app/assets/images/netflix_background.jpg';
import PanelAImage from '../../../app/assets/images/panel-a.png';
import PanelBImage from '../../../app/assets/images/panel-b.jpg';
import PanelCGif from '../../../app/assets/images/panel-c.gif';
import PanelDImage from '../../../app/assets/images/panel-d.png';

class SplashPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            activeAccordion: 'inactive'
        };
        this.handleAccordionClick = this.handleAccordionClick.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleAccordionClick(accordionNumber) {
        return e => {
            if (this.state.activeAccordion === accordionNumber) {
                this.setState({ activeAccordion: -1 });
            } else {
                this.setState({ activeAccordion: accordionNumber });
            }
        };
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

    demoLogin() {
        const demo = {
            email: "demouser@gmail.com",
            password: "demopassword"
        }
        this.props.login(demo);
    }

    //  <button type="button" className={`status${this.state.activeAccordion === 1 ? "--active" : ""} accordion__button`} onClick={this.handleAccordionClick(1)}>Who Made This Amazing Site?

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
                        <input type="email"
                            value={this.state.email}
                            placeholder="Email address"
                            onChange={this.update('email')}
                            className="tile-input-email"
                        />
                        <Link to={`/signup1?email=${this.state.email}`} className="button btn-xl">Get Started ></Link>
                    </div>
                    {this.renderErrors()}
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
                <div className="faq">
                    <div className="faq-title">Frequently Asked Questions</div>
                    <button className="accordion" onClick={this.handleAccordionClick}>How much does Netflix cost?</button>
                    <div className="faq-answer">
                        <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts.</p>
                    </div>
                    <button className="accordion">What is Netflix?</button>
                    <div className="faq-answer">
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                        <br />
                        <p>You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                    </div>
                    <button className="accordion">Where can I watch?</button>
                    <div className="faq-answer">
                        <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                        <br />
                        <p>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                    </div>
                    <button className="accordion">How do I cancel?</button>
                    <div className="faq-answer">
                        <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.</p>
                    </div>
                    <button className="accordion">What can I watch on Netflix?</button>
                    <div className="faq-answer">
                        <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                    </div>
                    <button className="accordion">Is Netflix good for kids?</button>
                    <div className="faq-answer">
                        <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</p>
                        <br />
                        <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SplashPage;
