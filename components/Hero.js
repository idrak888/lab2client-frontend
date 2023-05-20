import React from 'react'
import styles from '@/styles/Home.module.css';
import Link from "next/link";

export default function Hero() {
    const [searchKeys, setSearchKeys] = React.useState("");
    const handleChange = event => {
        setSearchKeys(event.target.value);
    }
    return (
        <div className='Hero'>
            <div className={`${styles.outer}`}>
                <div className={`${styles.container} container`}>
                    <div className={`${styles.alignCenter} row`}>
                        <div className={`col-md-7`}>
                            <h1 className={`${styles.h1}`}>Connecting Researchers with Lab Space and Expertise</h1>
                            <p>Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities.</p>
                            <div className="d-flex">
                                <input 
                                    type="text"
                                    value={searchKeys}
                                    onChange={handleChange} 
                                    className={`${styles.input} form-control me-2`} 
                                    placeholder="Find equipment and resources"
                                />
                                <Link className={`${styles.btn} btn`} href={searchKeys.trim() != "" ? { pathname: '/listings', query: { search: searchKeys } } : "#"}><span className={styles.text}>Search</span> <i className="bi bi-arrow-right" style={{marginLeft: 3, marginRight: 3}}></i></Link>
                            </div>
                        </div>
                        <div className={`col-md-5`}>
                            <img src="/illustration.png" alt="Illustration" className={`${styles.illustration} img-fluid`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
