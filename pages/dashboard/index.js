import React from 'react'
import { useEffect, useState } from 'react';
import styles from '../../styles/Dashboard.module.css';
import Link from 'next/link';
import Head from 'next/head';
import firebase from '/utils/firebase';
import axios from 'axios';
import ListingsWrapper from '/components/Listings/ListingsWrapper';
import OrderWrapper from '/components/Dashboard/OrderWrapper';
import Loader from '/components/Layout/Loader';
import { useRouter } from 'next/router';

export default function index() {
	let [view, setView] = useState(1);
	let [orderView, setOrderView] = useState(0);
	let [labs, setLabs] = useState([]);
	let [ordersReceieved, setOrdersReceived] = useState([]);
	let [ordersSent, setOrdersSent] = useState([]);
	let [user, setUser] = useState(null);
	let [userInfo, setUserInfo] = useState(null);
	const [loading, setLoading] = useState(false);

	const router = useRouter();

	useEffect(() => {
		const userStr = localStorage.getItem("user");
		// const param = router.pathname.split("#");

		// console.log(param);

		// if (param && param == "settings") {
		// 	setView(2);
		// }

		if (userStr) {
			setLoading(true);
			const parsed = JSON.parse(userStr);
			const uid = parsed.uid;
			setUser(parsed);

			axios.get(`https://lab2client.herokuapp.com/dashboard/${uid}`).then(doc => {
				setLabs(doc.data);
				axios.get(`https://lab2client.herokuapp.com/userinfo/${uid}`).then(doc => {
					setUserInfo(doc.data[0]);
					setLoading(false);
				}).catch(e => {
					console.log(e);
				});

				axios.get(`https://lab2client.herokuapp.com/orders/sent/${uid}`).then(doc => {
					setOrdersSent(doc.data);
				}).catch(e => {
					console.log(e);
				});

				axios.get(`https://lab2client.herokuapp.com/orders/received/${uid}`).then(doc => {
					setOrdersReceived(doc.data);
				}).catch(e => {
					console.log(e);
				});
			}).catch(e => {
				console.log(e);
			});
		}
	}, []);

	const handleSignOut = () => {
		firebase.auth().signOut().then(() => {
			localStorage.removeItem("user");
			window.location = "/";
		}).catch(e => {
			console.log(e.message);
		});
	}

	return (
		<div className={`${styles.container}`}>
			<Head>
				<title>Dashboard | Lab2Client</title>
				<meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={`${styles.inner}`}>
				<nav className="nav nav-pills nav-fill" style={{ backgroundColor: "white", cursor: "pointer" }}>
					<div className={`nav-link ${view == 0 ? "active" : ""}`} onClick={() => setView(0)}>Orders</div>
					<div className={`nav-link ${view == 1 ? "active" : ""}`} onClick={() => setView(1)}>Labs</div>
					<div className={`nav-link ${view == 2 ? "active" : ""}`} onClick={() => setView(2)}>Settings</div>
				</nav>
				{
					!loading ?
						user ?
							view == 0 ?
								<div style={{
									paddingTop: 20
								}}>
									<strong>Your orders</strong>
									<ul className="nav nav-tabs" style={{ marginTop: 20 }}>
										<li className="nav-item">
											<a className={`nav-link ${orderView == 0 ? "active" : ""}`} onClick={() => setOrderView(0)} aria-current="page" href="#">Received ({ordersReceieved.length})</a>
										</li>
										<li className="nav-item">
											<a className={`nav-link ${orderView == 1 ? "active" : ""}`} onClick={() => setOrderView(1)} href="#">Requested ({ordersSent.length})</a>
										</li>
									</ul>
									<div className={styles.orderContainer}>
										{
											orderView == 0 ?
												ordersReceieved.map(order => {
													const d = new Date(Date.parse(order.date));
													return (
														<OrderWrapper type={"received"} user={user} information={order.information} date={d.toDateString()} status={order.status} />
													)
												}) : orderView == 1 ?
													ordersSent.map(order => {
														const d = new Date(Date.parse(order.date));
														return (
															<OrderWrapper type={"sent"} user={user} information={order.information} date={d.toDateString()} status={order.status} />
														)
													}) : ""
										}
									</div>
								</div>
								: view == 1 ?
									<div style={{
										paddingTop: 20
									}}>
										<div style={{
											display: "flex",
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "flex-end"
										}}>
											<strong>Your Labs</strong>
											<Link className='btn btn-dark' href="/dashboard/form">Add new +</Link>
										</div>
										{
											labs.length == 0 ?
												<div>
													<p>You don't have any active listings at the moment</p>
													<Link href="/dashboard/form">Register Lab</Link>
												</div>
												:
												<div style={{ height: "100vh", overflowY: "scroll" }}>
													<ListingsWrapper edit={true} data={labs} />
												</div>
										}
									</div>
									: view == 2 ?
										<div style={{
											paddingTop: 20
										}}>
											<strong>Your profile</strong>
											<div style={{
												backgroundColor: "white",
												padding: 20,
												marginTop: 20
											}}>
												<h3 style={{ fontSize: 20, fontWeight: "bold" }}>{userInfo.user_name}</h3>
												<p>{user.email}</p>
												<button onClick={handleSignOut} className='btn btn-danger'>Log out</button>
											</div>
											<br />
											<strong>Payments</strong>
											<div style={{
												backgroundColor: "white",
												padding: 20,
												marginTop: 20
											}}>
												<h3 style={{ fontSize: 20, fontWeight: "bold" }}>How you get paid</h3>
												<a href='/dashboard/add_account'>Add an Account</a>
											</div>
										</div>
										:
										null
							:
							<strong>Not logged in</strong>
						:
						<div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: 400 }}><Loader /></div>
				}
			</div>
		</div>
	)
}
