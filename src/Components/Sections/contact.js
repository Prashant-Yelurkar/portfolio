import React, { useState } from 'react'
import styles from './contact.module.css'
import TextBox from '../FormComponents/TextBox'
import TextArea from '../FormComponents/TextArea'
import Button from '../FormComponents/Button'

const Contact = () => {
    const [details, setDetails] = useState({
        fname: null,
        lname: null,
        desc: null
    })
    const handelChange = (key, value) => {
        setDetails((preview) => {
            return { ...preview, [key]: value }
        })
    }
    const handelSubmit = () => {
        console.log(details);

    }
    return (
        <div
            className={styles.main}>
            <h1 className={styles.title}>Contact</h1>
            <div
                className={styles['map-container']}
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9905464938474!2d72.90066877606414!3d19.108070650963295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c70ef9d1c839%3A0xc3d20824443b231d!2s13%2FB%2F%20505%2C%20Sangharsh%20Nagar%2C%20Chandivali%2C%20Powai%2C%20Mumbai%2C%20Maharashtra%20400072!5e0!3m2!1sen!2sin!4v1741999650281!5m2!1sen!2sin"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                <div className={styles["map-overlay"]}></div>
            </div>

            <h1 className={styles.title2}>Contact Form</h1>
            <div
                className={styles.flex_cl}>
                <div
                    className={styles.flex_rw}>
                    <TextBox
                        name={"First Name"} onChange={(value) => handelChange('fname', value)} />
                    <TextBox
                        name={"Last Name"} onChange={(value) => handelChange('lname', value)} />
                </div>
                <TextArea
                    name={"Enter Your Query"} rows={6} onChange={(value) => handelChange('desc', value)} />
                <Button name="Submit" fn={handelSubmit} />
            </div>
        </div>
    )
}

export default Contact