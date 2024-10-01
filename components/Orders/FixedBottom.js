import React, { useState, useEffect } from 'react';
import styles from '/styles/Listings.module.css';
import Select from 'react-select';
import axios from 'axios';

// this is the fixed footer that appears in the /view page

var options = [];

const FixedBottom = ({ data, user }) => {
	const [showModal, setShowModal] = useState(false);
	const [description, setDescription] = useState("");
	const [equipment, setEquipment] = useState([]);
	const [loading, setLoading] = useState(false);
	const [orderSuccess, setOrderSuccess] = useState(false);

	// Function to get the current date in MM/DD/YYYY format
	const getDate = () => {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();

		today = mm + '/' + dd + '/' + yyyy;
		return today;
	}

	 // Function to handle order submission
	const submitOrder = () => {
		setLoading(true);
		// Check if the user is logged in
		if (user) {
			if (equipment.length > 0 && description != "") {
				// Make a POST request to create a new order
				axios.post(`https://lab2client-7fd38de3875a.herokuapp.com/create/order`, {
					ucid_sent: user.uid,
					ucid_recieved: data.user_unique_id,
					information: {
						equipment,
						description,
						requester_email: user.email,
						receiver: data.identification.research_facillity
					},
					cost: 0.0,
					date: getDate(),
					status: "Under Process"
				}).then(() => {
					setLoading(false);
					setOrderSuccess(true);
				}).catch(e => {
					console.log(e);
				});
			} else {
				window.alert("Please select at least one equipment and include a description for the order.");
				setLoading(false);
			}
		} else {
			window.alert("Not logged in. Create an account or log in to place an order.");
			setLoading(false);
		}
	}

	return (
		<footer className={`${styles.FixedBottom} navbar navbar-dark fixed-bottom`}>
			{
				showModal ?
					<div className={styles.modal}>
						<div className={styles.background}></div>
						<div className={styles.content}>
							<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
								<h4 style={{ fontWeight: "bold" }}>{data ? data.identification.research_facillity : ""}</h4>
								<i onClick={() => {
									options = [];
									setShowModal(false)
								}} style={{ fontSize: 30, cursor: "pointer" }} className='bi bi-x'></i>
							</div>
							<hr />
							<form>
								<h4 style={{ fontSize: 18, marginTop: 25 }}>Select Equipment</h4>
								<Select isMulti onChange={values => {
									const arr = [];
									values.forEach(doc => {
										arr.push(doc.value);
									});
									setEquipment(arr);
								}} className={styles.select} options={options} />
								<h4 style={{ fontSize: 18, marginTop: 25 }}>Message</h4>
								<textarea onChange={e => {
									setDescription(e.target.value);
								}} value={description} className={styles.description} placeholder='Example: I need access to the XPS microscope for one week'></textarea>
							</form>
							{orderSuccess ? <p style={{fontWeight: "bold", textAlign: "center"}}>Order placed successfully. View order status in <a href="/dashboard">dashboard</a></p> : <button onClick={submitOrder} className={`${styles.btn} btn btn-primary`}>{loading ? <i className={`${styles.arrow} bi bi-arrow-repeat`}></i> : "Get in touch"}</button> }
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
					data.lab_equipment.forEach(item => {
						options.push({ value: item.name, label: item.name });
					});
					setShowModal(true);
				}} className={`${styles.btn} btn`}><span className={styles.text}>Get in touch</span></button>
			</div>

		</footer>
	);
};

export default FixedBottom;
