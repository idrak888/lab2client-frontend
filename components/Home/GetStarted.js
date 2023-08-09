import React from 'react'
import { useState } from 'react';
import styles from '/styles/Home.module.css';

export default function GetStarted() {
    let [view, setView] = useState(0);

    return (
        <div className={`bg-light py-5 ${styles.getStarted}`}>
            <div className={styles.inner}>
                <h3>How to use our platform</h3>
                <nav className="nav nav-pills nav-fill" style={{ backgroundColor: "white", cursor: "pointer", marginTop: 30}}>
                    <div className={`${styles.navlink} nav-link ${view == 0 ? `${styles.active}` : ""}`} onClick={() => setView(0)}>Researchers</div>
                    <div className={`${styles.navlink} nav-link ${view == 1 ? `${styles.active}` : ""}`} onClick={() => setView(1)}>Facilities</div>
                </nav>
            </div>
        </div>
    )
}
