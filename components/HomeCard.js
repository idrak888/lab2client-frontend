import React from 'react'
import styles from '@/styles/Home.module.css';

export default function HomeCard({ image, title, description }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardImage} style={{
                backgroundImage: `url(${image})`
            }}></div>
            <div className={styles.cardDescription}>
                <p className={styles.textTitle}> {title}</p>
                <p className={styles.textBody}>{description}</p>
            </div>
        </div>
    )
}
