import React, { useState, useEffect } from 'react'
import styles from '@/styles/Order.module.css';
import axios from 'axios';

// this is one of the column sections that appear on the /order page, containing the order description form

export default function OrderCard({ lab, data, user }) {
	const [fields, setFields] = useState([]);
	const [description, setDescription] = useState("");
	const [loading, setLoading] = useState(false);

	const getDate = () => {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();

		today = mm + '/' + dd + '/' + yyyy;
		return today;
	}

	const submitOrder = () => {
		setLoading(true);
		if (user) {
			if (fields.length > 0 && description != "") {
				axios.post(`https://lab2client.herokuapp.com/create/order`, {
					ucid_sent: user.uid,
					ucid_recieved: data.user_unique_id,
					information: {
						fields,
						description,
						requester_email: user.email,
						receiver: lab
					},
					cost: 0.0,
					date: getDate(),
					status: "Under Process"
				}).then(doc => {
					setLoading(false);
					window.location = "/dashboard";
				}).catch(e => {
					console.log(e);
				});
			} else {
				window.alert("Please select at least one relevant field and include a description for the order.");
				setLoading(false);
			}
		} else {
			window.alert("Not logged in. Create an account or log in to place an order.");
			setLoading(false);
		}
	}

	return (
		<div className={`${styles.plan}`}>
			<div className={`${styles.inner}`}>
				{/* <span className={`${styles.pricing}`}>
					<span>
						$250
					</span>
				</span> */}
				<p className={`${styles.title}`}>{lab}</p>
				<p className={`${styles.info}`}>Select relevant fields</p>
				<ul className={`${styles.features}`}>
					{
						data.Fields_of_research.fields.map(field => {
							return (
								<li>
									<label className={`${styles.materialCheckbox}`}>
										<input onChange={e => {
											if (e.target.checked) {
												setFields(current => [...current, field]);
											} else {
												setFields(current =>
													current.filter(f => {
														return f !== field;
													})
												);
											}
										}} type="checkbox" />
										<span className={`${styles.checkmark}`}></span>
										{field}
									</label>
								</li>
							)
						})
					}
				</ul>
				<span className={`${styles.info}`}>Description of order: </span>
				<textarea onChange={e => {
					setDescription(e.target.value);
				}} value={description} className={styles.description} placeholder='Example: I need access to the XPS microscope for one week'></textarea>
				<div className={`${styles.action}`}>
					<button disabled={loading} className={`${styles.button}`} onClick={submitOrder}>
						{loading ? <i className={`${styles.arrow} bi bi-arrow-repeat`}></i> : "Place Order"}
					</button>
				</div>
			</div>
		</div>
	)
}
