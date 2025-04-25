import React, { useState } from 'react'
import styles from './contact.module.css'
import TextBox from '../FormComponents/TextBox'
import TextArea from '../FormComponents/TextArea'
import Button from '../FormComponents/Button'
import BlockTitle from '../Title/BolockTitle'
import HeadTitle from '../Title/HeadTitle'
import { contactSchema } from '@/Actions/Schema/ContactSchema'
import { toast } from 'sonner'
import { MyLocation } from '@/Utils/data'
import LoaderWrapper from '../Loaders/LoaderWrapper'

const Contact = () => {
    const [details, setDetails] = useState({
        fname: "",
        lname: "",
        email: "",
        desc: ""
    })
    const [loading, setLoading] = useState(false)

    const handelChange = (key, value) => {
        setDetails((preview) => {
            return { ...preview, [key]: value }
        })
    }
    const handelSubmit = async () => {
        const result = contactSchema.safeParse(details);

        if (!result.success) {
            result.error.errors.forEach((err) => {
                toast.error(err.message);
            });
            return;
        }
        setLoading(true)
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: `${details.fname} ${details.lname}`,
                    email: details.email,
                    message: details.desc
                })
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Thank You!!!');
                setDetails({
                    fname: "",
                    lname: "",
                    email: "",
                    desc: ""
                })
            } else {
                toast.error(data.message || 'Something went wrong.');
            }
        } catch (err) {
            console.error(err);
            toast.error('Failed to Record Your Query');
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <LoaderWrapper loading={loading}>
            <div
                className={styles.main}>

                <HeadTitle title={'Contact'} />
                <div
                    className={styles['map-container']}
                >
                    <iframe
                        src={MyLocation}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div className={styles["map-overlay"]}></div>
                </div>

                <BlockTitle title={'Contact Form'} />
                <div
                    className={styles.flex_cl}>
                    <div
                        className={styles.flex_rw}>
                        <TextBox
                            value={details.fname}
                            type={"text"}
                            name={"First Name"}
                            onChange={(value) => handelChange('fname', value)} />
                        <TextBox
                            value={details.lname}
                            type={"text"}
                            name={"Last Name"}
                            onChange={(value) => handelChange('lname', value)} />
                    </div>
                    <TextBox
                        value={details.email}
                        type={"email"}
                        name={"Email"}
                        onChange={(value) => handelChange('email', value)} />
                    <TextArea
                        value={details.desc}
                        type={"text"}
                        name={"Enter Your Query"} rows={3} onChange={(value) => handelChange('desc', value)} />
                    <Button name="Submit" fn={handelSubmit} />
                </div>
            </div>
        </LoaderWrapper >
    )
}

export default Contact

