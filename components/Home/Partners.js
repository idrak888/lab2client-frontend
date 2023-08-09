import React from 'react'
import { useState } from 'react';
import styles from '/styles/Home.module.css';

export default function Partners() {
    const partnerLogos = [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Logo_York_University.svg/2560px-Logo_York_University.svg.png',
        'https://www.torontomu.ca/content/dam/brand/global/images/visual-guide/tmu-logo-full-colour.jpg',
        'https://www.torontomu.ca/content/dam/innovation-boost-zone/Logo/RU-IBZ-rgb.png',
        'https://www.womenofinfluence.ca/wp-content/uploads/2021/01/ventureLAB_Logo_Main.png',
        'https://prepr.org/wp-content/uploads/2020/04/BEST.png',
    ];

    return (
        <section className={styles.partners}>
            <div className={styles.upper}>
                <span style={{color: "white", fontSize: 13}}>featured in</span>
                <img width="100" src='https://ws-strapi-cms-uploads-prod.s3.eu-central-1.amazonaws.com/Logo_cc23.png'/>
            </div>
            <div className={styles.lower}>
                <div className={styles.partnerLogos}>
                    {partnerLogos.map((logo, index) => (
                        <img className={styles.img} key={index} src={logo} alt={`Partner Logo ${index + 1}`} />
                    ))}
                </div>
            </div>
        </section>
    )
}
