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
						<strong>Description</strong>
					</div>
					<div style={{ flex: 1 }}>
						<p>Long description</p>
					</div>
				</div>
				<div className={styles.feature}>
					<div style={{ flex: 1 }}>
						<strong>Description</strong>
					</div>
					<div style={{ flex: 1 }}>
						<p>Long description</p>
					</div>
				</div>
				<div className={styles.feature}>
					<div style={{ flex: 1 }}>
						<strong>Description</strong>
					</div>
					<div style={{ flex: 1 }}>
						<p>Long description</p>
					</div>
				</div>
				<div className={styles.feature}>
					<div style={{ flex: 1 }}>
						<strong>Description</strong>
					</div>
					<div style={{ flex: 1 }}>
						<p>Long description</p>
					</div>
				</div>
				<div className={styles.feature}>
					<div style={{ flex: 1 }}>
						<strong>Description</strong>
					</div>
					<div style={{ flex: 1 }}>
						<p>Long description</p>
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
								Some arbritrary text wil go here like "Meet the Lab2Client team
								members!" and this will look so kewl.
							</p>

							{/* first row of staff */}
							<div className="row mb-5">
								<TeamCard />
								<TeamCard />
								<TeamCard />
							</div>

							{/* second row of staff */}
							<div className="row mb-5">
								<TeamCard />
								<TeamCard />
								<TeamCard />
							</div>

						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
