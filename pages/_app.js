import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    var userStr = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    if (userStr) {
      setUser(JSON.parse(userStr));
      console.log(JSON.parse(userStr));
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
