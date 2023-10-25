import React from 'react'
import styles from '/styles/Listings.module.css';
import Link from 'next/link';

// this is a wrapper that renders all listings in the /listings and /dashboard page

export default function ListingsWrapper({ data, edit }) {
	console.log(data);
  	return (
		<div className={styles.listings}>
			{/* Check if there is data to display */}
			{data.length > 0 ? data.map(listing => {
				return (
					// Link to view or edit page with listing details
					<Link href={ 
						{ 
							pathname: edit ?  '/edit' : '/view', 
							query: { id: listing.id }
						}
					} className={styles.card}>
						<div className='row' style={{display: "flex", alignItems: "center"}}>
							<div className='col-sm-4'>
								<img style={{width: "100%", maxWidth: 250, padding: 10}} src={listing.research["LOGOS"]}/>
							</div>
							<div className='col-sm-8'>
								<h3 style={{textDecoration: "underline", fontSize: 24, fontWeight: "bold"}}>{listing.identification.research_facillity}</h3>
								<strong>{listing.identification.institution_name}</strong>
								<p style={{textDecoration: "none"}}>{listing.research["DESCRIPTION_OF_RESEARCH_INFRASTRUCTURE"]}</p>
								<div className={styles.fields}>
									{listing.Fields_of_research.fields.map(field => {
										return (
											<div className={styles.pill}>
												{field}
											</div>
										)
									})}
								</div>
							</div>
						</div>
					</Link>
				)
			}) : null}
		</div>
	)
}
