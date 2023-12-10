import Head from 'next/head';
import { useEffect, useState } from 'react';
import Hero from '/components/Home/Hero';
import emailjs from '@emailjs/browser';
import ReactPlayer from 'react-player'
import Partners from '../components/Home/Partners';
import Link from 'next/link';
import styles from '/styles/Home.module.css';

export default function Home() {
    let [btnText, setBtnText] = useState("Send Message");
    let [data, setData] = useState(null);
    let [videoPlaying, setVideoPlaying] = useState(false);

    useEffect(() => {
        fetch(`https://lab2client.herokuapp.com/getall`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
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
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* hero section */}
            <Hero />
            
            <div style={{ display: "block", margin: "auto", maxWidth: 1100, paddingTop: 100, paddingBottom: 100 }}>
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
                                        <span style={{ fontSize: "12px" }} className={`font-size-6 font-weight-light`}>
                                            {listing.identification.city}, {listing.identification.province}
                                        </span>
                                        <h3 className={styles.title}>{listing.identification.research_facillity}</h3>
                                        <div className={`${styles.greyComponent} ${styles.componentWrapper}`} style={{ marginBottom: "1%" }}>
                                            <i className={`bi bi-geo-alt me-1 fs-6`}></i>
                                            <span style={{ fontSize: "12px" }}>
                                                {listing.identification.institution_name}
                                            </span>
                                        </div>
                                        <p>{listing.lab_equipment.length} Equipments Offered</p>
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
                                        <span style={{ fontSize: "12px" }} className={`font-size-6 font-weight-light`}>
                                            {listing.identification.city}, {listing.identification.province}
                                        </span>
                                        <h3 className={styles.title}>{listing.identification.research_facillity}</h3>
                                        <div className={`${styles.greyComponent} ${styles.componentWrapper}`} style={{ marginBottom: "1%" }}>
                                            <i className={`bi bi-geo-alt me-1 fs-6`}></i>
                                            <span style={{ fontSize: "12px" }}>
                                                {listing.identification.institution_name}
                                            </span>
                                        </div>
                                        <p>{listing.lab_equipment.length} Equipments Offered</p>
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
                <br/>
                <div className='row' style={{ margin: "auto", maxWidth: 1100, marginTop: 50 }}>
                    <div className='col-sm'>
                        <i style={{ fontSize: 30, color: "grey" }} className='bi bi-card-list'></i>
                        <h5 style={{ fontWeight: "bold", marginTop: 20 }}>List your Lab</h5>
                        <p className='text-muted' style={{fontSize: 14}}>Sed ut perspiciatis unde iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    </div>
                    <div className='col-sm'>
                        <i style={{ fontSize: 30, color: "grey" }} className='bi bi-chat-left'></i>
                        <h5 style={{ fontWeight: "bold", marginTop: 20 }}>Receive Requests</h5>
                        <p className='text-muted' style={{fontSize: 14}}>Sed ut perspiciatis unde iste natus error  voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    </div>
                    <div className='col-sm'>
                        <i style={{ fontSize: 30, color: "grey" }} className='bi bi-cash'></i>
                        <h5 style={{ fontWeight: "bold", marginTop: 20 }}>Get Paid</h5>
                        <p className='text-muted' style={{fontSize: 14}}>Sed ut perspiciatis unde iste natu sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    </div>
                </div>
                <br/>
                <div className={`row ${styles.demo}`} style={{ margin: "auto", maxWidth: 1100, marginTop: 50 }}>
                    <div className='col-sm'>
                        <h1>Product</h1>
                        <h1>Demo</h1>
                        <h1>Walkthrough</h1>
                        <h1><i className='bi bi-arrow-right'></i></h1>
                    </div>
                    <div className='col-sm'>
                        {data ? <div onClick={() => {
                            setVideoPlaying(!videoPlaying);
                        }}><ReactPlayer className={styles.player} playing={videoPlaying} url='https://firebasestorage.googleapis.com/v0/b/lab2client.appspot.com/o/demo.mp4?alt=media&token=0ae2e1b1-ec10-498b-8d37-670363d22753' /></div> : ""}
                    </div>
                </div>
            </div>

            {/* contact us section */}
            {/* <section className="py-5" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="text-center mb-4">
                                <h3 className="mb-2">Contact Us</h3>
                                <p className="text-muted">Have any questions or inquiries? Feel free to reach out to us.</p>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <form onSubmit={e => handleSubmit(e)}>
                                        <div className="mb-3">
                                            <label for="name" className="form-label">Your Name</label>
                                            <input type="text" name='name' className="form-control" id="name" placeholder="Enter your name" />
                                        </div>
                                        <div className="mb-3">
                                            <label name="email" className="form-label">Your Email</label>
                                            <input type="email" name='email' className="form-control" id="email"
                                                placeholder="Enter your email address" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="message" className="form-label">Message</label>
                                            <textarea name='message' className="form-control" id="message" rows="4"
                                                placeholder="Enter your message"></textarea>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">{btnText}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

        </div >
    )
}