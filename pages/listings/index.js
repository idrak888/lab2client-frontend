import React from 'react';
import Head from 'next/head';
import Loader from '/components/Layout/Loader';
import styles from '/styles/Listings.module.css';
import { useEffect, useState } from 'react';
import ListingsWrapper from '/components/Listings/ListingsWrapper';

export default function Listings({ query }) {
  let [data, setData] = useState(null);
  const [searchKeys, setSearchKeys] = React.useState("");

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleChange = event => {
    setSearchKeys(event.target.value);
  }

  useEffect(() => {
    if (query.search) {
      fetch(`https://lab2client.herokuapp.com/search_word/${query.search}`)
        .then(response => response.json())
        .then(data => {
          setData(data);
          setSearchKeys(query.search);
        });
    } else {
      fetch(`https://lab2client.herokuapp.com/getall`)
        .then(response => response.json())
        .then(data => {
          setData(data.reverse());
          setSearchKeys("");
        });
    }
  }, []);

  return (
    <>
      <Head>
        <title>{query.search ? capitalizeFirstLetter(query.search) : "All Listings"} | Lab2Client</title>
        <meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {
          !data ? <Loader /> :
            <>
              <div className={`${styles.searchWrapper}`}>
                <h1 className={styles.pageTitle}>
                    Lorem Epsum Dolor Sit Amet, consectatur adipiscing elit.
                </h1>
                <div style={{ position: 'relative', width: '100%', marginTop: '30px'}}>
                  <div
                    style={{
                      position: 'absolute',
                      left: '20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#555',
                      fontWeight: 'bold', // Make the icon bold
                    }}
                  >
                    <i className="bi bi-search"></i>
                  </div>
                  <input
                    type="text"
                    placeholder="Search for lab equipment, try 'microscope'"
                    style={{
                      padding: '15px 0px 15px 50px', // Adjusted padding for height and width
                      width: '100%',
                      boxSizing: 'border-box',
                      borderRadius: '30px', // Rounded corners
                      fontSize: "80%"
                    }}
                    value={searchKeys}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <h5 className={`${styles.showingResults}`}>Showing {data.length} results</h5>
              <ListingsWrapper data={data} />
            </>
        }
      </div>
    </>
  )
}

Listings.getInitialProps = async ({ query }) => {
  return { query };
}

/*
<a
                  className={`${styles.btn} btn`}
                  href={searchKeys.trim() !== '' ? `/listings?search=${searchKeys}` : '#'}
                >
                  <span className={styles.text}>Find Labs</span>{' '}
                  <i className="bi bi-arrow-right" style={{ marginLeft: 3, marginRight: 3 }}></i>
                </a>
*/