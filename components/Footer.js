import React from 'react'

export default function Footer() {
    return (
        <div className='FooterWrapper'>
            <footer className="footer text-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 footer-content">
                            <h5>About Lab2Client</h5>
                            <p>Lab2Client is an innovative web platform that connects the broader research and innovation
                                community with under-utilized experimental research facilities and expertise.</p>
                        </div>
                        <div className="col-lg-3 footer-links">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 footer-social">
                            <h5>Follow Us</h5>
                            <a href="#" target="_blank"><i className="bi bi-facebook"></i></a>
                            <a href="#" target="_blank"><i className="bi bi-twitter"></i></a>
                            <a href="#" target="_blank"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="row" style={{backgroundColor: "#0B131C", padding: 20, color: "rgba(255, 255, 255, 0.7)"}}>
                <div className="col-lg-12 text-center mt-4">
                    <p>&copy; 2023 Lab2Client. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
