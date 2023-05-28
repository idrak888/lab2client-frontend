import React from 'react'
import styles from '../styles/Order.module.css';

export default function OrderCard({ lab }) {
  return (
    <div className={`${styles.plan}`}>
        <div className={`${styles.inner}`}>
            <span className={`${styles.pricing}`}>
                <span>
                    $250
                </span>
            </span>
            <p className={`${styles.title}`}>Connect with {lab}</p>
            <p className={`${styles.info}`}>You get access to lab resources and equipment suited to your needs, including: </p>
            <ul className={`${styles.features}`}>
                <li>
                    <span className={`${styles.icon}`}>
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                    </span>
                    <span><strong>20</strong> team members</span>
                </li>
                <li>
                    <span className={`${styles.icon}`}>
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                    </span>
                    <span>Plan <strong>team meetings</strong></span>
                </li>
                <li>
                    <span className={`${styles.icon}`}>
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                    </span>
                    <span>File sharing</span>
                </li>
            </ul>
            <div className={`${styles.action}`}>
                <a className={`${styles.button}`} href="#">
                    Proceed to Payment
                </a>
            </div>
        </div>
    </div>
  )
}
