import React from 'react'
import styles from './exprienceCard.module.css'
import Link from 'next/link'
const ExprienceCard = (props) => {
    const { name, designation, duration, description, isLast, link, onSelect } = props
    return (
        <div
            className={styles.eduactionCard} >
            <div
                className={`${styles.eduactionCardInner} ${isLast && styles.border}`}>
                <div
                    className={styles.flex}>
                    <Link href={link}>
                        <p className={styles.name}>{name}</p>
                    </Link>
                    <p className={styles.duration}>{duration}</p>

                </div>

                <p
                    className={styles.designation}>
                    {designation}
                </p>


                <p className={styles.description}>
                    {description}
                </p>
                <p
                    onClick={onSelect}
                    className={styles.more}>Know More.....</p>
            </div>

        </div>
    )
}

export default ExprienceCard