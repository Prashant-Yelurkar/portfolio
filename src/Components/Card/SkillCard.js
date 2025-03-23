import React from 'react'
import styles from './SkillCard.module.css'
import Image from 'next/image'
const SkillCard = ({ icon, name }) => {
    return (
        <div className={styles.skill_block}>
            <div
                className={styles.skill_block_inner}>
                <div className={styles.icon}>
                    <Image src={icon} alt='icon' />
                </div>
                <span >{name}  </span>
            </div>
        </div>
    )
}

export default SkillCard