import React from "react";
import Head from "next/head";

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

			<section style={{
				padding: 20
			}}>
				<h2>About Lab2Client</h2>
				<p>Lab2Client is a revolutionary web platform designed to address the challenges faced by university professors and graduate students when conducting experimental tests. Our mission is to connect researchers with available lab space and equipment, making the process of conducting experiments more efficient, accessible, and collaborative.</p>
				<p>At Lab2Client, we understand the importance of hands-on experimentation in the academic and scientific community. We recognize that finding suitable lab space and equipment can often be a time-consuming and frustrating process. That's why we have created a user-friendly platform that simplifies the search and connection between researchers and lab resources.</p>
			</section>

			{/* team section */}
			<section className="py-5">
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
								<div className="col-md-4">
									<img src="avatar.jpeg" className="img-fluid mb-3" style={{ width: "400px", height: "300px", objectFit: "cover" }} /> {/* are the files going to be pre-determined sizes? should I adjust them using code */}
									<h5 style={{ fontWeight: "bold" }}>Curtizs Dizon</h5>
									<h6>UX/UI Designer</h6>
									<p>
										Curtis oversees the UX/UI design at Lab2Client. He is in his
										final year of the business program at TMU. Prior to
										Lab2Client, Curtis Interned at CIBC and
										CGI for UX Design.
									</p>
									<a href="/" target="_blank"><i className="bi bi-linkedin" style={{ color: "black" }}></i></a>
								</div>

								<div className="col-md-4">
									<img src="avatar.jpeg" className="img-fluid mb-3" style={{ width: "400px", height: "300px", objectFit: "cover" }} /> {/* are the files going to be pre-determined sizes? should I adjust them using code */}
									<h5 style={{ fontWeight: "bold" }}>Curtizs Dizon</h5>
									<h6>UX/UI Designer</h6>
									<p>
										Curtis oversees the UX/UI design at Lab2Client. He is in his
										final year of the business program at TMU. Prior to
										Lab2Client, Curtis Interned at CIBC and
										CGI for UX Design.
									</p>
									<a href="/" target="_blank"><i className="bi bi-linkedin" style={{ color: "black" }}></i></a>
								</div>

								<div className="col-md-4">
									<img src="avatar.jpeg" className="img-fluid mb-3" style={{ width: "400px", height: "300px", objectFit: "cover" }} /> {/* are the files going to be pre-determined sizes? should I adjust them using code */}
									<h5 style={{ fontWeight: "bold" }}>Curtizs Dizon</h5>
									<h6>UX/UI Designer</h6>
									<p>
										Curtis oversees the UX/UI design at Lab2Client. He is in his
										final year of the business program at TMU. Prior to
										Lab2Client, Curtis Interned at CIBC and
										CGI for UX Design.
									</p>
									<a href="/" target="_blank"><i className="bi bi-linkedin" style={{ color: "black" }}></i></a>
								</div>
							</div>

							{/* second row of staff */}
							<div className="row mb-5">
								<div className="col-md-4">
									<img src="avatar.jpeg" className="img-fluid mb-3" style={{ width: "400px", height: "300px", objectFit: "cover" }} /> {/* are the files going to be pre-determined sizes? should I adjust them using code */}
									<h5 style={{ fontWeight: "bold" }}>Curtizs Dizon</h5>
									<h6>UX/UI Designer</h6>
									<p>
										Curtis oversees the UX/UI design at Lab2Client. He is in his
										final year of the business program at TMU. Prior to
										Lab2Client, Curtis Interned at CIBC and
										CGI for UX Design.
									</p>
									<a href="/" target="_blank"><i className="bi bi-linkedin" style={{ color: "black" }}></i></a>
								</div>

								<div className="col-md-4">
									<img src="avatar.jpeg" className="img-fluid mb-3" style={{ width: "400px", height: "300px", objectFit: "cover" }} /> {/* are the files going to be pre-determined sizes? should I adjust them using code */}
									<h5 style={{ fontWeight: "bold" }}>Curtizs Dizon</h5>
									<h6>UX/UI Designer</h6>
									<p>
										Curtis oversees the UX/UI design at Lab2Client. He is in his
										final year of the business program at TMU. Prior to
										Lab2Client, Curtis Interned at CIBC and
										CGI for UX Design.
									</p>
									<a href="/" target="_blank"><i className="bi bi-linkedin" style={{ color: "black" }}></i></a>
								</div>

								<div className="col-md-4">
									<img src="avatar.jpeg" className="img-fluid mb-3" style={{ width: "400px", height: "300px", objectFit: "cover" }} /> {/* are the files going to be pre-determined sizes? should I adjust them using code */}
									<h5 style={{ fontWeight: "bold" }}>Curtizs Dizon</h5>
									<h6>UX/UI Designer</h6>
									<p>
										Curtis oversees the UX/UI design at Lab2Client. He is in his
										final year of the business program at TMU. Prior to
										Lab2Client, Curtis Interned at CIBC and
										CGI for UX Design.
									</p>
									<a href="/" target="_blank"><i className="bi bi-linkedin" style={{ color: "black" }}></i></a>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
