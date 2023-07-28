import React from 'react'
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import styles from '../../styles/Listings.module.css';
import Head from 'next/head';
import FixedBottom from '@/components/FixedBottom';
import Slideshow from '@/components/SlideShow';

export default function View({ query }) {
    let [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://lab2client.herokuapp.com/email/${query.email}`).then(response => response.json())
        .then(data => {
            data = data.filter(item => item.identification.building_name == query.building);    
            setData(data[0]);
        });
    },[]);

  return (
    <div className={styles.viewWrapper}>
        <Head>
            <title>{data ? data.identification.building_name : "loading"} | Lab2Client</title>
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
                <div className='row' style={{marginTop: 20, marginBottom: 20}}>
                    <div style={{backgroundColor: "white", padding: 20}} className='col-md-7'>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <img width={"100%"} style={{maxWidth: 200}} src={data.research["LOGOS"]}/>
                            </div>
                            <div className='col-sm-8'>
                                <h2 style={{fontWeight: "bold"}}>{data.identification.building_name}</h2>
                                <h4>{data.identification.institution_name}</h4>
                                <p>{data.identification.email_identification}</p>
                                <p>{data.identification.street_address}, {data.identification.postal_code}</p>
                                <p>{data.identification.province}</p>
                            </div>
                                <Slideshow data={'@/public/slideshow_pic'}> </Slideshow>
                        </div>
                    </div>
                    <div style={{backgroundColor: "white", padding: 20}} className='col-md-5'>
                        <h4 style={{fontWeight: "bold"}}>Contacttttt</h4>
                        <div className='row'>
                            <div className='col-xs' style={{fontSize: 12, marginTop: 15, color: "grey"}}>Name</div><div className='col-xs'>{data.contact.first_name} {data.contact.last_name}</div>
                        </div>  
                        <div className='row'>
                        <div className='col-xs' style={{fontSize: 12, marginTop: 15, color: "grey"}}>Title</div><div className='col-xs'>{data.contact.title}</div>
                        </div>  
                        <div className='row'>
                            <div className='col-xs' style={{fontSize: 12, marginTop: 15, color: "grey"}}>Email</div><div className='col-xs'>{data.contact.email}</div>
                        </div>  
                        <div className='row'>
                            <div className='col-xs' style={{fontSize: 12, marginTop: 15, color: "grey"}}>Telephone</div><div className='col-xs'>{data.contact.telephone}</div>
                        </div>  
                    </div>
                </div>

                <div className='row' style={{marginTop: 20, marginBottom: 20}}>
                    <div style={{backgroundColor: "white", padding: 20}} className='col-md-7'>
                        <h4 style={{fontWeight: "bold"}}>Research</h4>
                        <p>{data.research.DESCRIPTION_OF_RESEARCH_INFRASTRUCTURE}</p>
                        <p>{data.research.DESCRIPTION_OF_YOUR_FACILITY}</p>
                        <p>{data.research.areas_of_expertise}</p>
                        <p><a href={data.research.website}>{data.research.website}</a></p>
                    </div>
                    <div style={{backgroundColor: "white", padding: 20}} className='col-md-5'>
                        <h4 style={{fontWeight: "bold"}}>Fields of Research</h4>
                        {data.Fields_of_research.fields.map(field => <p>{field}</p>)}
                        <h4 style={{fontWeight: "bold"}}>Sectors</h4>
                        {data.Sectors_of_application.applications.map(app => <p>{app}</p>)}
                    </div>
                </div>

                {/* <div className='row' style={{marginTop: 20, marginBottom: 20}}>
                    <div style={{backgroundColor: "white", padding: 20}} className='col-md-12'>
                        <h4 style={{fontWeight: "bold"}}>Available Equipment</h4>
                        
                    </div>
                </div> */}
            </div>
        }
        <FixedBottom data={data}/>
    </div>
  )
}

View.getInitialProps = async ({ query }) => {  
    return { query };
}