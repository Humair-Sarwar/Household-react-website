import React from 'react'
import { FaFire } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section id="footer">
        <div className="cont">
            <div className="footer-inner">

                <div className="footer-contact d-flex flex-column justify-content-center align-items-center">
                    <h2 className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                    <button>
                        <Link to="/contact-us">
                            <i className="fa-solid mx-1"><FaFire /></i>
                            <span>Contact Us</span>
                        </Link>
                    </button>
                    <img src="/images/shape/blue-f.png" className="blue-f d-sm-none d-md-none d-lg-block"/>
                    <img src="/images/shape/orange-f.png" className="orange-f d-sm-none d-md-none d-lg-block"/>
                    <img src="/images/shape/zig-zag-f.png" className="zig-zag-f d-sm-none d-md-none d-lg-block"/>
                    <img src="/images/shape/cross-f.png" className="cross-f d-sm-none d-md-none d-lg-block"/>
                </div>
            </div>
            <div className="footer-main image mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 d-flex flex-column">
                            <div className="footer-row-one">
                                <Link to="/">
                                    <img src="/images/logo/pngwing.com (6).png" />
                                </Link>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae totam nesciunt
                                    aperiam, at quam pariatur modi delectus!
                                </p>
                            </div>
                        </div>



                        <div className="col-lg-3 col-md-6">
                            <div className="footer-row-two">
                                <h4>Support</h4>
                                <ul className="p-0 m-0">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about-us">About Us</Link></li>
                                    <li><Link to="/contact-us">Contact Us</Link></li>
                                    <li><Link to="/">Services</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-row-three">
                                <h4>Contact Info</h4>
                                <ul className="p-0 m-0">
                                    <li>Phone:+923088340373</li>
                                </ul>
                                <div className="footer-social-icons d-flex flex-row mt-3">
                                    <a href="#"><i class="fa-brands"><FaXTwitter /></i></a>
                                    <a href="#"><i class="fa-brands"><FaFacebookF /></i></a>
                                    <a href="#"><i class="fa-brands"><FaInstagram /></i></a>
                                    <a href="#"><i class="fa-brands"><FaLinkedinIn /></i></a>
                                    <a href="#"><i class="fa-brands"><FaPinterestP /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="copy-right">
                                <p className="text-center">Copyright 2024-2025 Muhammad Humair Sarwar - All rights reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Footer
