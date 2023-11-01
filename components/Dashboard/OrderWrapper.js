import React, { useState } from 'react'
import styles from '/styles/Dashboard.module.css';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { loadStripe } from "@stripe/stripe-js";

// this is an "order" component that appears on the dashboard of the user

export default function OrderWrapper({ type, information, date, status, user }) {
    let [btnText, setBtnText] = useState("Send Message");


    //Initialize Stripe promise and assigning the result of getStripe() function to it
    let stripePromise = null

    /* Function to get the Stripe instance and update the value of stripePromise
        -purpose: ensure that the Stripe library is loaded asynchronously when the component mounts. 
            This can help improve the performance by not blocking the initial render
            while waiting for the Stripe library to load. */
	const getStripe = () => {
		if(!stripePromise) {
			stripePromise = loadStripe("pk_test_51NB2f5L5vejuzwJ3crZY5PSOpeBZBJRrrNbVSCy1z93K2fgotOer5V9dgRSUOxwMOK55dP0BUMho8P6LJCHN2cZi00XdlifDJq")
		}
		return stripePromise
	}

	getStripe().then(stripe => {
        
    });


    // Function to handle form submission
    const handleSubmit = e => {
        e.preventDefault();

        setBtnText("Sending...");
        emailjs.sendForm('service_lpvotxr', 'template_mj0te9o', e.target, 'mfkRcU_Qi3LuYFzKW').then(() => {
            window.alert("Message sent!");
            window.location.reload();
            setBtnText("Send Message");
        }).catch(e => {
            window.alert("Error sending message");
            setBtnText("Send Message");
        });
    }

    return (
        <div className={`${styles.OrderWrapper}`}>
            <div style={{
                display: "flex",
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <div className="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="contactModalLabel">Send a Message to {information.requester_email}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={e => handleSubmit(e)}>
                                    <div className="mb-3">
                                        <label for="message" className="form-label">Message</label>
                                        <div style={{ display: "none" }}>
                                            <input name='from_name' id="from_name" value={information.receiver} />
                                            <input name='sender_email' id="sender_email" value={user.email} />
                                            <input name='receiver_email' id="receiver_email" value={information.requester_email} />
                                        </div>
                                        <textarea name='message' className="form-control" id="message" rows="10"
                                            placeholder="Enter your message" value={
                                                `Thank you for your interest in ${information.receiver}. \n\nWe have received your order to access our facility and/or equipment on ${date}. \n\nWould you be open to communicate by email to negotiate a quote? Awaiting your response.`
                                            }></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary">{btnText}</button>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <strong>{information.description}</strong>
                    <br />
                    {information.equipment && information.equipment.length > 0 ? information.equipment.map(val => {
                        return <span className={styles.pill}>{val}</span>
                    }) : ""}
                    {information.fields && information.fields.length > 0 ? information.fields.map(field => {
                        return <span className={styles.pill}>{field}</span>
                    }) : ""}
                    {
                        type == "received" ?
                            <p>From: {information.requester_email}</p>
                            : type == "sent" ?
                                <p>Sent to: {information.receiver}</p>
                                : ""
                    }
                </div>
                {
                    type == "received" ?
                        <div style={{ minWidth: 180 }}>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#contactModal" style={{ textDecoration: "none", width: "100%" }} className={`${styles.btnSuccess} btn btn-success`}>Contact</button>
                            <br />
                            <Link href="/payment/invoice" style={{ textDecoration: "none", width: "100%", marginTop: 10 }} className={`${styles.btnSuccess} btn btn-success`}>Generate Invoice</Link>
                        </div>
                        :
                        <div style={{ minWidth: 180 }}>

                        </div>
                }

            </div>
            <hr />
            <div style={{
                display: "flex",
                flex: 1,
                justifyContent: "space-between"
            }}>
                <p>{status}</p>
                <span className='text-muted'>{date}</span>
            </div>
        </div>
    )
}
