import React, { Component } from 'react';
import styles from '/styles/Auth.module.css';
import firebase from '/utils/firebase';
import Head from 'next/head';
import Link from 'next/link';

class Login extends Component {
	state = {
        loading: false,
        error: ""
    }

	handleLogin = () => {
        const email = document.querySelector(".email").value;
        const password = document.querySelector(".password").value;

        this.setState({loading: true});
        if (email == '' || password == '') {
            this.setState({loading: false, error: "Please provide an email address and password"});
            setTimeout(() => {
                this.setState({error: ""});
            }, 4000);
        } else {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(doc => {
                console.log(doc.user);
                localStorage.setItem("user", JSON.stringify(doc.user));
				window.location = `/dashboard`;
            }).catch(e => {
                this.setState({loading: false, error: e.message});
                setTimeout(() => {
                    this.setState({error: ""});
                }, 4000);
            });
        }
    }

	render() {
		return (
			<div>
				<div className={styles.Signup}>
					<Head>
						<title>Login | Lab2Client</title>
						<meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
						<meta name="viewport" content="width=device-width, initial-scale=1" />
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<div className={styles.form}>
                        <h3>Sign in to your account</h3>
                        <br/>
                        <label>Email Address</label>
                        <input type="text" className="email"/>
                        <br/>
                        <label>Password</label>
                        <input type="password" className="password"/>
                        <br/>
                        <br/>
                        { this.state.error === "" ? <span></span> : <span className="alert alert-danger error">{this.state.error}</span> }
                        <button onClick={this.handleLogin} disabled={this.state.loading} className={`${styles.btn} ${styles.btnSignin} btn`}>{this.state.loading ? <i className={`${styles.arrow} bi bi-arrow-repeat`}></i> : "Sign in"}</button>
                        <br/>
                        <p>Don&apos;t have an account? <Link href="/auth/register">Sign up now</Link></p>
                    </div>
				</div>
			</div>
		);
	}
}

export default Login;