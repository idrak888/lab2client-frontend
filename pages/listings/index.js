import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Loader from '/components/Layout/Loader';
import styles from '/styles/Listings.module.css';
import ListingsWrapper from '/components/Listings/ListingsWrapper';

export default function Listings({ query }) {
	let [data, setData] = useState(null);
	const [searchKeys, setSearchKeys] = useState("");
	const [viewMode, setViewMode] = useState(0);
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
		} else {
			window.location.href = `/listings`;
		}
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault(); // Prevent the default form submission behavior
			handleSearch();
		}
	};

	useEffect(() => {
		const data = {};
		const fakeEquipment = [
		{
			name: "Transmission Electron Microscope (TEM)",
			image: "https://www.uochb.cz/upload/files/56/9f/569fd58f39320c292310860ccdeb5cb01bbc8e25.jpg",
			description: "This advanced microscope allows researchers to examine the internal structure of materials at a high resolution, providing insights into crystal structure, defects, and interfaces",
			location: "Toronto, ON",
			institution: "University of Toronto",
			id: 1
		}	
		,{
			name: "Scanning Electron Microscope (SEM)",
			image: "https://www.jeol.com/assets/img/products/science/sem/JSM-IT800HL.jpg",
			description: "This advanced microscope allows researchers to examine the microstructure of materials at a high resolution, providing insights into surface morphology, grain structure, and defects",
			location: "Toronto, ON",
			institution: "University of Toronto",
			id: 2
		}, {
			name: "Digital Torsion Testing Machine",
			image: "https://sunlabtech.com/wp-content/uploads/2018/08/Digital-Torsion-Testing-Machine-1.jpg",
			description: "Suitable for Torsion and twist tests on various metal rods and flats. Torque measurement by torque cell. One range with a high resolution throughout the range. Geared motor to apply the torque to specimen through gear box. Measurement of Angle of Twist by Rotary Encoder. • Display of Torque and Angle of twist on LCD display provided on Data Acquisition System. • Facility for connecting the DAS Panel to PC • Accuracy of torque measurement ± 1% in the range from 4% to 100% of machine capacity.",
			location: "Toronto, ON",
			institution: "University of Toronto",
			id: 3
		}, {
			name: "Universal Testing Machine",
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Universal_testing_machine.jpg/220px-Universal_testing_machine.jpg",
			description: "A machine used to perform tension, compression, bending, and other mechanical tests on materials to determine their mechanical properties such as strength, elasticity, and toughness",
			location: "Toronto, ON",
			institution: "University of Toronto",
			id: 4
		},{
			name: "X-Ray Diffractometer (XRD)",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCK-Y2y5UdOdiDCDJFde9IBLNo44ZMZ4pjSw&s",
			description: "This instrument is used to determine the crystallographic structure of materials, providing information on the arrangement of atoms in a material",
			location: "Toronto, ON",
			institution: "University of Toronto",
			id: 5
		}, {
			name: "Atomic Force Microscope (AFM)",
			image: "https://www.royce.ac.uk/content/uploads/2017/08/Atomic-Force-Microscopy-1000x740.jpg",
			description: "This microscope provides high-resolution images of surfaces at the atomic scale, allowing researchers to study surface roughness, topography, and other properties",
			location: "Toronto, ON",
			institution: "University of Toronto",
			id: 6
		}];

		const storedViewMode = sessionStorage.getItem('viewMode');
		if (storedViewMode !== null) {
			setViewMode(parseInt(storedViewMode, 10));
		}

		if (query.search) {
			fetch(`https://lab2client-7fd38de3875a.herokuapp.com/search_word/${query.search}`)
				.then((response) => response.json())
				.then(doc => {
					data.labs = doc;
					setSearchKeys(query.search);

					fetch(`https://lab2client-7fd38de3875a.herokuapp.com/search_equipment/${query.search}`)
					.then((response) => response.json())
					.then(doc => {
						data.equipment = fakeEquipment;
						setData(data);
					});
				});
		} else {
			fetch(`https://lab2client-7fd38de3875a.herokuapp.com/getall`)
				.then((response) => response.json())
				.then(doc => {
					data.labs = doc;
					setSearchKeys("");

					// fetch all equipment
					data.equipment = fakeEquipment;

					setData(data);
				});
		}
	}, []);

	const handleClearClick = () => {
		// Clear the input field
		inputRef.current.value = '';
		setSearchKeys("");
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
		<>
			<Head>
				<title>{query.search ? capitalizeFirstLetter(query.search) : "All Listings"} | Lab2Client</title>
			</Head>
			<div className={styles.container}>
				{
					!data || !data.labs || !data.equipment ? <Loader /> :
						<>
							<div className={`${styles.searchWrapper}`}>
								<div className={styles.titleWrapper}>
									<h1 className={styles.pageTitle}>
										Find research equipment that suits your needs.
									</h1>
									{/* <button className='btn btn-outline-dark' ></button> */}
									<div style={{
										display: 'flex',
										flexDirection: 'row'
									}}>
										<span className='text-muted' style={{
											marginRight: 8
										}}>view labs</span>
										<div className="form-check form-switch">
											<input className="form-check-input" checked={viewMode == 1} type="checkbox" role="switch" onChange={() => {
												setViewMode(viewMode == 0 ? 1 : 0);
												sessionStorage.setItem('viewMode', viewMode == 0 ? '1' : '0');
											}} id="flexSwitchCheckDefault" />
										</div>
										<span className='text-muted'>view equipment</span>
									</div>
								</div>
								<div style={{ position: 'relative', width: '100%', marginTop: '30px' }}>
									<div
										style={{
											position: 'absolute',
											left: '20px',
											top: '50%',
											transform: 'translateY(-50%)',
											color: '#555',
											fontWeight: 'bold',
										}}
									>
										<i className="bi bi-search"></i>
									</div>
									<input
										ref={inputRef}
										type="text"
										placeholder="Search for lab equipment, etc. Microscope"
										style={{
											padding: '15px 40px 15px 50px', // Increased right padding to accommodate the clear icon
											width: '100%',
											boxSizing: 'border-box',
											borderRadius: '30px',
											fontSize: '80%',
										}}
										onKeyDown={handleKeyDown}
										onChange={handleChange}
										value={searchKeys}
									/>
									{searchKeys && (
										<div
											style={{
												position: 'absolute',
												top: '50%',
												right: '20px',
												transform: 'translateY(-50%)',
												cursor: 'pointer',
											}}
											onClick={handleClearClick}
										>
											&#x2715;
										</div>
									)}
								</div>
							</div>
							<h5 className={`${styles.showingResults}`}>Showing {viewMode == 0 ? data.labs.length : data.equipment.length} results</h5>
							<ListingsWrapper data={data} mode={viewMode} />
						</>
				}
			</div>
		</>
	)
}

Listings.getInitialProps = async ({ query }) => {
	return { query };
};
