import React, { useState, useEffect } from 'react';
import styles from '/styles/Listings.module.css';
import Select from 'react-select';

// this is the fixed footer that appears in the /view page

const options = [];

const FixedBottom = ({ data }) => {
	const [showModal, setShowModal] = useState(false);
	const [description, setDescription] = useState("");

	return (
		<footer className={`${styles.FixedBottom} navbar navbar-dark fixed-bottom`}>
			{
				showModal ?
					<div className={styles.modal}>
						<div className={styles.background}></div>
						<div className={styles.content}>
							<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
								<h4 style={{ fontWeight: "bold" }}>{data ? data.identification.institution_name : ""}</h4>
								<i onClick={() => setShowModal(false)} style={{ fontSize: 30, cursor: "pointer" }} className='bi bi-x'></i>
							</div>
							<hr />
							<form>
								<h4 style={{ fontSize: 18, marginTop: 25 }}>Select Equipment</h4>
								<Select isMulti className={styles.select} options={options} />
								<h4 style={{ fontSize: 18, marginTop: 25 }}>Description of Order</h4>
								<textarea onChange={e => {
									setDescription(e.target.value);
								}} value={description} className={styles.description} placeholder='Example: I need access to the XPS microscope for one week'></textarea>
							</form>
							<button className={`${styles.btn} btn`}>Place Order</button>
						</div>
					</div>
					: null
			}
			<div className="container">
				<ul>
					<li className={styles.li}><a href='#overview'>Overview</a></li>
					<li className={styles.li}><a href='#about'>About</a></li>
					<li className={styles.li}><a href='#equipment'>Equipment</a></li>
				</ul>
				<button onClick={() => {
					data.Fields_of_research.fields.forEach(item => {
						options.push({ value: item, label: item });
					});
					setShowModal(true);
				}} className={`${styles.btn} btn`}><span className={styles.text}>Place Order</span></button>
				{/* <Link className={`${styles.btn} btn`} href={data ? { pathname: '/order', query: { id: data.id, lab: data.identification.research_facillity } } : ""}><span className={styles.text}>Place an Order</span> <i className="bi bi-arrow-right" style={{marginLeft: 3, marginRight: 3}}></i></Link> */}
			</div>
			
		</footer>
	);
};

export default FixedBottom;
