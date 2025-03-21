import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Loader from '/components/Layout/Loader';
import styles from '/styles/Listings.module.css';
import Link from 'next/link';
import Partners from '/components/Home/Partners';

export default function ListingsSmartTO({ query }) {
	let [data, setData] = useState(null);
	const [searchKeys, setSearchKeys] = useState("");
	const inputRef = useRef(null);

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const handleChange = (event) => {
		setSearchKeys(event.target.value);
	};

	const handleSearch = () => {
		const trimmedSearchKeys = searchKeys.trim();
		if (trimmedSearchKeys !== '') {
			window.location.href = `/listings?search=${trimmedSearchKeys}`;
		}
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault(); // Prevent the default form submission behavior
			handleSearch();
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const endpoint = query.search 
					? `/api/proxy?search=${query.search}` 
					: `/api/proxy`;

				const response = await fetch(endpoint);
				const data = await response.json();

				const filteredData = data.filter(item => item.association === "SmartTO");
				setData(query.search ? filteredData : filteredData.reverse());
				setSearchKeys(query.search || "");
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, [query.search]);

	const handleClearClick = () => {
		// Clear the input field
		inputRef.current.value = '';
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (inputRef.current) {
				inputRef.current.focus();
			}
		}, 100);

		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<div className={styles.SmartTO}>
			<Head>
				<title>{query.search ? capitalizeFirstLetter(query.search) : "SmartTO labs"} | Lab2Client</title>
			</Head>
			<div className={styles.container}>
				{
					!data ? <Loader /> :
						<>
							<div className={styles.outer}>
								<div className={styles.container}>
									<div style={{ maxWidth: 800 }}>
										<h1 className={styles.h1}>Welcome to <span>SmartTO</span> Labs</h1>
										<p>Smart Mobility Applied Research and Testing-Toronto (SmartTO) is one of seven regional technology development sites that are a part of the Ontario Vehicle Innovation Network (OVIN)</p>
										<br />
										learn more at <strong><a href='https://www.yorku.ca/research/project/smartto/' target="_blank" rel="noopener noreferrer">SmartTO</a></strong>
									</div>
								</div>
								<Partners />
							</div>
							<div style={{ display: "block", margin: "auto", maxWidth: 1000, paddingTop: 100, paddingBottom: 100 }}>
								<h4 style={{ margin: 10 }}>
									<><img style={{marginRight: 10}} width={100} src="https://www.yorku.ca/yspace/wp-content/uploads/sites/231/2024/06/YorkU_SmartTO_Logo-5.png"/> Research Facilities</>
								</h4>
								<div className={styles.listingRow}>
									{data ? data.slice(0, 3).map(listing => {
										return (
											<Link
												href={{
													pathname: '/view',
													query: { id: listing.id },
												}}
												className={styles.card}
												key={listing.id}
											>
												<div className='row'>
													<div className='col-sm'>
														<img
															style={{
																width: "100%",
																height: "200px", // Set your desired fixed height here
																objectFit: "cover", // Crop the image to fit the specified dimensions
																borderRadius: "25px",
																borderRadius: 5
															}}
															src={listing.research["LOGOS"]}
															alt="Research Logo"
														/>
													</div>
												</div>
												<div className={`row ${styles.responsiveCard}`} style={{ display: "flex", alignItems: "center" }}>
													<div className='col-sm d-flex flex-column'>
														<br />
														<span style={{ fontSize: 14 }} className={`font-size-6 font-weight-light`}>
															{listing.identification.city}, {listing.identification.province}
														</span>
														<h
