import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg shadow fixed-top navbar" aria-label="Main navigation">
        <div className="container">
            <Link className="navbar-brand" to="/">
                <img src="/images/logo/pngwing.com (6).png" />
            </Link>
            <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about-us">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact-us">Contact</Link>
                    </li>
                    <li className="nav-item dropdown dropdown1">
                        <a className="nav-link dropdown-toggle" href="#" data-bs-auto-close="outside"
                            data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                        <ul className="dropdown-menu dropdown-menu1">
                            <li><Link className="dropdown-item" to="/services/electrician">Electrician</Link></li>
                            <li><Link className="dropdown-item" to="/services/mechanical-worker">Mechanical Worker</Link></li>
                            <li><Link className="dropdown-item" to="/services/cleaner">Cleaner</Link></li>
                            <li><Link className="dropdown-item" to="/services/mad-servent">Mad Servant</Link></li>
                            <li><Link className="dropdown-item" to="/services/cook">Cook</Link></li>
                            <li><Link className="dropdown-item" to="/services/construction-worker">Construction Worker</Link></li>
                            <li><Link className="dropdown-item" to="/services/plumber">Plumber</Link></li>
                            <li><Link className="dropdown-item" to="/services/welder">Welder</Link></li>
                            <li><Link className="dropdown-item" to="/services/ac-technicians">Ac technician</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown dropdown1">
                        <Link className="nav-link dropdown-toggle" to="/careers/job-application-form" data-bs-auto-close="outside"
                            data-bs-toggle="dropdown" aria-expanded="false">Careers</Link>
                        <ul className="dropdown-menu dropdown-menu1">
                            <li><Link className="dropdown-item" to="/careers/job-application-form">Job Application Form</Link></li>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex nav-buttons">
                    <Link className="info-btn mx-2" to="/admin/login"><FaRegUserCircle style={{fontSize: '20px', marginBottom:'2px', marginRight: '5px'}}/> Login</Link>
                    <Link className="contact-btn" to="/contact-us">Contact</Link>
                </form>
            </div>
        </div>
    </nav>
  )
}

export default Header
