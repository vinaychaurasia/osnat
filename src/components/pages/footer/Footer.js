// import {faMessage} from '@fortawesome/free-regular-svg-icons';

import './Footer.css';

function Footer(){
    return(
        <footer className="footer-area">
            <div className="main">
                <div className="footer">
                    <div className="single-footer">
                        <h4>about us</h4>
                        <p>Lorem ipsum Provides high-performance and low-allocating types that serialize 
                            objects to JavaScript Object Notation (JSON) text and deserialize JSON text 
                        </p>
                        <div className="footer-social">
                            <a href='/'><i className='fab fa-facebook-f'></i> </a>
                            <a href='/'><i className='fab fa-twitter-f'></i> </a>
                            <a href='/'><i className='fab fa-instagram-f'></i> </a>
                            <a href='/'><i className='fab fa-linkedin-f'></i> </a>
                        </div>
                    </div>
                    <div className='single-footer'>
                        <h4>Business</h4>
                        <ul>
                            <li><a href='/'><i className='fas fa-chevron-right'></i>Pharma Manufacturing</a></li>
                            <li><a href='/'><i className='fas fa-chevron-right'></i>Franchise Business</a></li>
                            <li><a href='/'><i className='fas fa-chevron-right'></i>Career</a></li>
                            <li><a href='/'><i className='fas fa-chevron-right'></i>News & Update</a></li>
                        </ul>
                    </div>
                    <div className='single-footer'>
                        <h4>Information</h4>
                        <ul>
                            <li><a href='/'><i className='fas fa-chevron-right'></i>Company</a></li>
                            <li><a href='/'><i className='fas fa-chevron-right'></i>Who we are</a></li>
                            <li><a href='/'><i className='fas fa-chevron-right'></i>Management Team</a></li>
                            <li><a href='/'><i className='fas fa-chevron-right'></i>Vision Mission Values</a></li>
                            <li><a href='/'><i className='fas fa-chevron-right'></i>Why Us</a></li>
                            <li><a href='/'><i className='fas fa-chevron-right'></i>Infrastructure</a></li>
                        </ul>
                    </div>
                    <div className='single-footer'>
                        <h4>Contacts</h4>
                        <ul>
                            <li><a href='/'><i className='fas fa-chevron-right'></i>Osnat@pharma.com</a></li>
                            <li><a href='/'><i className='fas fa-chevron-right'></i>758939389483</a></li>
                            <li><a href='/'><i className='fas fa-chevron-right'></i>Plot no 60-490/39In phase 2 </a></li>
                            <li><a href='/'><i className='fas fa-chevron-right'></i>Vision Mission Values</a></li>
                            <li><a href='/'><i className='fas fa-chevron-right'></i>Why Us</a></li>
                            <li><a href='/'><i className='fas fa-chevron-right'></i>Infrastructure</a></li>
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