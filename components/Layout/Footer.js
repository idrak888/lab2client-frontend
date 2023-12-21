import React from 'react';

export default function Footer() {
    return (
        <div className='FooterWrapper'>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 footer-content">
                            <h1>Lab2Client</h1>
                            <p>&copy; 2023 Lab2Client. All rights reserved.</p>
                        </div>
                        <div className="col-lg-6 footer-links">
                            <div className="d-flex justify-content-end">
                                <a href="/">Find Labs</a>
                                <a href="/">About</a>
                                <a href="/">Contact</a>
                                <a href="/">Offer your Lab</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
