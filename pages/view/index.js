import React from 'react'
import { useEffect, useState } from 'react';
import Loader from '/components/Layout/Loader';
import styles from '/styles/Listings.module.css';
import Link from 'next/link';
import Head from 'next/head';
import FixedBottom from '/components/Orders/FixedBottom';

export default function View({ query }) {
    let [data, setData] = useState(null);
    let [user, setUser] = useState(null);
    let [imageLoading, setImageLoading] = useState(false);
    let [equipmentShowing, setEquipmentShowing] = useState(null);
    let [equipmentList, setEquipmentList] = useState([]);
    let [equipmentIndex, setEquipmentIndex] = useState(0);
    
    useEffect(() => {
        const userStr = localStorage.getItem("user");
        const equipmentList = localStorage.getItem("equipmentList");
        if (userStr) {
            const parsed = JSON.parse(userStr);
            setUser(parsed);
        }
        fetch(`https://lab2client-7fd38de3875a.herokuapp.com/getspecific/${query.id}`).then(response => response.json())
            .then(data => {
                setData(data);
                if (data.lab_equipment.length > 0) {
                    setEquipmentShowing(data.lab_equipment[0]);
                }

                if (equipmentList) {
                    const parsedEquipmentList = JSON.parse(equipmentList);
                    const filteredEquipment = parsedEquipmentList.filter(equipment => equipment.parentId === data.user_unique_id);
                    setEquipmentList(filteredEquipment);
                    console.log(filteredEquipment);
                }
                console.log(data);
            });
    }, []);

    return (
        <div className={styles.viewWrapper}>
            <Head>
                <title>{data ? data.identification.research_facillity : "loading"} | Lab2Client</title>
                <meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav style={{ width: "100%" }} className={`${styles.header} navbar navbar-expand-lg navbar-dark fixed-top`}>
                <div className="container">
                    <div id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => window.history.back()}><i className='bi bi-arrow-left-short'></i> Go Back</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {
                !data ? <Loader /> :
                    <div className='container' style={{maxWidth: 1200, padding: 20}}>
                        <div className={`row`} id='overview'>
                            <div className='col-md-12 p-0'>
                                <div style={{ backgroundColor: "transparent" }} className={`${styles.labdetails}`}>

                                    {/* Institution Title */}
                                    <h2 className={`${styles.institutiontitle}`}>
                                        {data.identification.research_facillity}
                                    </h2>

                                    {/* Lab Name and Location Information */}
                                    <h6 className={`${styles.locationinfo}`}>
                                        <i className="bi bi-mortarboard"></i> {data.identification.institution_name} <i className='bi bi-geo-alt' style={{ marginLeft: "2%" }}></i> {data.identification.city}, {data.identification.province}
                                    </h6>

                                    {/* Large Lab Image */}
                                    <div className={styles.imageWrapper}>
                                        <img
                                            src={data.research.LOGOS}
                                            className={`${styles.labimage}`}
                                            alt="Laboratory"
                                        />
                                        <video
                                            // src={data.research.VIDEO_URL}
                                            src={data.research.lab_video}
                                            className={`${styles.labvideo}`}
                                            controls
                                            autoPlay="true"
                                            alt="Laboratory Video"
                                        />
                                    </div>

                                    {/* Lab Owner PFP and Info */}
                                    <div className={`${styles.labownerinfo}`}>
                                        <div className={`${styles.labdetailsleft}`}>
                                            <div>
                                                <h4 className={`${styles.labhosttitle}`}>Lab Hosted by {data.contact.first_name} {data.contact.last_name}</h4>
                                                <h6 className={`${styles.labhostsubtitle}`}>{data.contact.title} @ {data.identification.research_facillity}</h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <hr />

                        {/* About and Fields of Research */}
                        <div className={`row ${styles.sectionMargins}`} id='about'>

                            {/* About */}
                            <div className={`col-md-6 ${styles.sectionContentPadding}`}>
                                <h4 style={{ fontWeight: "bold" }}>About</h4>
                                <p>{data.research.DESCRIPTION_OF_RESEARCH_INFRASTRUCTURE}</p>
                                <p>{data.research.DESCRIPTION_OF_YOUR_FACILITY}</p>
                                <p>{data.research.areas_of_expertise}</p>
                                <p><a href={data.research.website}>{data.research.website}</a></p>
                            </div>

                            {/* Research Fields */}
                            <div className={`col-md-6 ${styles.sectionContentPadding} ${styles.separationBar}`}>
                                <h4 style={{ fontWeight: "bold" }}>Fields of Research</h4>
                                <ul>
                                    {data.Fields_of_research.fields.map(field => <li>{field}</li>)}
                                </ul>
                            </div>
                        </div>


                        {/* Available Equipment */}
                        <div className={`row ${styles.sectionMargins}`} id='equipment'>
                            <h4 className={`m-0 fw-bold pb-3 ${styles.sectionContentPadding}`}> Available Equipment 
                                <span className={`${styles.availableEquipmentVariable}`}> ({data.lab_equipment.length}) </span>
                            </h4>
                            {/* Equipment Dropdown Section */}
                            <div className={`col-md-6 pt-0 ${styles.sectionContentPadding} ${styles.equipmentScrollBar}`}>
                                {data.lab_equipment.map((doc, index) => {
                                    return (
                                        <div onClick={() => {
                                            setEquipmentShowing(doc)
                                            setEquipmentIndex(index);
                                            console.log(index);
                                            setImageLoading(true);
                                            setTimeout(() => {
                                                setImageLoading(false);
                                            }, 1500);
                                        }} className={styles.equipmentItem}>
                                            <strong style={{fontSize: 18}}>{doc.name}</strong>
                                            {equipmentShowing == doc ? 
                                            <div style={{ position: 'relative' }}><i className={`bi bi-chevron-up`} style={{ position: 'absolute', top: -25, right: 0 }}></i></div> : 
                                            <div style={{ position: 'relative' }}><i className={`bi bi-chevron-down`} style={{ position: 'absolute', top: -25, right: 0 }}></i></div>}
                                            {equipmentShowing == doc ? <p style={{marginTop: 10}}>
                                                {doc.description.split("***").map((item, index) => (
                                                    <div>
                                                        {index == 0 ? <h4>Description</h4> : index == 1 ? <h4>Applications in Automobile</h4> : index == 2 ? <h4>Specifications</h4> : index == 3 ? <h4>Link to website</h4> : <h4>Publications</h4>}
                                                        <p key={index}>{item}</p>
                                                    </div>
                                                ))}
                                            </p> : ""}
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Right Side Corresponding Image */}

                            { equipmentList.length > 0 ? <div style={{
                                display: "flex",
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center"
                            }} className={`col-md-6 ${styles.sectionContentPadding}`}>
                                {equipmentShowing != null ? 
                                    !imageLoading ? 
                                    <div>
                                        <Link href={{
                                            pathname: '/view/equipment',
                                            query: { id: equipmentList[equipmentIndex].id }
                                        }} className={styles.equipmentImageContainer}>
                                            <img width={"100%"} src={equipmentShowing.image}/>
                                            <span>Click to view details</span>
                                        </Link>
                                    </div> : <Loader />
                                : "No Equipments"}
                            </div> : <></>}
                        </div>
                    </div>
            }
            {data ? <FixedBottom user={user} data={data} /> : ""}
        </div>
    )
}

View.getInitialProps = async ({ query }) => {
    return { query };
}