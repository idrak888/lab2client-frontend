import React from "react";
import Head from "next/head";

export default function TeamPage() {
  return (
    <div>
      <Head>
        <title>Meet the Team | Lab2Client</title>
        <meta
          name="description"
          content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
                  <img src="favicon.png" className="img-fluid mb-3" style={{ width: "500px", height: "400px", objectFit: "cover" }} /> {/* are the files going to be pre-determined sizes? should I adjust them using code */}
                  <h5 style={{ fontWeight: "bold" }}>Curtizs Dizon</h5>
                  <h6>UX/UI Designer</h6>
                  <p>
                    Curtis oversees the UX/UI design at Lab2Client. He is in his
                    final year of the business program at TMU. Prior to
                    Lab2Client, Curtis Interned at CIBC and
                    CGI for UX Design.
                  </p>
                  <a href="/" target="_blank"><i className="bi bi-linkedin" style={{color: "black"}}></i></a>
                </div>

                <div className="col-md-4">
                  <img src="favicon.png" className="img-fluid mb-3" style={{ width: "500px", height: "400px", objectFit: "cover" }} /> {/* are the files going to be pre-determined sizes? should I adjust them using code */}
                  <h5 style={{ fontWeight: "bold" }}>Curtizs Dizon</h5>
                  <h6>UX/UI Designer</h6>
                  <p>
                    Curtis oversees the UX/UI design at Lab2Client. He is in his
                    final year of the business program at TMU. Prior to
                    Lab2Client, Curtis Interned at CIBC and
                    CGI for UX Design.
                  </p>
                  <a href="/" target="_blank"><i className="bi bi-linkedin" style={{color: "black"}}></i></a>
                </div>

                <div className="col-md-4">
                  <img src="favicon.png" className="img-fluid mb-3" style={{ width: "500px", height: "400px", objectFit: "cover" }} /> {/* are the files going to be pre-determined sizes? should I adjust them using code */}
                  <h5 style={{ fontWeight: "bold" }}>Curtizs Dizon</h5>
                  <h6>UX/UI Designer</h6>
                  <p>
                    Curtis oversees the UX/UI design at Lab2Client. He is in his
                    final year of the business program at TMU. Prior to
                    Lab2Client, Curtis Interned at CIBC and
                    CGI for UX Design.
                  </p>
                  <a href="/" target="_blank"><i className="bi bi-linkedin" style={{color: "black"}}></i></a>
                </div>
              </div>

              {/* second row of staff */}
              <div className="row mb-5">
                <div className="col-md-4">
                  <img src="favicon.png" className="img-fluid mb-3" style={{ width: "500px", height: "400px", objectFit: "cover" }} /> {/* are the files going to be pre-determined sizes? should I adjust them using code */}
                  <h5 style={{ fontWeight: "bold" }}>Curtizs Dizon</h5>
                  <h6>UX/UI Designer</h6>
                  <p>
                    Curtis oversees the UX/UI design at Lab2Client. He is in his
                    final year of the business program at TMU. Prior to
                    Lab2Client, Curtis Interned at CIBC and
                    CGI for UX Design.
                  </p>
                  <a href="/" target="_blank"><i className="bi bi-linkedin" style={{color: "black"}}></i></a>
                </div>

                <div className="col-md-4">
                  <img src="favicon.png" className="img-fluid mb-3" style={{ width: "500px", height: "400px", objectFit: "cover" }} /> {/* are the files going to be pre-determined sizes? should I adjust them using code */}
                  <h5 style={{ fontWeight: "bold" }}>Curtizs Dizon</h5>
                  <h6>UX/UI Designer</h6>
                  <p>
                    Curtis oversees the UX/UI design at Lab2Client. He is in his
                    final year of the business program at TMU. Prior to
                    Lab2Client, Curtis Interned at CIBC and
                    CGI for UX Design.
                  </p>
                  <a href="/" target="_blank"><i className="bi bi-linkedin" style={{color: "black"}}></i></a>
                </div>

                <div className="col-md-4">
                  <img src="favicon.png" className="img-fluid mb-3" style={{ width: "500px", height: "400px", objectFit: "cover" }} /> {/* are the files going to be pre-determined sizes? should I adjust them using code */}
                  <h5 style={{ fontWeight: "bold" }}>Curtizs Dizon</h5>
                  <h6>UX/UI Designer</h6>
                  <p>
                    Curtis oversees the UX/UI design at Lab2Client. He is in his
                    final year of the business program at TMU. Prior to
                    Lab2Client, Curtis Interned at CIBC and
                    CGI for UX Design.
                  </p>
                  <a href="/" target="_blank"><i className="bi bi-linkedin" style={{color: "black"}}></i></a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
