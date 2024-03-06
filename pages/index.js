import Head from 'next/head';
import { use, useEffect, useState } from 'react';
import Hero from '../components/Home/Hero';
import emailjs from '@emailjs/browser';
import ReactPlayer from 'react-player'
import Link from 'next/link';
import styles from '/styles/Home.module.css';
import axios from 'axios';

export default function Home() {
    let [btnText, setBtnText] = useState("Send Message");
    let [data, setData] = useState(null);
    let [videoPlaying, setVideoPlaying] = useState(false);

    useEffect(() => {
        axios.get(`https://lab2client.herokuapp.com/getall`).then(doc => {
            setData(doc.data);
        }).catch(e => {
            console.log(e);
        });
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        if (name.trim() !== "" && message.trim() !== "") {
            setBtnText("Sending...");
            emailjs.sendForm('service_lpvotxr', 'template_r98ns7q', e.target, 'mfkRcU_Qi3LuYFzKW').then(() => {
                window.alert("Message received!");
                window.location.reload();
                setBtnText("Send Message");
            }).catch(e => {
                window.alert("Error sending message");
                setBtnText("Send Message");
            });
        }
    }

    return (
        <div style={{ backgroundColor: "#f5f5f5" }}>
            <Head>
                <title>Connecting Researchers with Lab Space and Expertise | Lab2Client</title>
                <meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {/* hero section */}
            <Hero />

            <div style={{ display: "block", margin: "auto", maxWidth: 1000, paddingTop: 100, paddingBottom: 100 }}>
                <h4 style={{ margin: 10 }}>Recently added labs</h4>
                <div className={styles.listingRow}>
                    {data ? data.slice(0, 3).map(listing => {
                        return (
                            <Link
                                href={{
                                    pathname: '/view',
                                    query: { id: listing.id },
                                }}
                                className={styles.card}
                                key={listing.id}
                            >
                                <div className='row'>
                                    <div className='col-sm'>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "200px", // Set your desired fixed height here
                                                objectFit: "cover", // Crop the image to fit the specified dimensions
                                                borderRadius: "25px",
                                                borderRadius: 5
                                            }}
                                            src={listing.research["LOGOS"]}
                                            alt="Research Logo"
                                        />
                                    </div>
                                </div>
                                <div className={`row ${styles.responsiveCard}`} style={{ display: "flex", alignItems: "center" }}>
                                    <div className='col-sm d-flex flex-column'>
                                        <br />
                                        <span style={{ fontSize: 14 }} className={`font-size-6 font-weight-light`}>
                                            {listing.identification.city}, {listing.identification.province}
                                        </span>
                                        <h3 style={{ fontWeight: "bold", fontSize: 16 }}>{listing.identification.research_facillity}</h3>
                                        <div className={`${styles.greyComponent} ${styles.componentWrapper}`} style={{ marginBottom: "1%" }}>
                                            <i className={`bi bi-geo-alt me-1 fs-6`}></i>
                                            <span style={{ fontSize: "12px" }}>
                                                {listing.identification.institution_name}
                                            </span>
                                        </div>
                                        <p style={{ fontSize: 14 }}>{listing.lab_equipment.length} Equipments Offered</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    }) : "loading"}
                </div>
                <div className={`${styles.listingRow} ${styles.row2}`}>
                    {data ? data.slice(3, 6).map(listing => {
                        return (
                            <Link
                                href={{
                                    pathname: '/view',
                                    query: { id: listing.id },
                                }}
                                className={styles.card}
                                key={listing.id}
                            >
                                <div className='row'>
                                    <div className='col-sm'>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "200px", // Set your desired fixed height here
                                                objectFit: "cover", // Crop the image to fit the specified dimensions
                                                borderRadius: "25px",
                                                borderRadius: 5
                                            }}
                                            src={listing.research["LOGOS"]}
                                            alt="Research Logo"
                                        />
                                    </div>
                                </div>
                                <div className={`row ${styles.responsiveCard}`} style={{ display: "flex", alignItems: "center" }}>
                                    <div className='col-sm d-flex flex-column'>
                                        <br />
                                        <span style={{ fontSize: 14 }} className={`font-size-6 font-weight-light`}>
                                            {listing.identification.city}, {listing.identification.province}
                                        </span>
                                        <h3 style={{ fontWeight: "bold", fontSize: 16 }}>{listing.identification.research_facillity}</h3>
                                        <div className={`${styles.greyComponent} ${styles.componentWrapper}`} style={{ marginBottom: "1%" }}>
                                            <i className={`bi bi-geo-alt me-1 fs-6`}></i>
                                            <span style={{ fontSize: "12px" }}>
                                                {listing.identification.institution_name}
                                            </span>
                                        </div>
                                        <p style={{ fontSize: 14 }}>{listing.lab_equipment.length} Equipments Offered</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    }) : "loading"}
                </div>
            </div>

            {/* how we work section */}
            <div style={{ paddingTop: 50, paddingBottom: 80 }}>
                <div className='text-center'>
                    <h2 style={{ fontWeight: "bold", fontSize: 40 }}>How our Platform works</h2>
                    <p className='text-muted'>Lab2Client provides it's clients with a secured network for marketing research equipment</p>
                </div>
                <br />
                <div className='row' style={{ margin: "auto", maxWidth: 1000, marginTop: 50 }}>
                    <div className='col-sm'>
                        <i style={{ fontSize: 30, color: "grey" }} className='bi bi-card-list'></i>
                        <h5 style={{ fontWeight: "bold", marginTop: 20 }}>List your Lab</h5>
                        <p className='text-muted' style={{ fontSize: 14 }}>For lab owners, listing your lab is simple and free. Showcase your lab's features, upload photos, and set your rental terms. Our platform handles the rest, matching you with interested renters and facilitating communication. </p>
                    </div>
                    <div className='col-sm'>
                        <i style={{ fontSize: 30, color: "grey" }} className='bi bi-chat-left'></i>
                        <h5 style={{ fontWeight: "bold", marginTop: 20 }}>Receive Requests</h5>
                        <p className='text-muted' style={{ fontSize: 14 }}>Users can view detailed listings, including photos and rental terms, and easily connect with lab owners through our messaging system. Lab owners can manage their listings and respond to inquiries efficiently. </p>
                    </div>
                    <div className='col-sm'>
                        <i style={{ fontSize: 30, color: "grey" }} className='bi bi-cash'></i>
                        <h5 style={{ fontWeight: "bold", marginTop: 20 }}>Get Paid</h5>
                        <p className='text-muted' style={{ fontSize: 14 }}>Once you've agreed on rental terms, payment is processed securely through our platform. Lab owners provide access to the lab according to the agreed-upon schedule, and renters adhere to the lab's rules.</p>
                    </div>
                </div>
                <br />
                <div className={`row ${styles.demo}`} style={{ margin: "auto", maxWidth: 1000, marginTop: 50 }}>
                    <div className='col-sm'>
                        <h1>Product</h1>
                        <h1>Demo</h1>
                        <h1>Walkthrough</h1>
                        <img style={{ float: "right", marginTop: 10, opacity: 0.5 }} src="https://svgsilh.com/svg/29170.svg" width={50} />
                    </div>
                    <div className='col-sm' data-testid="demo-video">
                        {data ? <div onClick={() => {
                            setVideoPlaying(!videoPlaying);
                        }}><ReactPlayer controls={true} light={<img width={"100%"} src='https://firebasestorage.googleapis.com/v0/b/lab2client.appspot.com/o/Screenshot%202023-12-14%20at%201.17.19%20PM.png?alt=media&token=4e354f45-a696-44fe-8904-16d328fb1254' />} className={styles.player} pip={true} url='https://firebasestorage.googleapis.com/v0/b/lab2client.appspot.com/o/demo.mp4?alt=media&token=0ae2e1b1-ec10-498b-8d37-670363d22753' /></div> : ""}
                    </div>
                </div>
            </div>

            <div style={{ paddingTop: 80, paddingBottom: 80 }}>
                <div className={styles.heading}>
                    <h2 style={{ fontWeight: "bold", fontSize: 40 }}>What our customers are saying</h2>
                    <p className='text-muted'>Have a look at what our most trusted clients have to say about our platform</p>
                </div>
                <div className={styles.reviewRow}>
                    <div className={styles.reviewCard}>
                        <span><i className='bi bi-star-fill'></i><i className='bi bi-star-fill'></i><i className='bi bi-star-fill'></i><i className='bi bi-star-fill'></i><i className='bi bi-star-fill'></i></span>
                        <p style={{ marginTop: 20, marginBottom: 20 }}>"Working with Lab2Client was a game-changer for our research project. The platform was easy to use, and we found the perfect lab in no time. Highly recommend!"</p>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <img width={60} src="https://www.kurin.com/wp-content/uploads/placeholder-square.jpg" />
                            <div style={{ padding: 10 }}>
                                <strong style={{ fontSize: 14 }}>Sarah Johnson</strong>
                                <br />
                                <span style={{ fontSize: 14 }} className='text-muted'>BioSci Research Labs</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.reviewCard}>
                        <span><i className='bi bi-star-fill'></i><i className='bi bi-star-fill'></i><i className='bi bi-star-fill'></i><i className='bi bi-star-fill'></i><i className='bi bi-star-fill'></i></span>
                        <p style={{ marginTop: 20, marginBottom: 20 }}>"As a researcher, I often need access to specialized equipment. Lab2Client made it easy to find labs with the equipment I needed, and the rental process was smooth. Will definitely use again"</p>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <img width={60} src="https://www.kurin.com/wp-content/uploads/placeholder-square.jpg" />
                            <div style={{ padding: 10 }}>
                                <strong style={{ fontSize: 14 }}>Emily Brown</strong>
                                <br />
                                <span style={{ fontSize: 14 }} className='text-muted'>GenoPharm Research</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.reviewCard}>
                        <span><i className='bi bi-star-fill'></i><i className='bi bi-star-fill'></i><i className='bi bi-star-fill'></i><i className='bi bi-star-fill'></i><i className='bi bi-star-fill'></i></span>
                        <p style={{ marginTop: 20, marginBottom: 20 }}>"Listing our lab on Lab2Client was a breeze. We started receiving inquiries right away and have had a great experience renting out our space. Thanks, Lab2Client!"</p>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <img width={60} src="https://www.kurin.com/wp-content/uploads/placeholder-square.jpg" />
                            <div style={{ padding: 10 }}>
                                <strong style={{ fontSize: 14 }}>David Smith</strong>
                                <br />
                                <span style={{ fontSize: 14 }} className='text-muted'>NanoTech Labs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.contactRow}>
                <div style={{ flex: 1, padding: 40 }}>
                    <h2 style={{ fontWeight: "bold", fontSize: 40 }}>Have questions? We'd love to hear from you!</h2>
                    <p className='text-muted'>If you have any inquiries, use the form to submit a question and we'll get back to you</p>
                </div>
                <div className={styles.formWrapper}>
                    <form onSubmit={e => handleSubmit(e)} id='contact'>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{ flex: 1, marginRight: 10 }}>
                                <label htmlFor="name" className="form-label">Name</label>
                                <input style={{ fontSize: 14 }} type="text" name='name' className="form-control" id="name" placeholder="John Doe" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label name="email" className="form-label">Email</label>
                                <input style={{ fontSize: 14 }} type="email" name='email' className="form-control" id="email"
                                    placeholder="example@gmail.com" />
                            </div>
                        </div>
                        <div style={{ marginTop: 20, marginBottom: 20 }}>
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea style={{ fontSize: 14 }} name='message' className="form-control" id="message" rows="4"
                                placeholder="Enter your message"></textarea>
                        </div>
                        <button style={{ float: "right" }} type="submit" className={`${styles.btn}`}>{btnText}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}