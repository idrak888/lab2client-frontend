import Head from 'next/head';
import { useEffect, useState } from 'react';
import Hero from '/components/Home/Hero';
import HomeCard from '/components/Home/HomeCard';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import GetStarted from '/components/Home/GetStarted';
import Partners from '../components/Home/Partners';

export default function Home() {
    let [btnText, setBtnText] = useState("Send Message");

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
        <div>
            <Head>
                <title>Connecting Researchers with Lab Space and Expertise | Lab2Client</title>
                <meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* hero section */}
            <Hero />

            {/* partners */}
            <Partners/>

            {/* about us section */}
            <section className="bg-light py-5" style={{ paddingTop: 50 }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h3 className="text-center mb-4">Trusted by hundreds of Institutions</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <Link href="/listings"><HomeCard image="/labphoto1.jpeg" title="Find Available Labs" description="Easily search and discover labs that meet your specific research needs." /></Link>
                                </div>
                                <div className="col-md-6">
                                    <Link href="/auth/register"><HomeCard image="/labphoto2.jpeg" title="Offer Lab Space" description="Lab PIs can sign up and offer their lab space to other researchers, generating revenue." /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* get started section */}
            <GetStarted />

            {/* contact us section */}
            <section className="py-5" id="contact">
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
            </section>

        </div>
    )
}