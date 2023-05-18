import '@/styles/globals.css';
import { useEffect } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
