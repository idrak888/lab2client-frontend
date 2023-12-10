import React from 'react'
import { useState } from 'react';
import styles from '/styles/Home.module.css';

export default function GetStarted() {
    let [view, setView] = useState(0);

    return (
        <section className={`py-5 ${styles.getStarted}`}>
            <div className={styles.inner}>
                <h3>How to use our platform</h3>
                {/* Navigation to switch between Researchers and Facilities views */}
                <nav className="nav nav-pills nav-fill" style={{ backgroundColor: "white", cursor: "pointer", marginTop: 30}}>
                    <div className={`${styles.navlink} nav-link ${view == 0 ? `${styles.active}` : ""}`} onClick={() => setView(0)}>Researchers</div>
                    <div className={`${styles.navlink} nav-link ${view == 1 ? `${styles.active}` : ""}`} onClick={() => setView(1)}>Facilities</div>
                </nav>
            </div>

            <div className={styles.content}>
                {
                    view == 0 ?
                    // Instructions for Researchers
                    <div>
                        <h2 style={{fontSize: 40, fontWeight: "bold", marginBottom: 40}}>For Researchers</h2>
                        <span className={styles.number}>1</span> Browse available listings and facilities based on your needs
                        <div className={styles.line}></div>
                        <span className={styles.number}>2</span> Place a personalised order (make sure you are signed in)
                        <div className={styles.line}></div>
                        <span className={styles.number}>3</span> Receive status updates in your dashboard
                        <div className={styles.line}></div>
                        <span className={styles.number}>4</span> Communicate through email
                        <div className={styles.line}></div>
                        <span className={styles.number}>5</span> Settle payments
                    </div>
                    :
                    // Instructions for Facilities (Institutions)
                    <div>
                        <h2 style={{fontSize: 40, fontWeight: "bold", marginBottom: 40}}>For Institutions</h2>
                        <span className={styles.number}>1</span> Create an account
                        <div className={styles.line}></div>
                        <span className={styles.number}>2</span> Use the dashboard to list your labs and equipment
                        <div className={styles.line}></div>
                        <span className={styles.number}>3</span> Set up payment
                        <div className={styles.line}></div>
                        <span className={styles.number}>4</span> Wait for orders and view them in your dashboard
                        <div className={styles.line}></div>
                        <span className={styles.number}>5</span> Communicate through email
                        <div className={styles.line}></div>
                        <span className={styles.number}>6</span> Generate invoices and receive payments
                    </div>
                }
            </div>
        </section>
    )
}
