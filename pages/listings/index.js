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

		const storedViewMode = sessionStorage.getItem('viewMode');
		if (storedViewMode !== null) {
			setViewMode(parseInt(storedViewMode, 10));
		}

		const fetchData = async (url) => {
			const response = await fetch(url);
			const doc = await response.json();
			const equipmentList = [];
			data.labs = doc;

			for (let lab of data.labs) {
				const parentId = lab.id;
				const institution = lab.identification.institution_name;
				const location = lab.identification.city + ', ' + lab.identification.province;
				const equipment = lab.lab_equipment;

				for (let i = 0; i < equipment.length; i++) {
					const item = equipment[i];
					const equipmentItem = {
						name: item.name,
						image: item.image,
						description: item.description,
						location: location,
						institution: institution,
						parentId: parentId,
						id: lab.id + i
					};

					equipmentList.push(equipmentItem);
				}
			}

			if (query.search) {
				const filteredEquipmentList = equipmentList.filter((item) => {
					const keys = query.search.split(' ');
					for (let key of keys) {
						if (item.name.toLowerCase().includes(key.toLowerCase()) || item.description.toLowerCase().includes(key.toLowerCase())) {
							return true;
						}
					}
					return false;
				});
				data.equipment = filteredEquipmentList;
				setSearchKeys(query.search);
			} else {
				data.equipment = equipmentList;
				setSearchKeys("");
			}

			setData(data);
			localStorage.setItem('equipmentList', JSON.stringify(equipmentList));
		};

		if (query.search) {
			fetchData(`https://lab2client-7fd38de3875a.herokuapp.com/search_word/${query.search}`);
		} else {
			fetchData(`https://lab2client-7fd38de3875a.herokuapp.com/getall`);
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
