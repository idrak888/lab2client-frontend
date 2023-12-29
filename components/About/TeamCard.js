import React, { useState } from "react";
import styles from "../../styles/About.module.css";

export default function TeamCard(properties) {
	let [showDesc, setShowDesc] = useState(false);

	return (
		<div onClick={() => setShowDesc(!showDesc)} className={`col-lg-2 ${(styles.cardBacking)}`}>
			<img src={properties.imageSource} className={`img-fluid mb-3 ${styles.headshot}`} />
			<div className={`${(styles.teamCardText)}`}>
				<h5 className={`${styles.staffName}`}>{properties.name}</h5>
				<h6>{properties.jobTitle}</h6>
				{showDesc ? <p>{properties.description}</p> : null}
				<a href={properties.socialLink} target="_blank" className={`${styles.linkedInIcon}`}>
					<i className={`bi bi-linkedin ${styles.linkedInIcon}`}></i>
					<span className={`${styles.linkedInIconText}`}>LinkedIn</span>
				</a>
			</div>
		</div>
	);
}
