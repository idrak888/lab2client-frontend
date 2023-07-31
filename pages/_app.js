import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '/components/Layout/Navbar';
import Footer from '/components/Layout/Footer';

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    var userStr = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
  },[])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar user={user}/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
