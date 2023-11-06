import React from 'react'
import { useEffect, useState } from 'react';
import Loader from '/components/Layout/Loader';
import styles from '/styles/Listings.module.css';
import Head from 'next/head';
import FixedBottom from '/components/Orders/FixedBottom';
import Select from 'react-select';

export default function View({ query }) {
    let [data, setData] = useState(null);
    let [user, setUser] = useState(null);

    useEffect(() => {
        const userStr = localStorage.getItem("user");
        if (userStr) {
			const parsed = JSON.parse(userStr);
			setUser(parsed);
		}
        fetch(`https://lab2client.herokuapp.com/getspecific/${query.id}`).then(response => response.json())
        .then(data => {
            setData(data);
            console.log(data);
        });
    },[]);

    

  return (
    <div className={styles.viewWrapper}>
        <Head>
            <title>{data ? data.identification.research_facillity : "loading"} | Lab2Client</title>
            <meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav style={{width: "100%"}} className={`${styles.header} navbar navbar-expand-lg navbar-dark`}>
            <div className="container">
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:history.back()"><i className='bi bi-arrow-left-short'></i> Back to Search</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        {
            !data ? <Loader/> : 
            <div className='container'>
                <div className='row'>
                    <div style={{backgroundColor: "white", padding: 20}} className='col-md-12'>                        
                    <div className={`lab-details ${styles.labdetails}`}>
                        <h2 className={`${styles.institutiontitle}`}>
                            {data.identification.institution_name}
                        </h2>
                        <h6 className={`${styles.locationinfo}`}>
                        <i class="bi bi-mortarboard"></i> {data.identification.research_facillity} <i className='bi bi-geo-alt' style={{marginLeft: "2%"}}></i> {data.identification.city}, {data.identification.province}
                        </h6>
                        <div className={styles.imageWrapper}>
                            <img
                                src={data.research.LOGOS}
                                className={`${styles.labimage}`}
                                alt="Laboratory"
                            />
                        </div>
                        <div className={`${styles.labownerinfo}`}>
                        <div className={styles.profileImageContainer}>
                                <img
                                    src="https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
                                    alt=""
                                    className={styles.profileImage}
                                />
                        </div>
                        <div className={`${styles.labdetailsleft}`}>        
                                <h4 className={`${styles.labhosttitle}`}>Lab Hosted by John Smith</h4>
                                <h7 className={`${styles.labhostsubtitle}`}>Research Director @ {data.identification.research_facillity}</h7>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* About and Fields of Research */}
                <div className={`row ${styles.sectionMargins}`}>

                    {/* About */}
                    <div className={`col-md-6 ${styles.sectionContentPadding}`}>
                        <h4 style={{fontWeight: "bold"}}>About</h4>
                        <p>{data.research.DESCRIPTION_OF_RESEARCH_INFRASTRUCTURE}</p>
                        <p>{data.research.DESCRIPTION_OF_YOUR_FACILITY}</p>
                        <p>{data.research.areas_of_expertise}</p>
                        <p><a href={data.research.website}>{data.research.website}</a></p>
                    </div>

                    {/* Research Fields */}
                    <div className={`col-md-6 ${styles.sectionContentPadding} ${styles.separationBar}`}> 
                        <h4 style={{fontWeight: "bold"}}>Fields of Research</h4>
                        <ul>
                            {data.Fields_of_research.fields.map(field => <li>{field}</li>)}
                        </ul>
                    </div>
                </div>


                {/* Available Equipment */}
                <div className={`row ${styles.sectionMargins}`}>
                    <h4 className={`m-0 fw-bold pb-0 ${styles.sectionContentPadding}`}> Available Equipment </h4>

                    {/* Equipment Dropdown Section */}
                    <div className={`col-md-6 ${styles.sectionContentPadding}`}>

                    </div>

                    {/* Right Side Corresponding Image */}
                    <div className={`col-md-6 ${styles.sectionContentPadding}`}>

                    </div>
                </div> 
            </div>
        }
        {data ? <FixedBottom user={user} data={data}/> : ""}
    </div>
  )
}

View.getInitialProps = async ({ query }) => {  
    return { query };
}