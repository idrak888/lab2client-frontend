import React from 'react'
import styles from '/styles/Home.module.css';
import Partners from './Partners';

// this is the Hero section on the homepage

export default function Hero() {
    const [searchKeys, setSearchKeys] = React.useState("");
    const handleChange = event => {
        setSearchKeys(event.target.value);
    }
    return (
        <div className='Hero'>
            <div className={`${styles.outer}`}>
                <div className={`${styles.container}`}>
                    <div className={`${styles.alignCenter} row`}>
                        <h1 className={`${styles.h1}`}>Find Research Equipment that suits your needs</h1>
                        <p>Connecting researchers and innovators with under-utilized research facilitites</p>
                        <form role='form' style={{ display: "block", margin: "auto" }} onSubmit={e => {
                            e.preventDefault();
                            if (searchKeys.trim() != "") {
                                window.location = `/listings?search=${searchKeys}`;
                            }
                        }}>
                            <div className={styles.searchBox}>
                                <i className={`${styles.icon} bi bi-search`}></i>
                                <input
                                    data-testid="search-bar"
                                    type="text"
                                    value={searchKeys}
                                    onChange={handleChange}
                                    className={`${styles.input}`}
                                    placeholder="Find equipment and resources"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <Partners />
            </div>
        </div>
    )
}
