import React from 'react'
import { useState } from 'react';
import styles from '/styles/Home.module.css';

// Component to display partner logos
export default function Partners() {
    // Array of partner logo URLs
    const partnerLogos = [
        '/collision.png',
        '/yorku.png',
        '/lassonde.png',
        '/tmu.png',
        '/ibz.png',
        '/venture.png',
        '/best.png'
    ];

    return (
        <section className={styles.partners}>
            <div className={styles.lower}>
                TRUSTED BY
                <div className={styles.partnerLogos}>
                    {partnerLogos.map((logo, index) => (
                        <img className={styles.img} key={index} src={logo} alt={`Partner Logo ${index + 1}`} />
                    ))}
                </div>
            </div>
        </section>
    )
}
