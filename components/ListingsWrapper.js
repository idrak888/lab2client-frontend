import React from 'react'
import styles from '../styles/Listings.module.css';
import Link from 'next/link';

export default function ListingsWrapper({ data }) {
  	return (
		<div className={styles.listings}>
			{data.map(listing => {
				return (
					<Link href="/" className={styles.card}>
						<div className='row' style={{display: "flex", alignItems: "center"}}>
							<div className='col-sm-4'>
								<img style={{width: "100%", maxWidth: 250, padding: 10}} src={listing.research["LOGOS"]}/>
							</div>
							<div className='col-sm-8'>
								<h3 style={{textDecoration: "underline", fontSize: 24, fontWeight: "bold"}}>{listing.identification.building_name}</h3>
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
			})}
		</div>
	)
}
