import React from 'react'
import styles from './educationCard.module.css'
import Link from 'next/link'
const EducationCard = (props) => {
    const { name, degree, duration, description, marks, isLast, link } = props
    return (
        <div
            className={styles.eduactionCard} >
            <div
                className={`${styles.eduactionCardInner} ${isLast && styles.border}`}>
                <div
                    className={styles.flex}>
                    <Link href={link || ''}><p className={styles.name}>{name}</p></Link>
                    <p className={styles.duration}>{duration}</p>
                </div>

                <p
                    className={`${styles.flex} ${styles.degree}`}>
                    {degree}
                    <span>
                        ( {marks?.marks}  {marks?.type} )
                    </span>
                </p>


                <p className={styles.description}>
                    {description}
                </p>
            </div>

        </div>
    )
}

export default EducationCard