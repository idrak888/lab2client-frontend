import React, {useState, useEffect} from 'react';

export default function Footer() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 756);
        };

        // Initial check on mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='FooterWrapper'>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 footer-content">
                            <img src='/lab2client-white.svg' width={200} />     
                            <p>&copy; {(new Date().getFullYear())} Lab2Client. All rights reserved.</p>
                        </div>
                        <div className="col-lg-8 col-md-8 col-xs-12 footer-links">
                            <div className="row">
                                <div className={`col-lg-12 d-flex justify ${isSmallScreen ? 'flex-column align-items-start' : 'custom-spacing justify-content-space-around'}`}>
                                    <a href="/" className="mb-lg-0 mb-2">Find Labs</a>
                                    <a href="/" className="mb-lg-0 mb-2">About</a>
                                    <a href="/" className="mb-lg-0 mb-2">Contact</a>
                                    <a href="/" className="mb-lg-0 mb-2">Register your Lab</a>
                                </div>
                                <div className="col-lg-12 d-flex justify">
                                    <div className="icons">
                                        <i className="bi bi-facebook"></i>
                                        <i className="bi bi-twitter"></i>
                                        <i className="bi bi-instagram"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
