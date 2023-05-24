import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ProcductsDropDown from '../../DropDowns/ProcductsDropDown';
import CompanyDropDown from '../../DropDowns/CompanyDropDown';
import logo from '../../../images/logo.jpg';

import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [procductsDropDown, setProcductsDropDown] = useState(false);
  const [companyDropDown, setCompanyDropDown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onProductMouseEnter = () => {
    if (window.innerWidth < 960) {
      setProcductsDropDown(false);
    } else {
      setProcductsDropDown(true);
    }
  };

  const onProductMouseLeave = () => {
    if (window.innerWidth < 960) {
      setProcductsDropDown(false);
    } else {
      setProcductsDropDown(false);
    }
  };

  const onCompanyMouseEnter = () => {
    if (window.innerWidth < 960) {
      setCompanyDropDown(false);
    } else {
      setCompanyDropDown(true);
    }
  };

  const onCompanyMouseLeave = () => {
    if (window.innerWidth < 960) {
      setCompanyDropDown(false);
    } else {
      setCompanyDropDown(false);
    }
  };

  return (
    <header>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={logo} alt='LOGO'></img>
          <i class='fab fa-firstdraft' />
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li
            className='nav-item'
            onMouseEnter={onCompanyMouseEnter}
            onMouseLeave={onCompanyMouseLeave}
          >
            <Link
              to='/company'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Company <i className='fas fa-caret-down' />
            </Link>
            {companyDropDown && <CompanyDropDown />}
          </li>

          <li
            className='nav-item'
            onMouseEnter={onProductMouseEnter}
            onMouseLeave={onProductMouseLeave}
          >
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products <i className="fa fa-caret-down" aria-hidden="true"></i>
            </Link>
            {procductsDropDown && <ProcductsDropDown />}
          </li>

          <li className='nav-item'>
            <Link
              to='/franchise'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Franchise Business
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
