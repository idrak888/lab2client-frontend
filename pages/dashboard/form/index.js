import React, { useEffect, useState } from 'react'
import styles from '/styles/Auth.module.css';
import Head from 'next/head';
import axios from 'axios';
import Loader from '/components/Layout/Loader'

export default function index() {
    let [user, setUser] = useState(null);
    let [equipmentName, setEquipmentName] = useState("");
    let [equipmentImage, setEquipmentImage] = useState("");
    let [equipmentDescription, setEquipmentDescription] = useState("");
    let [equipments, setEquipments] = useState([]);
    let [loading, setLoading] = useState(false);
    const [loadingImage, setLoadingImage] = useState(false);
    const [labImage, setLabImage] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            const parsed = JSON.parse(user);
            setUser(parsed);
        }
    }, []);

    const submit = e => {
        e.preventDefault();
        setLoading(true);

        const uid = user.uid;
        const institution_name = document.getElementById("institution_name").value;
        const research_facillity = document.getElementById("research_facility").value;
        const picture = document.getElementById("picture").value;
        const email1 = user.email;
        const address = document.getElementById("address").value;
        const city = document.getElementById("city").value;
        const province = document.getElementById("province").value;
        const postal_code = document.getElementById("postal_code").value;
        const name = document.getElementById("name").value;
        const title = document.getElementById("title").value;
        const contact_email = document.getElementById("contact_email").value;
        const telephone = document.getElementById("telephone").value;
        const description = document.getElementById("description").value;
        const research_infrastructure = document.getElementById("research_infrastructure").value;
        const fields = document.getElementById("fields").value.split(",");

        axios.post(`https://lab2client.herokuapp.com/create`, {
            user_unique_id: uid,
            email_identification: email1,
            institution_name,
            research_facillity,
            street_address: address,
            building_name: "",
            city,
            province,
            postal_code,

            first_name: name,
            last_name: "",
            title,
            office: "",
            email: contact_email,
            telephone: telephone,
            language: "English",
            first_name2: "",
            last_name2: "",
            title2: "",
            office2: "",
            email2: "",
            telephone2: "",
            language2: "",

            CFI_project_number: "",
            Project_leader_first_name: "",
            Project_leader_last_name: "",
            Project_leader_email: "",

            fields,
            applications: [],
            lab_equipment: equipments,

            DESCRIPTION_OF_YOUR_FACILITY: description,
            areas_of_expertise: "",
            Research_services: "",
            DESCRIPTION_OF_RESEARCH_INFRASTRUCTURE: research_infrastructure,
            PRIVATE_AND_PUBLIC_SECTOR_RESEARCH_PARTNERS: "",
            website: "",
            Additional_information: "",
            Social_media_platforms: "",
            LOGOS: labImage
        }).then(doc => {
            console.log(doc);
            setLoading(false);
            window.location = "/dashboard";
        }).catch(e => {
            console.log(e);
            setLoading(false);
        });
    }

    const handleImageUpload = (e, type) => {
        e.preventDefault();
        setLoadingImage(true);

        if (!e.target.files[0]) {
            alert('Please select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('image', e.target.files[0]);

        axios.post("https://lab2client.herokuapp.com/upload_picture", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(doc => {
            if (type == "main") {
                setLabImage(doc.data.url);
            } else if (type == "equipment") {
                setEquipmentImage(doc.data.url);
            }
            setLoadingImage(false);
        }).catch(e => {
            console.log(e);
            setLoadingImage(false);
        });
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Register your Facility | Lab2Client</title>
                <meta name="description" content="Lab2Client is an innovative web platform that connects the broader research and innovation community with under-utilized experimental research facilities." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1 style={{ fontWeight: "bold", fontSize: 30, textAlign: "center" }}>Lab Registration Form</h1>
                <form action="#" method="post" enctype="multipart/form-data">
                    <div className={styles.inner}>
                        <h2 style={{ fontWeight: "bold", fontSize: 24, marginTop: 20 }}>Lab Information</h2>
                        <div className={styles.formGroup}>
                            <label for="institution_name">Institution Name</label>
                            <input type="text" id="institution_name" name="institution_name" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label for="research_facility">Lab Name</label>
                            <input type="text" id="research_facility" name="research_facility" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label for="picture">Lab Image or Logo</label>
                            {
                                !loadingImage ?
                                    <div style={{ paddingTop: 20, paddingBottom: 20, width: "100%", maxWidth: 400, display: "block", margin: "auto" }}>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <input id="picture" name="picture" accept="image/*" type="file" onChange={e => handleImageUpload(e, "main")} />
                                        </div>
                                        <br />
                                        {labImage ? <img style={{ width: "100%", margin: 10, borderRadius: 12 }} src={labImage} /> : ""}
                                    </div>
                                    : <Loader />
                            }
                        </div>

                        <div className={styles.formGroup}>
                            <label for="fields">Fields of Research (Seperated by commas)</label>
                            <input type="text" id="fields" name="fields" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label for="description">Description of Facility</label>
                            <textarea id="description" name="description"></textarea>
                        </div>

                        <div className={styles.formGroup}>
                            <label for="research_infrastructure">Description of Lab Infrastructure</label>
                            <textarea id="research_infrastructure" name="research_infrastructure"></textarea>
                        </div>

                        <div className={styles.formGroup}>
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label for="address">Address</label>
                            <input type="text" id="address" name="address" required />
                        </div>

                        <div className={styles.formTable}>
                            <div className={styles.formGroup}>
                                <label>City</label>
                                <div><input type="text" id='city' name="city" required /></div>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Province</label>
                                <div>
                                    <select id='province' name="province" required>
                                        <option value="">Select Province</option>
                                        <option value="AB">Alberta</option>
                                        <option value="BC">British Columbia</option>
                                        <option value="MB">Manitoba</option>
                                        <option value="NB">New Brunswick</option>
                                        <option value="NL">Newfoundland and Labrador</option>
                                        <option value="NS">Nova Scotia</option>
                                        <option value="ON">Ontario</option>
                                        <option value="PE">Prince Edward Island</option>
                                        <option value="QC">Quebec</option>
                                        <option value="SK">Saskatchewan</option>
                                        <option value="NT">Nordivwest Territories</option>
                                        <option value="NU">Nunavut</option>
                                        <option value="YT">Yukon</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Postal Code</label>
                                <div><input type="text" id='postal_code' name="postal_code" required /></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.inner}>
                        <h2 style={{ fontWeight: "bold", fontSize: 24, marginTop: 20 }}>Equipment</h2>
                        <div className={styles.formGroup} style={{ padding: 20, border: "1px dashed rgb(215, 215, 215)", borderRadius: 6 }}>
                            <h3 style={{ fontWeight: "bold", fontSize: 18 }}>Add new equipment</h3>

                            <input value={equipmentName} onChange={e => setEquipmentName(e.target.value)} style={{ marginTop: 5 }} type="text" placeholder='Equipment Name' />
                            {
                                !loadingImage ?
                                    <div style={{ paddingTop: 20, paddingBottom: 20, width: "100%", display: "block", margin: "auto" }}>
                                        <div>
                                            <input accept="image/*" type="file" onChange={e => handleImageUpload(e, "equipment")} />
                                            <br />
                                            {equipmentImage ? <img style={{ width: "100%", maxWidth: 300, margin: 5 }} src={equipmentImage} /> : ""}
                                        </div>
                                        <br />
                                    </div>
                                    : <Loader />
                            }
                            <textarea value={equipmentDescription} onChange={e => setEquipmentDescription(e.target.value)} style={{ marginTop: 5 }} placeholder='Description and specifications'></textarea>
                            <button disabled={loadingImage} onClick={e => {
                                e.preventDefault();
                                if (equipmentName !== "" && equipmentDescription !== "") {
                                    const newEquipment = {
                                        name: equipmentName,
                                        image: equipmentImage,
                                        description: equipmentDescription
                                    }

                                    setEquipmentName("");
                                    setEquipmentImage("");
                                    setEquipmentDescription("");
                                    setEquipments(arr => [...arr, newEquipment]);
                                }
                            }} style={{ width: 100 }} className='btn btn-primary'>Add</button>
                        </div>
                        {equipments.map(equipment => {
                            return (
                                <div style={{ padding: 15, display: "inline-block", width: 250, height: 400, overflow: "scroll" }}>
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <button onClick={e => {
                                            e.preventDefault();
                                            setEquipmentName(equipment.name);
                                            setEquipmentImage(equipment.image);
                                            setEquipmentDescription(equipment.description);
                                            setEquipments(val => {
                                                return val.filter(doc => doc.name !== equipment.name);
                                            });
                                        }} className='btn btn-light' style={{ marginRight: 5 }}>Edit</button>
                                        <button onClick={e => {
                                            e.preventDefault();
                                            setEquipments(val => {
                                                return val.filter(doc => doc.name !== equipment.name);
                                            });
                                        }} className='btn btn-danger'>Remove</button>
                                    </div>
                                    <img src={equipment.image} width={200} />
                                    <br />
                                    <strong>{equipment.name}</strong>
                                    <p>{equipment.description}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className={styles.inner}>
                        <h2 style={{ fontWeight: "bold", fontSize: 24, marginTop: 30 }}>Contact Information</h2>

                        <div className={styles.formGroup}>
                            <label for="name">Contact Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label for="title">Title</label>
                            <input type="text" id="title" name="title" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label for="contact-email">Email</label>
                            <input type="email" id="contact_email" name="contact-email" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label for="telephone">Telephone</label>
                            <input type="tel" id="telephone" name="telephone" required />
                        </div>

                        <button disabled={loading} onClick={e => submit(e)} className={styles.btn} type="submit">{loading ? "loading..." : "Submit"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
