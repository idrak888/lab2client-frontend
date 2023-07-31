import React from 'react'

// this is the main navbar that appears in all of the pages

export default function Navbar({ user }) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="/"><img src='/lab2client-white.svg' width={150} /></a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<i style={{ color: "white" }} className="bi bi-list"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/listings">Browse</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/about">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/#contact">Contact</a>
						</li>
					</ul>
					<div className="d-flex">
						{
							user ?
							<a href='/dashboard'><button className="btn btn-outline-light">Go to Dashboard</button></a>
							:
							<a href='/auth/register'><button className="btn btn-outline-light">Get Started</button></a>
						}
          			</div>
				</div>
			</div>
		</nav>
	)
}
