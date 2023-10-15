import React from "react";
import Head from "next/head";
import styles from '../../styles/About.module.css';
import TeamCard from "../../components/About/TeamCard";

export default function TeamPage() {
	return (
		<div style={{
			width: "100%",
			maxWidth: 1000,
			display: "block",
			margin: "auto",
			padding: 30
		}}>
			<Head>
				<title>Meet the Team | Lab2Client</title>
				<meta
					name="description"
					content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div style={{ display: "flex", flexDirection: "row", marginTop: 25 }}>
				<div style={{ flex: 1, paddingTop: 50 }}>
					<h2 style={{ fontWeight: "bold" }}>About Lab2Client</h2>
					<p>Lab2Client is a revolutionary web platform designed to address the challenges faced by university professors and graduate students when conducting experimental tests. Our mission is to connect researchers with available lab space and equipment, making the process of conducting experiments more efficient, accessible, and collaborative.</p>
					<p><strong>Out mission: </strong>At Lab2Client, we understand the importance of hands-on experimentation in the academic and scientific community. We recognize that finding suitable lab space and equipment can often be a time-consuming and frustrating process. That's why we have created a user-friendly platform that simplifies the search and connection between researchers and lab resources.</p>
				</div>
				<div style={{ flex: 1, padding: 20 }}>
					<img style={{ width: "100%" }} src="/headshots/Screenshot.png" />
				</div>
			</div>

			<div style={{ padding: 20, marginTop: 50 }}>
				<h2 style={{ textAlign: "center", fontWeight: "bold" }}>Key Features of Lab2Client</h2>
				<div className={styles.feature}>
					<div style={{ flex: 1 }}>
						<strong>Comprehensive Lab Database</strong>
					</div>
					<div style={{ flex: 1 }}>
						<p>
							Our platform hosts an extensive database of available lab
							spaces and equipment, allowing researchers to search and filter based on their specific
							requirements.
						</p>
					</div>
				</div>
				<div className={styles.feature}>
					<div style={{ flex: 1 }}>
						<strong>Advanced Search Functionality</strong>
					</div>
					<div style={{ flex: 1 }}>
						<p>
							We have developed powerful search algorithms that enable
							researchers to quickly find the lab space and equipment they need.
						</p>
					</div>
				</div>
				<div className={styles.feature}>
					<div style={{ flex: 1 }}>
						<strong>Seamless Booking and Communication</strong>
					</div>
					<div style={{ flex: 1 }}>
						<p>
							Lab2Client facilitates easy and efficient communication between researchers and lab owners.
						</p>
					</div>
				</div>
				<div className={styles.feature}>
					<div style={{ flex: 1 }}>
						<strong>Collaborative Environment</strong>
					</div>
					<div style={{ flex: 1 }}>
						<p>
							Lab2Client encourages researchers to share their expertise,
							knowledge, and experiences through our platform.
						</p>
					</div>
				</div>
				<div className={styles.feature}>
					<div style={{ flex: 1 }}>
						<strong>Verified and Trusted Lab Partners</strong>
					</div>
					<div style={{ flex: 1 }}>
						<p>
							Lab2Client ensures the credibility and reliability of lab partners through a robust verification process.
						</p>
					</div>
				</div>
			</div>

			{/* team section */}
			<section className="py-5" style={{ marginTop: 50 }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">

							{/* pre-text before the staff */}
							<h2 className="text-center" style={{ fontWeight: "bold" }}>
								Meet the Team
							</h2>
							<p className="text-center mb-5">
								The engineers and designers behind Lab2Client
							</p>

							{/* the co-founders */}
							<div className="row mb-5 justify-content-center">
								<TeamCard 
									imageSource="/headshots/Aref.png"
									name="Aref Soltani"
									jobTitle="Co-founder & CEO"
									description="Aref started his journey as a Mechanical Engineering master's student at York University, where the idea for L2C was born. 
									His entrepreneurial spirit led him to participate in programs like Lab2Market and i2I before starting L2C.
									"
									socialLink="/"
									/* Aref's Email */
								/>
								<TeamCard 
									imageSource="/headshots/Reza.png"
									name="Dr. Reza Rizvi"
									jobTitle="Co-founder & Business Development Manager"
									description="Reza is the Assistant Professor of the Department of Mechanical Engineering at York University. 
									He plays a vital role in fostering the company's partnership growth and expansion."
									socialLink="/"
								/>
							</div>

							{/* first row of staff */}
							<div className="row mb-5 justify-content-center">
								<TeamCard 
									imageSource="/headshots/Idrak.png"
									name="Idrak Islam"
									jobTitle="Lead Software Engineer"
									description="Idrak is a second-year computer science student at York University. 
									He handles the lead development and Software architecture for Lab2Client. 
									Idrak joined Lab2Client as a Summer co-op student and now works on the project actively."
									socialLink="/"
								/>
								<TeamCard 
									imageSource="/headshots/Hamza.png"
									name="Hamza Sohail"
									jobTitle="Backend Engineer"
									description="Hamza is a third-year software engineering student at York University. 
									He handles the backend development of Lab2Client. 
									Hamza joined Lab2Client as a Summer co-op student and now works on the project actively."
									socialLink="/"
								/>
								<TeamCard 
									imageSource="/headshots/Syed.png"
									name="Syed Abdul Wadood"
									jobTitle="Backend Engineer"
									description="Syed has been working as a backend engineer at Lab2Client. 
									He is in his final year of the computer engineering program at TMU. 
									Prior to Lab2Client, Syed interned at 2 startups in Toronto."
									socialLink="/"
								/>
							</div>

							{/* second row of staff */}
							<div className="row mb-5 justify-content-center">
								<TeamCard 
									imageSource="/headshots/Peter.png"
									name="Peter Pulcini"
									jobTitle="Front End Developer"
									description="Peter is a third-year computer science student at TMU. 
									He works as a front-end developer at Lab2Client. 
									This co-op term, he's eager to learn as much as possible."
									socialLink="/"
								/>
								<TeamCard 
									imageSource="/headshots/Curtis.png"
									name="Curtis Dizon"
									jobTitle="UX/UI Designer"
									description="Curtis oversees the UX/UI design at Lab2Client. He is in his
									final year of the business program at TMU. Prior to
									Lab2Client, Curtis Interned at CIBC and
									CGI for UX Design."
									socialLink="/"
								/>
							</div>

						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
