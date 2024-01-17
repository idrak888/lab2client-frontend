import React from 'react';
import styles from '/styles/Home.module.css';
import firebase from '../../utils/firebase';

// this is the main navbar that appears in all of the pages

export default function Navbar({ user }) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark fixed-top">
			<div className="container-fluid">
				<a className="navbar-brand" href="/"><img src='/lab2client-white.svg' width={120} /></a>
				<ul className={`${styles.links} navbar-nav me-auto mb-2 mb-lg-0`}>
					<li className="nav-item">
						<a className="nav-link" href="/listings">Find Labs</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/about">About</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/#contact">Contact</a>
					</li>
				</ul>
				<div className="d-flex items-center justify-center">
					<a href='/auth/register' className='nav-link' style={{ color: "#bed6fb", textDecoration: "none", marginRight: 20, fontSize: 14, alignSelf: "center" }}>Offer your Lab</a>
					<div className="dropdown d-flex align-items-center" style={{ borderRadius: "20px", backgroundColor: "white", padding: "0px 5px" }}>
						<i
							className="bi bi-list"
							style={{ paddingRight: "5px", color: "black" }}
							type="button"
							id="dropdownMenuButton"
							data-bs-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						/>
						<div className="dropdown-menu p-0 z-50" aria-labelledby="dropdownMenuButton" style={{ marginLeft: -110 }}>
							{
								user ?
									(
										<div className={`${styles.dropDownMenuIconPadding}`}>
											<a className="dropdown-item" href="/dashboard"><i className="bi bi-grid-1x2"></i> Dashboard </a>
											<a className="dropdown-item" href="/dashboard#settings"><i className="bi bi-gear"></i> Settings </a>
											<a className="dropdown-item" href="/#contact"><i className="bi bi-envelope"></i> Contact </a>
											<a className="dropdown-item" onClick={handleSignOut} style={{ cursor: "pointer" }}><i className="bi bi-box-arrow-right"></i> Log Out </a>
										</div>
									)
									:
									(
										<div className={`${styles.dropDownMenuIconPadding}`}>
											<a className="dropdown-item" href="/auth/register"><i className="bi bi-person-circle"></i> Sign Up </a>
											<a className="dropdown-item" href="/auth/login"><i className="bi bi-box-arrow-in-right"></i> Log In </a>
										</div>
									)
							}
						</div>
						<div className="pb-1">
							{
								user ?
									(
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#27AE60" class="bi bi-circle-fill" viewBox="0 0 16 16">
											<circle cx="8" cy="8" r="8" />
										</svg>
									)
									:
									(
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E74C3C" class="bi bi-circle-fill" viewBox="0 0 16 16">
											<circle cx="8" cy="8" r="8" />
										</svg>
									)
							}
						</div>
					</div>

				</div>

			</div>
		</nav>
	)
}

// Sign Out Function (from Dashboard)
const handleSignOut = () => {
	firebase.auth().signOut().then(() => {
		localStorage.removeItem("user");
		window.location = "/";
	}).catch(e => {
		console.log(e.message);
	});
}