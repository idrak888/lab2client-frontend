import React from 'react'
import styles from '/styles/Auth.module.css';
import Head from 'next/head';

export default function index() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Register your Facility | Lab2Client</title>
                <meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 style={{fontWeight: "bold", fontSize: 30, textAlign: "center"}}>Registration Form</h1>
            <br/>
            <form action="#" method="post" enctype="multipart/form-data">
                <div className={styles.formGroup}>
                    <label for="picture">Upload Picture:</label>
                    <input type="file" id="picture" name="picture" accept="image/*" />
                </div>

                <div className={styles.formGroup}>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className={styles.formGroup}>
                    <label for="address">Address:</label>
                    <input type="text" id="address" name="address" required />
                </div>

                <div className={styles.formTable}>
                    <div className={styles.formGroup}>
                        <label>City*</label>
                        <div><input type="text" name="city" required /></div>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Province*</label>
                        <div>
                            <select name="province" required>
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
                        <div><input type="text" name="postal_code" required /></div>
                    </div>
                </div>

                <h2 style={{fontWeight: "bold", fontSize: 24, marginTop: 20}}>Contact Information</h2>

                <div className={styles.formGroup}>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className={styles.formGroup}>
                    <label for="title">Title:</label>
                    <input type="text" id="title" name="title" required />
                </div>

                <div className={styles.formGroup}>
                    <label for="contact-email">Email:</label>
                    <input type="email" id="contact-email" name="contact-email" required />
                </div>

                <div className={styles.formGroup}>
                    <label for="telephone">Telephone:</label>
                    <input type="tel" id="telephone" name="telephone" required />
                </div>

                <div className={styles.formGroup}>
                    <label for="description">Description:</label>
                    <textarea id="description" name="description"></textarea>
                </div>

                <div className={styles.formGroup}>
                    <label for="research">Field of Research:</label>
                    <div id="research-container">
                        <input type="text" id="research" name="research[]" required />
                    </div>
                    <button className="btn" type="button" id="add-research">Add More</button>
                </div>

                <div className={styles.formGroup}>
                    <label for="sector">Sector:</label>
                    <div id="sector-container">
                        <input type="text" id="sector" name="sector[]" required />
                    </div>
                    <button className="btn" type="button" id="add-sector">Add More</button>
                </div>

                <button className={styles.btn} type="submit">Submit</button>
            </form>
        </div>
    )
}
