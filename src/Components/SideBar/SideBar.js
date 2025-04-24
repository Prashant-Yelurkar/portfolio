import React, { useRef } from 'react'
import styles from './SideBar.module.css'
import profileIcon from '@/Assets/Images/profile.jpg'
import profileIcon2 from '@/Assets/Images/profilehover.png'
import Image from 'next/image'
import { ContactDetails, SocialLinks } from '@/Utils/data'
import Link from 'next/link'

const SideBar = () => {

    return (
        <div
            className={styles['side-bar']}>
            <div
                className={styles['image_block']}>
                <div
                    className={styles['image_bg']}>
                    <Image className={styles.profile} src={profileIcon} alt='img' />
                    <Image className={styles.hoverProfile} src={profileIcon2} alt='img' />
                </div>
            </div>
            <div >
                <h3 className={styles.name}>Prashant Erappa Yelurkar</h3>
            </div>
            <div className={styles.position}>
                <h3>Full Stack Developer</h3>
            </div>
            <div className={styles.hr}></div>

            <div
                className={styles.info_section}>
                {
                    ContactDetails.map((item, index) => (
                        item.link ? (
                            <Link
                                key={index}
                                target='_blank'
                                href={item.link}
                                className={styles.info_block}>
                                <Image src={item.icon} alt='img' />
                                <div className={styles.info_details}>
                                    <p className={styles.title}>{item.label}</p>
                                    <p className={styles.data}>{item.data}</p>
                                </div>
                            </Link>
                        ) : (
                            <div
                                key={index}
                                className={styles.info_block}>
                                <Image src={item.icon} alt='img' />
                                <div className={styles.info_details}>
                                    <p className={styles.title}>{item.label}</p>
                                    <p className={styles.data}>{item.data}</p>
                                </div>
                            </div>
                        )
                    ))
                }

            </div>

            <div
                className={styles.footer_links}>
                {
                    SocialLinks.map((item, index) => {
                        return (
                            <div
                                className={styles.link}>
                                <Link href={item.link}
                                    target='_blank'>
                                    <Image src={item.icon} alt={item.label} />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SideBar