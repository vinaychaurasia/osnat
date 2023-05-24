// import {faMessage} from '@fortawesome/free-regular-svg-icons';

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
                            <a href='/'><i class="fa-brands fa-facebook"></i></a>
                            <a href='/'><i class="fa-brands fa-twitter"></i></a>
                            <a href='/'><i class="fa-brands fa-instagram"></i></a>
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
                            <li><a href='/'><i className='fas fa-chevron-right'></i>379/A, Khasra No.108, Khatuni No.488, Village Maloya, Chandigarh-160025, India</a></li>
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