import React from 'react';
import styles from '../styles/Listings.module.css';
import Link from 'next/link';
import { checkout } from '@/pages/payment';


const FixedBottom = ({ data }) => {
  return (
    <footer className={`${styles.FixedBottom} navbar navbar-dark fixed-bottom`}>
      <div className="container">
        <strong style={{color: "white"}}>{data ? data.identification.research_facillity : "loading"}</strong>
        <button className={`btn ${styles.btn}`} onClick={(() => checkout({
          lineItems: [
            { price: "price_1NB2oJL5vejuzwJ3rFrAXtpZ", quantity: 1 }
          ]
        }))}>Place an Order</button>
      </div>
    </footer>
  );
};

export default FixedBottom;
