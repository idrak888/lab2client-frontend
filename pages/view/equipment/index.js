import React from 'react'
import { useEffect, useState } from 'react';
import Loader from '/components/Layout/Loader';
import styles from '/styles/Equipment.module.css';
import Head from 'next/head';
import FixedBottom from '/components/Orders/FixedBottom';

export default function Equipment({ query }) {
    let [data, setData] = useState(null);
    let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        const userStr = localStorage.getItem("user");
        if (userStr) {
            const parsed = JSON.parse(userStr);
            setUser(parsed);
        }
        
        const equipmentListStr = sessionStorage.getItem("equipmentList");
        if (equipmentListStr) {
            const equipmentList = JSON.parse(equipmentListStr);
            const id = query.id;
            const equipment = equipmentList.find(e => e.id == id);
            setData(equipment);
            setLoading(false);
        }
    }, []);

    return (
        <div className={styles.viewWrapper}>
            <Head>
                <title>{data ? data.name : "loading"} | Lab2Client</title>
                <meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav style={{ width: "100%" }} className={`${styles.header} navbar navbar-expand-lg navbar-dark fixed-top`}>
                <div className="container">
                    <div id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => window.history.back()}><i className='bi bi-arrow-left-short'></i> Go Back</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {
                !loading ? 
                <div className={styles.inner}>
                    <div className={styles.imageWrapper}>
                        <img src={data.image} alt={data.name} className={styles.image} />
                    </div>
                    <div className={styles.details}>
                        <h2>{data.name}</h2>
                        <p>{data.description}</p>
                        <p><b>Offered by:</b> {data.institution}</p>
                        <p><b>Location:</b> {data.location}</p>
                    
                        <div className={styles.additionalInfo}>
                            <h4>Specifications</h4>
                            <ul>
                                <li><b>Resolution:</b> 0.1 nm</li>
                                <li><b>Voltage:</b> 200 kV</li>
                                <li><b>Magnification:</b> 50x to 1,000,000x</li>
                            </ul>
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="https://www.example.com/manual" target="_blank" rel="noopener noreferrer">User Manual</a></li>
                                <li><a href="https://www.example.com/specs" target="_blank" rel="noopener noreferrer">Technical Specifications</a></li>
                                <li><a href="https://www.example.com/tutorial" target="_blank" rel="noopener noreferrer">Tutorial Videos</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                :
                <div>   
                    <Loader />
                </div>
            }
        </div>
    )
}

Equipment.getInitialProps = async ({ query }) => {
    return { query };
}