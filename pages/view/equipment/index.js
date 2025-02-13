import React from 'react'
import { useEffect, useState } from 'react';
import Loader from '/components/Layout/Loader';
import styles from '/styles/Equipment.module.css';
import Head from 'next/head';

export default function Equipment({ query }) {
    let [data, setData] = useState(null);
    let [user, setUser] = useState(null);
    let [parentId, setParentId] = useState(null);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        const userStr = localStorage.getItem("user");
        if (userStr) {
            const parsed = JSON.parse(userStr);
            setUser(parsed);
        }

        const equipmentListStr = localStorage.getItem("equipmentList");
        if (equipmentListStr) {
            const equipmentList = JSON.parse(equipmentListStr);
            const id = query.id;
            const equipment = equipmentList.find(e => e.id == id);
            setData(equipment);
            setParentId(equipment.parentId);
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
                    <div className={`${styles.inner} d-flex flex-column flex-xxl-row gap-4`}>
                        <div className={`${styles.imageWrapper} d-flex flex-column align-items-start w-100 ms-5 ps-5 ps-xl-0 ms-xl-0`}>
                            <h2 style={{ marginBottom: "5%", marginTop: "5%" }}>{data.name}</h2>
                            <p><b>Offered by:</b> {data.institution}</p>
                            <p><b>Location:</b> {data.location}</p>
                            <img src={data.image} alt={data.name} className={`${styles.image} mt-3`} />
                        </div>
                        <div className={`${styles.details} w-100 justify-content-center align-self-xxl-start mt-5`}>
                            {data.description.split("***").map((item, index) => (
                                <div>
                                    {index == 0 ? <h4>Description</h4> : index == 1 ? <h4>Applications in Automobile</h4> : index == 2 ? <h4>Specifications</h4> : index == 3 ? <h4>Link to website</h4> : <h4>Publications</h4>}
                                    <p key={index}>{item}</p>
                                </div>
                            ))}
                        </div>

                        <footer className={`${styles.FixedBottom} navbar navbar-dark fixed-bottom`}>
                            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                                <p style={{color: "white"}}>Interested in this item?</p>
                                <button onClick={() => {
                                    window.location = `/view/?id=${parentId}`;
                                }} className={`${styles.btn} btn`}><span className={styles.text}>Get in touch</span></button>
                            </div>
                        </footer>
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