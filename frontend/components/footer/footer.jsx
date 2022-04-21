import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <footer className="footer">
            <div className="contactLinks">
                <a href="https://www.linkedin.com/in/jonathankimmbapmp/" target="_blank" id="link">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin-in" size='3x' className='contact-icons'/>
                </a>
                <a href="https://github.com/hwkcode" target="_blank" id="link">
                    <FontAwesomeIcon icon="fa-brands fa-github-alt" size='3x' className='contact-icons' />
                </a>
                <a href="https://angel.co/u/jonathan-kim-mba-pmp" target="_blank" id="link">
                    <FontAwesomeIcon icon="fa-brands fa-angellist" size='3x' className='contact-icons' />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
