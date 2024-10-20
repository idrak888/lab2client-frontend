import React from 'react'
import { useEffect, useState } from 'react';
import Loader from '/components/Layout/Loader';
import styles from '/styles/Equipment.module.css';
import Head from 'next/head';
import FixedBottom from '/components/Orders/FixedBottom';

export default function Equipment({ query }) {
    let [data, setData] = useState(null);
    let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(true);
    
    const fakeEquipment = [
		{
			name: "Transmission Electron Microscope (TEM)",
			image: "https://www.uochb.cz/upload/files/56/9f/569fd58f39320c292310860ccdeb5cb01bbc8e25.jpg",
			description: "This advanced microscope allows researchers to examine the internal structure of materials at a high resolution, providing insights into crystal structure, defects, and interfaces",
			location: "Toronto, ON",
			institution: "University of Toronto",
			id: 1
		}	
		,{
			name: "Scanning Electron Microscope (SEM)",
			image: "https://www.jeol.com/assets/img/products/science/sem/JSM-IT800HL.jpg",
			description: "This advanced microscope allows researchers to examine the microstructure of materials at a high resolution, providing insights into surface morphology, grain structure, and defects",
			location: "Toronto, ON",
			institution: "University of Toronto",
			id: 2
		}, {
			name: "Digital Torsion Testing Machine",
			image: "https://sunlabtech.com/wp-content/uploads/2018/08/Digital-Torsion-Testing-Machine-1.jpg",
			description: "Suitable for Torsion and twist tests on various metal rods and flats. Torque measurement by torque cell. One range with a high resolution throughout the range. Geared motor to apply the torque to specimen through gear box. Measurement of Angle of Twist by Rotary Encoder. • Display of Torque and Angle of twist on LCD display provided on Data Acquisition System. • Facility for connecting the DAS Panel to PC • Accuracy of torque measurement ± 1% in the range from 4% to 100% of machine capacity.",
			location: "Toronto, ON",
			institution: "University of Toronto",
			id: 3
		}, {
			name: "Universal Testing Machine",
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Universal_testing_machine.jpg/220px-Universal_testing_machine.jpg",
			description: "A machine used to perform tension, compression, bending, and other mechanical tests on materials to determine their mechanical properties such as strength, elasticity, and toughness",
			location: "Toronto, ON",
			institution: "University of Toronto",
			id: 4
		},{
			name: "X-Ray Diffractometer (XRD)",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCK-Y2y5UdOdiDCDJFde9IBLNo44ZMZ4pjSw&s",
			description: "This instrument is used to determine the crystallographic structure of materials, providing information on the arrangement of atoms in a material",
			location: "Toronto, ON",
			institution: "University of Toronto",
			id: 5
		}, {
			name: "Atomic Force Microscope (AFM)",
			image: "https://www.royce.ac.uk/content/uploads/2017/08/Atomic-Force-Microscopy-1000x740.jpg",
			description: "This microscope provides high-resolution images of surfaces at the atomic scale, allowing researchers to study surface roughness, topography, and other properties",
			location: "Toronto, ON",
			institution: "University of Toronto",
			id: 6
		}];

    useEffect(() => {
        const userStr = localStorage.getItem("user");
        if (userStr) {
            const parsed = JSON.parse(userStr);
            setUser(parsed);
        }
        
        // Fetch the equipment details using query.id

        //temp:
        const id = query.id;
        const equipment = fakeEquipment.find(e => e.id == id);
        setData(equipment);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className={styles.viewWrapper}>
            <Head>
                <title>{data ? data.name : "loading"} | Lab2Client</title>
                <meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav style={{ width: "100%" }} className={`${styles.header} navbar navbar-expand-lg navbar-dark fixed-top`}>
                <div className="container">
                    <div id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/listings"><i className='bi bi-arrow-left-short'></i> Go Back</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {
                !loading ? 
                <div className={styles.inner}>
                    <div className={styles.imageWrapper}>
                        <img src={data.image} alt={data.name} className={styles.image} />
                    </div>
                    <div className={styles.details}>
                        <h2>{data.name}</h2>
                        <p>{data.description}</p>
                        <p><b>Offered by:</b> {data.institution}</p>
                        <p><b>Location:</b> {data.location}</p>
                    
                        <div className={styles.additionalInfo}>
                            <h4>Specifications</h4>
                            <ul>
                                <li><b>Resolution:</b> 0.1 nm</li>
                                <li><b>Voltage:</b> 200 kV</li>
                                <li><b>Magnification:</b> 50x to 1,000,000x</li>
                            </ul>
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="https://www.example.com/manual" target="_blank" rel="noopener noreferrer">User Manual</a></li>
                                <li><a href="https://www.example.com/specs" target="_blank" rel="noopener noreferrer">Technical Specifications</a></li>
                                <li><a href="https://www.example.com/tutorial" target="_blank" rel="noopener noreferrer">Tutorial Videos</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                :
                <div>   
                    <Loader />
                </div>
            }
        </div>
    )
}

Equipment.getInitialProps = async ({ query }) => {
    return { query };
}