import React from 'react'
import styles from '../styles/Dashboard.module.css';
import Link from 'next/link';

export default function OrderWrapper(props) {
    return (
        <Link href="/dashboard" style={{textDecoration: "none"}}>
            <div className={`${styles.OrderWrapper}`}>
                <strong>{props.information.description}</strong>
                <p>{props.status}</p>
                <span className='text-muted'>{props.date}</span>
            </div>
        </Link>
    )
}
