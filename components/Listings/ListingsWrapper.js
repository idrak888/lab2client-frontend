import React from 'react'
import styles from '/styles/Listings.module.css';
import Link from 'next/link';

// this is a wrapper that renders all listings in the /listings and /dashboard page
// ... (other imports)

export default function ListingsWrapper({ data, edit }) {
	console.log(data);
	return (
	  <div className={styles.listings}>
		{/* Check if there is data to display */}
		{data.length > 0 ? data.map(listing => {
		  return (
			// Link to view or edit page with listing details
			<Link
			  href={{
				pathname: edit ? '/edit' : '/view',
				query: { id: listing.id },
			  }}
			  className={styles.card}
			  key={listing.id}  // Add a key for each mapped element
			>
			  <div className='row' style={{ display: "flex", alignItems: "center" }}>
				<div className='col-sm-4'>
				  <img style={{ width: "100%", maxWidth: 250, padding: 0, borderRadius: 25 }} src={listing.research["LOGOS"]} />
				</div>
				<div className='col-sm-8'>
				  <h3 className={styles.title}>{listing.identification.research_facillity}</h3>
				  <div style={{ marginBottom: "1%" }}>
					<i style={{ fontSize: "75%", marginRight: "1%" }} className='bi bi-geo-alt'></i>
					<span className={styles.subtitle}>{listing.identification.institution_name}</span>
					<i className="bi bi-dot"></i>
					<span className={styles.subtitle}>{listing.identification.city}, {listing.identification.province}</span>
				  </div>
				  <p style={{ textDecoration: "none" }}>{listing.research["DESCRIPTION_OF_RESEARCH_INFRASTRUCTURE"]}</p>
				
				</div>
			  </div>
			</Link>
		  )
		}) : null}
	  </div>
	)
  }

  /*
  <div className={styles.fields}>
					{listing.Fields_of_research.fields.map(field => {
					  return (
						<div className={styles.pill} key={field}>
						  {field}
						</div>
					  )
					})}
				  </div>
  */
  
