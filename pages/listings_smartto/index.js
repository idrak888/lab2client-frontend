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
		if (query.search) {
			fetch(`https://lab2client-7fd38de3875a.herokuapp.com/search_word/${query.search}`)
				.then((response) => response.json())
				.then((data) => {
					const filteredData = data.filter(item => item.association === "SmartTO");
					console.log(filteredData)
					setData(filteredData);
					setSearchKeys(query.search);
				});
		} else {
			fetch(`https://lab2client-7fd38de3875a.herokuapp.com/getall`)
				.then((response) => response.json())
				.then((data) => {
					const filteredData = data.filter(item => item.association === "SmartTO");
					console.log(filteredData)
					setData(filteredData.reverse());
					setSearchKeys("");
				});
		}
	}, []);

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
								<h4 style={{ margin: 10 }}><img style={{marginRight: 10}} width={100} src="https://www.yorku.ca/yspace/wp-content/uploads/sites/231/2024/06/YorkU_SmartTO_Logo-5.png"/> Research Facilities</h4>
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
														<h3 style={{ fontWeight: "bold", fontSize: 16 }}>{listing.identification.research_facillity}</h3>
														<div className={`${styles.greyComponent} ${styles.componentWrapper}`} style={{ marginBottom: "1%" }}>
															<i className={`bi bi-geo-alt me-1 fs-6`}></i>
															<span style={{ fontSize: "12px" }}>
																{listing.identification.institution_name}
															</span>
														</div>
														<p style={{ fontSize: 14 }}>{listing.lab_equipment.length} Equipments Offered</p>
													</div>
												</div>
											</Link>
										)
									}) : "loading"}
								</div>
								<div className={`${styles.listingRow} ${styles.row2}`}>
									{data ? data.slice(3, 6).map(listing => {
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
														<h3 style={{ fontWeight: "bold", fontSize: 16 }}>{listing.identification.research_facillity}</h3>
														<div className={`${styles.greyComponent} ${styles.componentWrapper}`} style={{ marginBottom: "1%" }}>
															<i className={`bi bi-geo-alt me-1 fs-6`}></i>
															<span style={{ fontSize: "12px" }}>
																{listing.identification.institution_name}
															</span>
														</div>
														<p style={{ fontSize: 14 }}>{listing.lab_equipment.length} Equipments Offered</p>
													</div>
												</div>
											</Link>
										)
									}) : "loading"}
								</div>
							</div>
							<br />
							<div style={{ paddingTop: 5, paddingBottom: 80 }}>
								<div className='text-center'>
									<h2 style={{ fontWeight: "bold", fontSize: 40 }}>What we offer <img style={{ marginBottom: -25 }} width={50} src="https://www.svgrepo.com/show/364142/arrow-bend-right-down-fill.svg" /></h2>
								</div>
								<div className='row' style={{ margin: "auto", maxWidth: 1000, marginTop: 50 }}>
									<div className='col-sm'>
										<i style={{ fontSize: 35, color: "grey" }} className='bi bi-clipboard2-check'></i>
										<h5 style={{ fontWeight: "bold", marginTop: 20 }}>Feasibility Studies/Optimal Design & Software</h5>
										<p className='text-muted' style={{ fontSize: 14 }}>Access our experts and resources to test and develop your ideas with the latest tools and software on the market – from battery testing to software design.</p>
									</div>
									<div className='col-sm'>
										<i style={{ fontSize: 35, color: "grey" }} className='bi bi-buildings'></i>
										<h5 style={{ fontWeight: "bold", marginTop: 20 }}>State-of-the-art R&D Facilities and Infrastructure</h5>
										<p className='text-muted' style={{ fontSize: 14 }}>R&D space with a full suite of technologies, test vehicles, specialized equipment, and technical support including access to Canada’s largest on-site transportation training facility.</p>
									</div>
									<div className='col-sm'>
										<i style={{ fontSize: 35, color: "grey" }} className='bi bi-file-bar-graph'></i>
										<h5 style={{ fontWeight: "bold", marginTop: 20 }}>Living and Virtual Lab Testing Environment</h5>
										<p className='text-muted' style={{ fontSize: 14 }}>Test your technology in real-world conditions by using the YorkU campus- Canada’s 3rd largest university, as a Living and Virtual Lab.</p>
									</div>
								</div>
								<div className='row' style={{ margin: "auto", maxWidth: 1000, marginTop: 50 }}>
									<div className='col-sm'>
										<i style={{ fontSize: 35, color: "grey" }} className='bi bi-mortarboard'></i>
										<h5 style={{ fontWeight: "bold", marginTop: 20 }}>Entrepreneurial Workshops & Training</h5>
										<p className='text-muted' style={{ fontSize: 14 }}>Industry specific workshops and on-demand training on topics like Technology Commercialization and Technology Entrepreneurship.</p>
									</div>
									<div className='col-sm'>
										<i style={{ fontSize: 35, color: "grey" }} className='bi bi-rocket-takeoff'></i>
										<h5 style={{ fontWeight: "bold", marginTop: 20 }}>Technology Accelerator & Incubator Programs</h5>
										<p className='text-muted' style={{ fontSize: 14 }}>Learn how validate and become market-ready and, if you’re ready, develop and execute your go-to-market strategy.</p>
									</div>
									<div className='col-sm'>
										<i style={{ fontSize: 35, color: "grey" }} className='bi bi-chat-left'></i>
										<h5 style={{ fontWeight: "bold", marginTop: 20 }}>Concierge-Style Entrepreneurial Support</h5>
										<p className='text-muted' style={{ fontSize: 14 }}>Customized business advisory services with top industry experts and peer-to-peer networking support.</p>
									</div>
								</div>
							</div>
							<br />
							<div className={styles.bottomText}>
								<h1>We are a Regional Technology Development Site that is proudly a part of the <span>Ontario Vehicle Innovation Network (OVIN)</span> delivered on behalf of the Government of Ontario.</h1>
								<br />
								<img width={400} src="https://www.yorku.ca/research/project/smartto/wp-content/uploads/sites/861/2024/04/OVIN-Logo-CMYK-Horizontal1-1024x153.png" />
							</div>
						</>
				}
			</div>
			<div style={{ backgroundColor: "rgb(9, 27, 56)", color: "white", padding: 30 }}>
				<div style={{maxWidth: 900, width: "100%", display: "block", margin: "auto"}}>
					Connect with SmartTO <a style={{marginLeft: 10, fontSize: 18}} href='https://www.linkedin.com/company/smartto/'><i className='bi bi-linkedin'></i></a>
				</div>
			</div>
		</div>
	)
}

ListingsSmartTO.getInitialProps = async ({ query }) => {
	return { query };
};
