import React from 'react'
import styles from '/styles/Listings.module.css';
import Link from 'next/link';

export default function ListingsWrapper({ data, edit }) {
	console.log(data);

	const items = ["Autocollimators", "Scanning Electron Microscope (SEM)", "Microscope", "Another Component", "Yet Another Component", "More Components"];

	const DynamicWidthElement = ({ text }) => {
		const dynamicWidth = {
			backgroundColor: '#294B80',
			borderRadius: '12px',
			justifyContent: 'center',
			display: 'flex',
			color: 'white',
			width: 'auto',
			padding: "0.8% 2%",
			fontSize: '12px',
			alignItems: 'center',
			marginBottom: '8px',
			marginRight: "8px"
		};

		return <div style={dynamicWidth}>{text}</div>;
	};

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
								<p style={{ textDecoration: "none", fontWeight: "normal" }}>
									Fields of Research: {listing.Fields_of_research.fields.join(", ")}.
								</p>
								{
									listing.lab_equipment.length > 0 ?
									<h6 className={styles.equipmentsTitle}>Equipment Offered:</h6>
									: <h6 className={styles.equipmentsTitle}>No Equipments Offered</h6>
								}
								<div style={{ display: 'flex', flexWrap: 'wrap' }}>
									{listing.lab_equipment.slice(0, 5).map((item, index) => (
									<DynamicWidthElement key={index} text={item.name} />
									))}
									{
									listing.lab_equipment.length > 5 ? <DynamicWidthElement key={-1} text={`+${listing.lab_equipment.length - 5} more`} /> : null
									}
								</div>
							</div>
						</div>
					</Link>
				)
			}) : null}
		</div>
	)
}
