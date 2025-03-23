import React from 'react'
import styles from './title.module.css'
import Image from 'next/image'
const BlockTitle = ({ title, icon }) => {
    return (
        <div
            className={styles.tatle_block}>
            {icon &&
                <div className={styles.icon}>
                    <Image src={icon} alt='icon' />
                </div>
            }
            <div className={styles.title2}>{title}</div>

        </div>
    )
}

export default BlockTitle