import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Loader from '/components/Layout/Loader';
import styles from '/styles/Listings.module.css';
import ListingsWrapper from '/components/Listings/ListingsWrapper';

export default function Listings({ query }) {
  let [data, setData] = useState(null);
  const [searchKeys, setSearchKeys] = useState("");
  const inputRef = useRef(null);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleChange = (event) => {
    setSearchKeys(event.target.value);
  };

  const handleSearch = () => {
    const trimmedSearchKeys = searchKeys.trim();
    if (trimmedSearchKeys !== '') {
      window.location.href = `/listings?search=${trimmedSearchKeys}`;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default form submission behavior
      handleSearch();
    }
  };

  useEffect(() => {
    if (query.search) {
      fetch(`https://lab2client.herokuapp.com/search_word/${query.search}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setSearchKeys(query.search);
        });
    } else {
      fetch(`https://lab2client.herokuapp.com/getall`)
        .then((response) => response.json())
        .then((data) => {
          setData(data.reverse());
          setSearchKeys("");
        });
    }
  }, []);

  const handleClearClick = () => {
    // Clear the input field
    inputRef.current.value = '';
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Head>
        <title>{query.search ? capitalizeFirstLetter(query.search) : "All Listings"} | Lab2Client</title>
      </Head>
      <div className={styles.container}>
        {
          !data ? <Loader /> :
            <>
              <div className={`${styles.searchWrapper}`}>
                <h1 className={styles.pageTitle}>
                  Find research equipment that suits your needs.
                </h1>
                <div style={{ position: 'relative', width: '100%', marginTop: '30px' }}>
                  <div
                    style={{
                      position: 'absolute',
                      left: '20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#555',
                      fontWeight: 'bold',
                    }}
                  >
                    <i className="bi bi-search"></i>
                  </div>
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search for lab equipment, etc. Microscope"
                    style={{
                      padding: '15px 40px 15px 50px', // Increased right padding to accommodate the clear icon
                      width: '100%',
                      boxSizing: 'border-box',
                      borderRadius: '30px',
                      fontSize: '80%',
                    }}
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                  />
                  {searchKeys && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        right: '20px',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer',
                      }}
                      onClick={handleClearClick}
                    >
                      &#x2715;
                    </div>
                  )}
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
};
