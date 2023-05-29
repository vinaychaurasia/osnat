// import {faMessage} from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import {FaCaretRight, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn} from 'react-icons/fa';

import './Footer.css';

function Footer(){
    return(
        <footer className="footer-area">
            <div className="main">
                <div className="footer">
                    <div className="single-footer">
                        <h4>Osnat Pharmaceuticals</h4>
                        <p>
                            Osnat Pharmaceuticals is a leading PCD PharmaCeutical Company. We Provide healthy, 
                            reliable, high quality and affordable products which is best for patience's compliance
                            and belief.
                        </p>
                        <div className="footer-social">
                            <a href='https://www.facebook.com/Osnat-pharmaceuticals' target='/'><FaFacebookF /></a>
                            <a href='/' ><FaInstagram /></a>
                            <a href='/'><FaTwitter /></a>
                            <a href='/'> <FaLinkedinIn /></a>
                        </div>
                    </div>
                    <div className='single-footer'>
                        <h4>Business</h4>
                        <ul>
                            <li><a href='/'><span><FaCaretRight /></span> Pharma Manufacturing</a></li>
                            <li><a href='/franchise'><span><FaCaretRight /></span> Franchise Business</a></li>
                            <li><a href='/'><span><FaCaretRight /></span>Career</a></li>
                            <li><a href='/'><span><FaCaretRight /></span>News & Update</a></li>
                        </ul>
                    </div>
                    <div className='single-footer'>
                        <h4>Information</h4>
                        <ul>
                            <li><a href='/'><span><FaCaretRight /></span>Company</a></li>
                            <li><a href='/'><span><FaCaretRight /></span>Who we are</a></li>
                            <li><a href='/management'><span><FaCaretRight /></span>Management Team</a></li>
                            <li><a href='/about-us'><span><FaCaretRight /></span>Vision Mission Values</a></li>
                            <li><a href='/about-us'><span><FaCaretRight /></span>Why Us</a></li>
                            <li><a href='/infrastructure'><span><FaCaretRight /></span>Infrastructure</a></li>
                        </ul>
                    </div>
                    <div className='single-footer'>
                        <h4>Contacts</h4>
                        <ul>
                            <li><a href='/'><span><FaCaretRight /></span>Osnat@pharma.com</a></li>
                            <li><a href='/'><span><FaCaretRight /></span>758939389483</a></li>
                            <li><a href='/'><span><FaCaretRight /></span>379/A, Khasra No.108, Khatuni No.488, Village Maloya, Chandigarh-160025, India</a></li>
                        </ul>
                    </div>
                </div>
                <div className='copy'>
                    <p>&copy; 2023 all rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;