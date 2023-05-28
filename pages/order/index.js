import React from 'react'
import Head from 'next/head';
import Loader from '@/components/Loader';
import styles from '../../styles/Order.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import OrderCard from '../../components/OrderCard';

export default function Order({ query }) {
    let [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://lab2client.herokuapp.com/email/${query.email}`).then(response => response.json())
        .then(data => {
            setData(data[0]);
            console.log(data);
        });
    },[]);

    return (
        <div className={styles.viewWrapper}>
            <Head>
                <title>Confirm Order Details | Lab2Client</title>
                <meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav style={{width: "100%"}} className={`${styles.header} navbar navbar-expand-lg navbar-dark`}>
                <div className="container">
                    <div id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:history.back()"><i className='bi bi-arrow-left-short'></i> Cancel</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {
                !data ? <div className={styles.loader}><Loader/></div> : 
                <div className={`${styles.container}`}>
                    <div style={{
                        maxWidth: 1200,
                        padding: 40,
                    }} className='row'>
                        <div className='col-sm' style={{
                            backgroundColor: "#f6f6f6",
                            padding: 30,
                            borderRadius: 16
                        }}>
                            <h4 style={{fontWeight: "bold"}}>Research</h4>
                            <p>{data.research.DESCRIPTION_OF_RESEARCH_INFRASTRUCTURE}</p>
                            <p>{data.research.DESCRIPTION_OF_YOUR_FACILITY}</p>
                            <p>{data.research.areas_of_expertise}</p>
                            <p><a href={data.research.website}>{data.research.website}</a></p>
                            <h4 style={{fontWeight: "bold"}}>Fields of Research</h4>
                            {data.Fields_of_research.fields.map(field => <p>{field}</p>)}
                            <h4 style={{fontWeight: "bold"}}>Sectors</h4>
                            {data.Sectors_of_application.applications.map(app => <p>{app}</p>)}
                        </div>
                        <div className='col-sm' style={{maxWidth: 450}}>
                            <div style={{marginLeft: 20}}>
                                <h4>Confirm Details</h4>
                                <p>This is a non-refundable purchase that will enable access to internal communications with the facility.</p>
                            </div>
                            <OrderCard lab={query.lab}/>
                        </div>
                    </div>
                </div>
            }   
        </div>
    )
}

Order.getInitialProps = async ({ query }) => {  
    return { query };
}