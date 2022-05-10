import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar = () => {

    handleClick = (e) => {
        e.preventDefault();
      };

  return (
    <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand overflow-hidden pr-3 header_logo" to="/">
            <img src="assets/images/logo11.png" alt="" />
            <br/>
            
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <div className="hamburger hamburger--emphatic">
                <div className="hamburger-box"><div className="hamburger-inner"></div></div>
            </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav fs-0 fw-700">
                <li>
                    <a href='https://teksolcorporation.com/'>Home</a>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link onClick={handleClick}>Products and Services</Link>
                    <ul className="dropdown fs--1">
                        <li><Link to="/microscope-and-microscopic-products">Microscopes and Microscopic Products</Link></li>
                        <li><Link to="/rotary-microtome">Rotary Microtome, Cryostat, Tissue Processors and other Histopathological Lab Instruments</Link></li>
                        <li><Link to="/solution-for-plant-study">Solutions for Plant Study and Agronomy Related Studies </Link></li>
                        <li><Link to="/general-lab-instruments">General Lab Instruments </Link></li>
                        <li><Link to="/products-for-microbiological-tissue-culture-laboratories">Products for Microbiological/Tissue Culture Laboratories </Link></li>
                        <li><Link to="/products-and-solutions-for-freezer-dryer">Products and Solutions for Freezer Dryer/Lyophilizer & Vacuum Concentrators </Link></li>
                        <li><Link to="/solutions-for-various-testing-and-measuring-instruments">Solutions for Various Testing and Measuring Instruments </Link></li>
                        <li><Link to="/solutions-for-chemical-lab-chemical-analysis">Solution for any Chemical Lab, Chemical Analysis and General Lab Instruments</Link></li>
                        <li><Link to="/service">Service</Link></li>
                    </ul>
                </li>
                <li><Link className="d-block mr-md-9" to="/contact">Contact</Link></li>
            </ul>
            <ul className="navbar-nav ml-lg-auto">
                <li><Link className="btn btn-outline-primary btn-capsule btn-sm border-2x fw-700" to="/view-all-products">Download Brochures</Link></li>
            </ul>
        </div>
    </nav>
  )
}
