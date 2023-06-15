import React, { Component } from 'react';
import styles from '/styles/Auth.module.css';
import firebase from '/utils/firebase';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';

class Login extends Component {
	state = {
        loading: false,
        error: ""
    }

    handleGoogleLogin = () => {
        this.setState({loading: true});
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then((result) => {
            var user = result.user;
            axios.get(`https://pupil7-backend.herokuapp.com/users/${user.uid}`).then(doc => {
                if (doc.data === "") {
                    axios.post('https://pupil7-backend.herokuapp.com/users', {
                        uid: user.uid,
                        username: user.displayName,
                        email: user.email
                    }).then(doc2 => {
                        const redirect = sessionStorage.getItem("redirect");
                        localStorage.setItem("user", JSON.stringify(doc2.data));
        
                        if (redirect) {
                            sessionStorage.removeItem("redirect");
                            window.location = redirect;
                        } else {
                            window.location = `/yearly/papers/CAIE`;
                        }
                    }).catch(e => {
                        this.setState({loading: false});
                    });

                } else {
                    const redirect = sessionStorage.getItem("redirect");
                    localStorage.setItem("user", JSON.stringify(doc.data));
                    this.setState({loading: false});

                    if (redirect) {
                        sessionStorage.removeItem("redirect");
                        window.location = redirect;
                    } else {
                        window.location = `/dashboard`;
                    }
                }
            }).catch(e => {
                console.log(e);
            });
        }).catch((error) => {
            var errorMessage = error.message;
            this.setState({loading: false, error: errorMessage});
            setTimeout(() => {
                this.setState({error: ""});
            }, 4000);
        });
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
                axios.get(`https://pupil7-backend.herokuapp.com/users/${doc.user.uid}`).then(user => {
                    const redirect = sessionStorage.getItem("redirect");
                    localStorage.setItem("user", JSON.stringify(user.data));

                    this.setState({loading: false});

                    if (redirect) {
                        sessionStorage.removeItem("redirect");
                        window.location = redirect;
                    } else {
                        window.location = `/dashboard`;
                    }
                }).catch(e => {
                    console.log(e);
                });
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
                        <button onClick={this.handleGoogleLogin} className={`${styles.btn} ${styles.btnAuth} btn`}>Continue with Google</button>
                        <br/>

                        <p align="center">or</p>
                        <label>Email Address</label>
                        <input type="text" className="email"/>
                        <br/>
                        <label>Password</label>
                        <input type="password" className="password"/>
                        <br/>
                        <br/>
                        { this.state.error === "" ? <span></span> : <span className="alert alert-danger error">{this.state.error}</span> }
                        <button onClick={this.handleLogin} disabled={this.state.loading} className={`${styles.btn} ${styles.btnSignin} btn`}>{this.state.loading ? <i className="fa fa-spinner"></i> : "Sign in"}</button>
                        <br/>
                        <p>Don&apos;t have an account? <Link href="/auth/register/lab">Sign up now</Link></p>
                    </div>
				</div>
			</div>
		);
	}
}

export default Login;