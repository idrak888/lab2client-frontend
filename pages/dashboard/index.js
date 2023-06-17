import React from 'react'
import { useEffect, useState } from 'react';
import styles from '../../styles/Dashboard.module.css';
import Link from 'next/link';
import Head from 'next/head';

export default function index() {
    let [view, setView] = useState(1);
	let [labs, setLabs] = useState([]);
	let [orders, setOrders] = useState([]);

	return (
		<div className={`${styles.container}`}>
			<Head>
				<title>Dashboard | Lab2Client</title>
				<meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={`${styles.inner}`}>
				<h3>Dashboard</h3>
				<nav className="nav nav-pills nav-fill" style={{backgroundColor: "white", cursor: "pointer"}}>
					<div className={`nav-link ${view == 0 ? "active" : ""}`} onClick={() => setView(0)}>Orders</div>
					<div className={`nav-link ${view == 1 ? "active" : ""}`} onClick={() => setView(1)}>Labs</div>
					<div className={`nav-link ${view == 2 ? "active" : ""}`} onClick={() => setView(2)}>Profile</div>
				</nav>
				{
					view == 0 ?
					<div>
						Your orders
					</div>
					: view == 1 ?
					<div>
						Your labs
						{
							labs.length == 0 ? 
							<div>
								<h2>You don't have any active listings at the moment</h2>
								<Link href="/dashboard/form">Register</Link>
							</div>
							:
							<div>

							</div>
						}
					</div>
					:
					null
				}
			</div>
		</div>
	)
}
