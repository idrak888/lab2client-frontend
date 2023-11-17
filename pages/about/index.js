import React from "react";
import Head from "next/head";
import TeamCard from "../../components/About/TeamCard";
import Feature from "../../components/About/Feature";

export default function TeamPage() {
	return (
		<div style={{
			width: "100%",
			backgroundColor: "rgb(240, 240, 240)"
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

<div style={{
				width: "100%",
				display: "block",
				margin: "auto",
				padding: 0,
			}}>
			
			{/* introduction section */}
			<div className="container-fluid p-0" style={{ flexDirection: "row" }}>
				<div className="row d-flex justify-content-end">
					<div className="col-lg-6" style={{ paddingTop: 50, paddingLeft: 50, paddingRight: 50 }}>
						<h2 style={{ fontWeight: "bold" }}>About Lab2Client</h2>
						<p>Lab2Client is a revolutionary web platform designed to address the challenges faced by university professors and graduate students when conducting experimental tests. Our mission is to connect researchers with available lab space and equipment, making the process of conducting experiments more efficient, accessible, and collaborative.</p>
						<p><strong>Out mission: </strong>At Lab2Client, we understand the importance of hands-on experimentation in the academic and scientific community. We recognize that finding suitable lab space and equipment can often be a time-consuming and frustrating process. That's why we have created a user-friendly platform that simplifies the search and connection between researchers and lab resources.</p>
					</div>
					<div className="col-6 p-0 text-lg-end">
						<img style={{ maxHeight: "650px", maxWidth: "100%" }} src="/headshots/Screenshot.png" alt="Lab2Client" />
					</div>
				</div>
			</div>
</div>

<div style={{
				width: "100%",
				maxWidth: 1000,
				display: "block",
				margin: "auto",
				padding: 30
			}}>

			{/* feature section */}
			<div style={{ padding: 20 }}>
				<h2 style={{ textAlign: "center", fontWeight: "bold" }}>Key Features of Lab2Client</h2>
<br/>
				<Feature 
					title="Comprehensive Lab Database"
					description="Our platform hosts an extensive database of available lab
					spaces and equipment, allowing researchers to search and filter based on their specific
					requirements."
				/>
				<Feature 
					title="Advanced Search Functionality"
					description="We have developed powerful search algorithms that enable researchers 
					to quickly find the lab space and equipment they need."
				/>
				<Feature 
					title="Seamless Booking and Communication"
					description="Lab2Client facilitates easy and efficient communication between researchers and lab owners."
				/>
				<Feature 
					title="Collaborative Environment"
					description="Lab2Client encourages researchers to share their expertise, knowledge, and experiences through our platform."
				/>
				<Feature 
					title="Verified and Trusted Lab Partners"
					description="Lab2Client ensures the credibility and reliability of lab partners through a robust verification process."
					noBottomBorder="border-bottom-0"
				/>
			</div>

		</div>
		<div style={{
			width: "100%",
			maxWidth: 1400,
			display: "block",
			margin: "auto",
			padding: 30
		}}>

			{/* team section */}
			<section className="py-5" style={{ marginTop: 50 }}>
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12 p-0">

							{/* pre-text before the staff */}
							<h2 className="text-center" style={{ fontWeight: "bold" }}>
								Meet the Team
							</h2>
							<p className="text-center mb-5">
								The engineers and designers behind Lab2Client
							</p>

							{/* first row of staff */}
							<div className="row mb-5 justify-content-center">
								<TeamCard 
									imageSource="/headshots/Aref.png"
									name="Aref Soltani"
									jobTitle="Co-founder & CEO"
									description="Aref started his journey as a Mechanical Engineering master's student at York University, where the idea for L2C was born. 
									His entrepreneurial spirit led him to participate in programs like Lab2Market and i2I before starting L2C.
									"
									socialLink="https://www.linkedin.com/in/aref-soltani/"
								/>
								<TeamCard 
									imageSource="/headshots/Reza.png"
									name="Dr. Reza Rizvi"
									jobTitle="Co-founder & Business Development Manager"
									description="Reza is the Assistant Professor of the Department of Mechanical Engineering at York University. 
									He plays a vital role in fostering the company's partnership growth and expansion."
									socialLink="https://www.linkedin.com/in/reza-rizvi-81062289/"
								/>
								<TeamCard 
									imageSource="/headshots/Idrak.png"
									name="Idrak Islam"
									jobTitle="Lead Software Engineer"
									description="Idrak is a second-year computer science student at York University. 
									He handles the lead development and Software architecture for Lab2Client. 
									Idrak joined Lab2Client as a Summer co-op student and now works on the project actively."
									socialLink="https://www.linkedin.com/in/idrak-mustahsin/"
								/>
								<TeamCard 
									imageSource="/headshots/Hamza.png"
									name="Hamza Sohail"
									jobTitle="Backend Engineer"
									description="Hamza is a third-year software engineering student at York University. 
									He handles the backend development of Lab2Client. 
									Hamza joined Lab2Client as a Summer co-op student and now works on the project actively."
									socialLink="https://www.linkedin.com/in/muhammadhamzasohail/	"
								/>
							</div>

							{/* second row of staff */}
							<div className="row mb-5 justify-content-center">
								<TeamCard 
									imageSource="/headshots/Syed.png"
									name="Syed Abdul Wadood"
									jobTitle="Backend Engineer"
									description="Syed has been working as a backend engineer at Lab2Client. 
									He is in his final year of the computer engineering program at TMU. 
									Prior to Lab2Client, Syed interned at 2 startups in Toronto."
									socialLink="https://www.linkedin.com/in/abdul-wadood-syed-978085220/"
								/>
								<TeamCard 
									imageSource="/headshots/Peter.png"
									name="Peter Pulcini"
									jobTitle="Front End Developer"
									description="Peter is a third-year computer science student at TMU. 
									He works as a front-end developer at Lab2Client. 
									This co-op term, he's eager to learn as much as possible."
									socialLink="https://www.linkedin.com/in/peter-pulcini/	"
								/>
								<TeamCard 
									imageSource="/headshots/Curtis.png"
									name="Curtis Dizon"
									jobTitle="UX/UI Designer"
									description="Curtis oversees the UX/UI design at Lab2Client. He is in his
									final year of the business program at TMU. Prior to
									Lab2Client, Curtis Interned at CIBC and
									CGI for UX Design."
									socialLink="https://www.linkedin.com/in/curtisdizon/"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
	);
}