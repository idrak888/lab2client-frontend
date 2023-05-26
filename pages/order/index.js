import React from 'react'
import Head from 'next/head';
import Loader from '@/components/Loader';
import styles from '../../styles/Listings.module.css';
import { useEffect, useState } from 'react';
import ListingsWrapper from '@/components/ListingsWrapper';
import Link from 'next/link';

export default function Order({ query }) {
    return (
        <>
            <Head>
                <title>Confirm Order Details | Lab2Client</title>
                <meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`container ${styles.container}`}>
                <h2>Confirm your Order with {query.lab}</h2>
            </div>
        </>
    )
}

Order.getInitialProps = async ({ query }) => {  
    return { query };
}