import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/images/Logo.png';
import USM from '../assets/images/USM.png';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="container-fluid header sticky-top">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom border-dark">
          <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <img src={Logo} alt="" className='w-25 h-25 mr-2' />
            <span className='header thefont'>UNIVERSITY OF <div>SOUTHERN MISSISSIPPI</div></span>
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap" /></svg>
          </a>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="https://github.com/Barsat-Khadka/react-usm" className="nav-link px-2 menu-color-sc" target='_blank'>Click Me for Source Code</a></li>
          </ul>

          <div className="col-md-3 text-end d-flex align-items-center"> 
            <img src={USM} width='100px' height='40px' alt="USM Logo" className='usm-logo-navbar' />
            <i className='menu-color stylish-font'>Honors Application</i>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
