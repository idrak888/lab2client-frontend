import React, { useEffect, useState } from 'react'
import styles from '/styles/Payment.module.css';
import Head from 'next/head';

export default function Invoice() {
    let [loading, setLoading] = useState(false);

    return (
        <div>
            <Head>
                <title>Generate a Invoice | Lab2Client</title>
                <meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.container}>
                <div className={styles.inner}>
                    <form action="#" method="post" enctype="multipart/form-data">
                        <h3 style={{ fontWeight: "bold", fontSize: 22, marginTop: 20, marginBottom: 20 }}>Generate an Invoice for example@gmail.com</h3>
                        
                        <div className={styles.formGroup}>
                            <label for="payee">Payee</label>
                            <input type="text" id="payee" name="payee" readOnly value={"example@gmail.com"}/>
                        </div>

                        <div className={styles.formGroup}>
                            <label for="institution_name">Vendor Institution Name</label>
                            <input type="text" id="institution_name" name="institution_name" readOnly value={"Waterloo Research Facility"}/>
                        </div>

                        <hr />

                        <div className={styles.formGroup}>
                            <label for="description">Order Description</label>
                            <input type="text" id="description" name="description" readOnly value={"I need access to your equipment in order to perform a thermal expansion experiment for about 1 week"}/>
                        </div>

                        <div className={styles.formGroup}>
                            <label for="amount">Amount in C$</label>
                            <input type="text" id="amount" name="amount" required />
                            <span className='text-muted'>Please note that a 10% fee applies</span>
                        </div>

                        <button disabled={loading} className={styles.btn} type="submit">{loading ? "loading..." : "Submit"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
