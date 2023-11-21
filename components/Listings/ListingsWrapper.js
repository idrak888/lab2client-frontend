// ListingsWrapper.js

import React from 'react';
import styles from '/styles/Listings.module.css';
import Link from 'next/link';

export default function ListingsWrapper({ data, edit }) {
  console.log(data);

  const items = ["Autocollimators", "Scanning Electron Microscope (SEM)", "Microscope", "Another Component", "Yet Another Component", "More Components"];

  return (
    <div className={`${styles.listings} ${styles.highlighted}`}>
      {/* Check if there is data to display */}
      {data.length > 0 ? data.map(listing => {
        return (
          <Link
            href={{
              pathname: edit ? '/edit' : '/view',
              query: { id: listing.id },
            }}
            className={styles.card}
            key={listing.id}
          >
            <div className={`row ${styles.responsiveCard}`} style={{ display: "flex", alignItems: "center" }}>
              <div className='col-sm-4'>
                <img
                  style={{
                    width: "100%",
                    height: "200px", // Set your desired fixed height here
                    objectFit: "cover", // Crop the image to fit the specified dimensions
                    borderRadius: "25px",
                  }}
                  src={listing.research["LOGOS"]}
                  alt="Research Logo"
                />
              </div>
              <div className='col-sm-8 d-flex flex-column'>
                <h3 className={styles.title}>{listing.identification.research_facillity}</h3>
                <div className={`${styles.greyComponent} ${styles.componentWrapper}`} style={{ marginBottom: "1%" }}>
                <i className={`bi bi-geo-alt me-1 fs-6`}></i>
                <span style={{fontSize: "12px"}}>
                  {listing.identification.institution_name}
                </span>
                <i className={`bi bi-dot fs-6`} style={{ margin: "0 2px" }}></i>
                <span style={{fontSize: "12px"}} className={`font-size-6 font-weight-light`}>
                  {listing.identification.city}, {listing.identification.province}
                </span>
              </div>
                <p style={{ textDecoration: "none", fontWeight: "normal" }}>
                  Fields of Research: {listing.Fields_of_research.fields.join(", ")}.
                </p>
                {
                  listing.lab_equipment.length > 0 ?
                    <h6 className={styles.equipmentsTitle}>Equipment Offered:</h6>
                    : <h6 className={styles.equipmentsTitle}>No Equipments Offered</h6>
                }
                <div className={`equipmentWrapper d-flex flex-wrap ${styles.mobileCenter}`}>
                  {listing.lab_equipment.slice(0, 5).map((item, index) => (
                    <div
                      key={index}
                      className={`${styles.dynamicWidth} ${styles.customClass}`}
                    >
                      {item.name}
                    </div>
                  ))}
                  {
                    listing.lab_equipment.length > 5 ? (
                      <div
                        key={-1}
                        className={`${styles.dynamicWidth} ${styles.customClass}`}
                      >
                        +{listing.lab_equipment.length - 5} more
                      </div>
                    ) : null
                  }
                </div>
              </div>
            </div>
          </Link>
        )
      }) : null}
    </div>
  );
}
