import Image from 'next/image'
import React from 'react'
import styles from './viewer.module.css'
import closeIcon from '@/Assets/Icons/close.svg'
const Viewer = ({ src, onClose }) => {
    return (
        <div
            className={styles.main}>
            <div>
                <Image
                    onClick={onClose}
                    src={closeIcon} alt='icon' className={styles.close} />
                <Image src={src} />
            </div>
        </div>
    )
}

export default Viewer