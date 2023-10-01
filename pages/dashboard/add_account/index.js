import React, { useEffect, useState } from 'react'
import styles from '/styles/Auth.module.css';
import Head from 'next/head';
import axios from 'axios';

export default function index() {
	let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(false);

    useEffect(() => {
		const user = localStorage.getItem("user");
        if (user) {
			const parsed = JSON.parse(user);
			setUser(parsed);
		}
	}, []);

    const submit = e => {
        e.preventDefault();
        setLoading(true);

        const uid = user.uid;
        const value = document.getElementById("institution_name").value;

        // axios.post(`https://lab2client.herokuapp.com/create`, {
        //     user_unique_id: uid,
        //     value
        // }).then(doc => {
        //     console.log(doc);
        //     setLoading(false);
        //     window.location = "/dashboard";
        // }).catch(e => {
        //     console.log(e);
        //     setLoading(false);
        // });
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Add New Payment Account | Lab2Client</title>
                <meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1 style={{fontWeight: "bold", fontSize: 30, textAlign: "center"}}>New Payment Account</h1>
                <form action="#" method="post" enctype="multipart/form-data">
                    <div className={styles.inner}>
                        <h2 style={{fontWeight: "bold", fontSize: 24, marginTop: 20}}>Information 1</h2>

                        <div className={styles.formGroup}>
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        <div className={styles.formTable}>
                            <div className={styles.formGroup}>
                                <label>Province*</label>
                                <div>
                                    <select id='province' name="province" required>
                                        <option value="">Select Province</option>
                                        <option value="AB">Alberta</option>
                                        <option value="BC">British Columbia</option>
                                        <option value="MB">Manitoba</option>
                                        <option value="NB">New Brunswick</option>
                                        <option value="NL">Newfoundland and Labrador</option>
                                        <option value="NS">Nova Scotia</option>
                                        <option value="ON">Ontario</option>
                                        <option value="PE">Prince Edward Island</option>
                                        <option value="QC">Quebec</option>
                                        <option value="SK">Saskatchewan</option>
                                        <option value="NT">Nordivwest Territories</option>
                                        <option value="NU">Nunavut</option>
                                        <option value="YT">Yukon</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Postal Code*</label>
                                <div><input type="text" id='postal_code' name="postal_code" required /></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.inner}>
                        <h2 style={{fontWeight: "bold", fontSize: 24, marginTop: 30}}>Information 2</h2>

                        <div className={styles.formGroup}>
                            <label for="telephone">Telephone</label>
                            <input type="tel" id="telephone" name="telephone" required />
                        </div>

                        <button disabled={loading} onClick={e => submit(e)} className={styles.btn} type="submit">{loading ? "loading..." : "Submit"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
