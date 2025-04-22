import React from 'react'
import styles from './aboutCard.module.css'
import Image from 'next/image';
const AboutCard = (props) => {
    const { label, icon, description } = props;
    return (
        <div
            className={styles.role_block}>
            <Image src={icon} alt='icon' />
            <div>
                <h4 className={styles.role_title}>{label}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default AboutCard