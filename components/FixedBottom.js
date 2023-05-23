import React from 'react';
import styles from '../styles/Listings.module.css';
import Link from 'next/link';
import { checkout } from '@/pages/payment';


const FixedBottom = ({ data }) => {
  return (
    <footer className={`${styles.FixedBottom} navbar navbar-dark fixed-bottom`}>
      <div className="container">
        <strong style={{color: "white"}}>{data ? data.identification.research_facillity : "loading"}</strong>
        <button onClick={(()=>checkout({devices: [{price: "price_1NAiTKEg2vlCH9pN9k9bYfbw"}]}))}>Place Order</button>
      </div>
    </footer>
  );
};

export default FixedBottom;
