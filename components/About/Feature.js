import React from "react";
import styles from "../../styles/About.module.css";

export default function Feature(properties) {
	return (
        <div className={`${(styles.feature)} ${properties.noBottomBorder}`}>
            <div style={{ flex: 1 }}>
                <strong>{properties.title}</strong>
            </div>
            <div style={{ flex: 1 }}>
                <p>{properties.description}</p>
            </div>
        </div>
    )};