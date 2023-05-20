import React from 'react'
import Head from 'next/head';
import Loader from '@/components/Loader';
import styles from '../../styles/Listings.module.css';
import { useEffect, useState } from 'react';
import ListingsWrapper from '@/components/ListingsWrapper';
import Link from 'next/link';

export default function Listings({ query }) {
    let [data, setData] = useState(null);
    const [searchKeys, setSearchKeys] = React.useState("");

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleChange = event => {
        setSearchKeys(event.target.value);
    }

    useEffect(() => {
        fetch("https://lab2client.herokuapp.com/getall").then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        });
    },[]);

    return (
        <>
            <Head>
                <title>{capitalizeFirstLetter(query.search)} | Lab2Client</title>
                <meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={`${styles.searchWrapper} d-flex`}>
                    <input 
                        type="text"
                        value={searchKeys}
                        onChange={handleChange} 
                        className={`${styles.input} form-control me-2`} 
                        placeholder="Search for more resources"
                    />
                    <Link className={`${styles.btn} btn`} href={searchKeys.trim() != "" ? { pathname: '/listings', query: { search: searchKeys } } : "#"}><span className={styles.text}>Find Labs</span> <i className="bi bi-arrow-right" style={{marginLeft: 3, marginRight: 3}}></i></Link>
                </div>
                <h5 style={{fontWeight: "bold", marginTop: 20, fontSize: 18}}>SHOWING 1 - 10 OF 237 RESULTS</h5>
                {
                    !data ? <Loader/> : <ListingsWrapper data={data}/>
                }
            </div>
        </>
    )
}

Listings.getInitialProps = async ({ query }) => {  
    return { query };
}