import React from 'react'
import styles from '../../styles/About.module.css';

export default function TeamCard() {
	return (
		<div className={`col-md-4 ${styles.teamCard}`}>
			<img src="avatar.jpeg" className="img-fluid mb-3" style={{ width: "400px", height: "300px", objectFit: "cover" }} /> {/* are the files going to be pre-determined sizes? should I adjust them using code */}
			<h5 style={{ fontWeight: "bold" }}>Curtizs Dizon</h5>
			<h6>UX/UI Designer</h6>
			<p>
				Curtis oversees the UX/UI design at Lab2Client. He is in his
				final year of the business program at TMU. Prior to
				Lab2Client, Curtis Interned at CIBC and
				CGI for UX Design.
			</p>
			<a href="/" target="_blank"><i className="bi bi-linkedin" style={{ color: "black" }}></i></a>
		</div>
	)
}
