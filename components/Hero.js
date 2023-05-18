import React from 'react'
import styles from '@/styles/Home.module.css';

export default function Hero() {
    const [searchKeys, setSearchKeys] = React.useState("");
    const handleChange = event => {
        setSearchKeys(event.target.value);
    }
    const handleSubmit = () => {
        console.log(searchKeys);
    }
    return (
        <div className='Hero'>
            <div className={`${styles.outer}`}>
                <div className={`${styles.container} container`}>
                    <div className={`${styles.alignCenter} row`}>
                        <div className={`col-md-6`}>
                            <h1 className={`${styles.h1}`}>Connecting Researchers with Lab Space and Expertise</h1>
                            <p>Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities.</p>
                            <div className="d-flex">
                                <input 
                                    type="text"
                                    value={searchKeys}
                                    onChange={handleChange} 
                                    className={`${styles.input} form-control me-2`} 
                                    placeholder="Search by experiments"
                                />
                                <button onClick={handleSubmit} className={`${styles.btn} btn`}><span className={styles.text}>Find Listings</span> <i className="bi bi-arrow-right"></i></button>
                            </div>
                        </div>
                        <div className={`col-md-6`}>
                            <img src="/illustration.png" alt="Illustration" className={`${styles.illustration} img-fluid`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
