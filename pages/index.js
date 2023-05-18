import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Connecting Researchers with Lab Space and Expertise | Lab2Client</title>
        <meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* hero section */}
      <Hero/>

      {/* about us section */}
      <section className="bg-light py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h2 className="text-center mb-4">Trusted by hundreds of Institutions</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div style={{border: 0}} className="card mb-4">
                                <img src="/labphoto1.jpeg" className="card-img-top" alt="Image 1"/>
                                <div style={{padding: 15}} className="card-body">
                                    <h5 className="card-title">Find Available Labs</h5>
                                    <p className="card-text">Easily search and discover labs that meet your specific research
                                        needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div style={{border: 0}} className="card mb-4">
                                <img src="/labphoto2.jpeg" className="card-img-top" alt="Image 2"/>
                                <div style={{padding: 15}} className="card-body">
                                    <h5 className="card-title">Offer Lab Space</h5>
                                    <p className="card-text">Lab PIs can sign up and offer their lab space to other
                                        researchers, generating revenue.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      {/* contact us section */}
      <section class="py-5">
          <div class="container">
              <div class="row">
                  <div class="col-lg-8 offset-lg-2">
                      <div class="text-center mb-4">
                          <h2 class="mb-2">Contact Us</h2>
                          <p class="text-muted">Have any questions or inquiries? Feel free to reach out to us.</p>
                      </div>
                      <div class="row justify-content-center">
                          <div class="col-md-8">
                              <form>
                                  <div class="mb-3">
                                      <label for="name" class="form-label">Your Name</label>
                                      <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
                                  </div>
                                  <div class="mb-3">
                                      <label for="email" class="form-label">Your Email</label>
                                      <input type="email" class="form-control" id="email"
                                          placeholder="Enter your email address"/>
                                  </div>
                                  <div class="mb-3">
                                      <label for="message" class="form-label">Message</label>
                                      <textarea class="form-control" id="message" rows="4"
                                          placeholder="Enter your message"></textarea>
                                  </div>
                                  <div class="text-center">
                                      <button type="submit" class="btn btn-primary">Send Message</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

    </>
  )
}