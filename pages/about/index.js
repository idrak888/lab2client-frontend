import React from 'react'
import Head from 'next/head'

export default function About() {
	return (
		<div style={{
			width: "100%",
			maxWidth: 800,
			display: "block",
			margin: "auto",
			padding: 30
		}}>
			<Head>
				<title>Register your Facility | Lab2Client</title>
				<meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<section style={{
					padding: 20
				}}>
					<h2>About Lab2Client</h2>
					<p>Lab2Client is a revolutionary web platform designed to address the challenges faced by university professors and graduate students when conducting experimental tests. Our mission is to connect researchers with available lab space and equipment, making the process of conducting experiments more efficient, accessible, and collaborative.</p>
					<p>At Lab2Client, we understand the importance of hands-on experimentation in the academic and scientific community. We recognize that finding suitable lab space and equipment can often be a time-consuming and frustrating process. That's why we have created a user-friendly platform that simplifies the search and connection between researchers and lab resources.</p>
				</section>
				<section style={{
					padding: 20
				}}>
					<h2>Key Features of Lab2Client</h2>
					<ol>
						<li>
							<strong>Comprehensive Lab Database:</strong> Our platform hosts an extensive database of available lab spaces and equipment, allowing researchers to search and filter based on their specific requirements.
						</li>
						<li>
							<strong>Advanced Search Functionality:</strong> We have developed powerful search algorithms that enable researchers to quickly find the lab space and equipment they need.
						</li>
						<li>
							<strong>Seamless Booking and Communication:</strong> Lab2Client facilitates easy and efficient communication between researchers and lab owners.
						</li>
						<li>
							<strong>Collaborative Environment:</strong> Lab2Client encourages researchers to share their expertise, knowledge, and experiences through our platform.
						</li>
						<li>
							<strong>Verified and Trusted Lab Partners:</strong> Lab2Client ensures the credibility and reliability of lab partners through a robust verification process.
						</li>
					</ol>
				</section>
				<section style={{
					padding: 20
				}}>
					<h2>Join Lab2Client Today</h2>
					<p>Lab2Client is committed to revolutionizing the way experimental tests are conducted in the academic and scientific realms. By connecting researchers with available lab space and equipment, we empower them to focus on their core research while eliminating the hassles associated with finding suitable resources.</p>
					<p>Join Lab2Client today and unlock a world of possibilities for your research endeavors. Together, let's transform the way experiments are conducted and push the boundaries of scientific discovery.</p>
				</section>
			</main>
		</div>
	)
}
