import React from "react";
import styles from "../../styles/About.module.css";

export default function TeamCard(properties) {
  return (
	//Looks way better size-wise with 'col-md-4', but with the side margins it shifts the third teamcard to the row below
    <div className={`col-md-3 ${(styles.teamCard, styles.cardBacking)}`}>
      <img src={properties.imageSource} className={`img-fluid mb-3 ${styles.headshot}`}/>
      <div className={`${(styles.teamCardText)}`}>
        <h5 className={`${styles.staffName}`}>{properties.name}</h5>
        <h6>{properties.jobTitle}</h6>
        <p>{properties.description}</p>
        <a href={properties.socialLink} target="_blank" className={`${styles.linkedInIcon}`}>
          <i className={`bi bi-linkedin ${styles.linkedInIcon}`}></i>
		  <span className={`${styles.linkedInIconText}`}>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
