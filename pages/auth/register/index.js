import React, { Component } from 'react';
import styles from '@/styles/Auth.module.css';
import firebase from '/utils/firebase';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';

class Signup extends Component {
	state = {
		loading: false,
		error: ""
	}

	handleSignup = () => {
		const email = document.querySelector(".email").value;
		const password = document.querySelector(".password").value;
		const confirmPassword = document.querySelector(".confirm-password").value;
		const firstname = document.querySelector(".firstname").value;
		const lastname = document.querySelector(".lastname").value;

		this.setState({ loading: true });
		if (email.trim() === '' || password.trim() === '' || firstname.trim() === '' || lastname.trim() === '') {
			this.setState({ loading: false, error: "Please provide a first name, last name, email address and password" });
			setTimeout(() => {
				this.setState({ error: "" });
			}, 4000);
		} else {
			if (password === confirmPassword) {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(doc => {
						console.log(doc.user);
						doc.user.updateProfile({
							displayName: `${firstname} ${lastname}`
						});
						axios.post('https://lab2client.herokuapp.com/create/info', {
							ucid: doc.user.uid,
							first_name: firstname,
							last_name: lastname,
							user_name: `${firstname} ${lastname}`
						}).then(() => {
							localStorage.setItem("user", JSON.stringify(doc.user));
							window.location = `/dashboard`;
						}).catch(e => {
							this.setState({ loading: false });
						});
					}).catch((error) => {
						this.setState({ loading: false, error: error.message });
						setTimeout(() => {
							this.setState({ error: "" });
						}, 4000);
					});
			} else {
				this.setState({ loading: false, error: "Passwords didn't match" });
				setTimeout(() => {
					this.setState({ error: "" });
				}, 4000);
			}
		}
	}
	render() {
		return (
			<div>
				<div className={styles.Signup}>
					<Head>
						<title>Register your Facility | Lab2Client</title>
						<meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
						<meta name="viewport" content="width=device-width, initial-scale=1" />
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<div className={styles.form}>
						<h3>Create your account</h3>
						<br />

						<label>First name</label>
						<input type="text" className="firstname" />
						<br />

						<label>Last name</label>
						<input type="text" className="lastname" />
						<br />

						<label>Email Address</label>
						<input type="text" className="email" />
						<br />

						<label>Password</label>
						<input type="password" className="password" />
						<br />
						<label>Confirm Password</label>
						<input type="password" className="confirm-password" />
						<br />

						<br />
						<p className="text-muted">By signing up, you are accepting the <a href="/privacypolicy">Privacy Policy</a> and the Terms of Service</p>
						{this.state.error === "" ? <span></span> : <span className="alert alert-danger error">{this.state.error}</span>}
						<button onClick={this.handleSignup} disabled={this.state.loading} className={`${styles.btn} ${styles.btnSignup} btn`}>{this.state.loading ? <i className={`${styles.arrow} bi bi-arrow-repeat`}></i> : "Sign up"}</button>
						<br />
						<p>Have an account? <Link href="/auth/login">Log in now</Link></p>
					</div>
				</div>
			</div>
		);
	}
}

export default Signup;