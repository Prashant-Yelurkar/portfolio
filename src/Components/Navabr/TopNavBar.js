import React, { useEffect, useRef, useState } from 'react'
import styles from './topNav.module.css'
import menuIcon from '@/Assets/Icons/hamburger.svg'
import menuCloseIcon from '@/Assets/Icons/menuClose.svg'

import Image from 'next/image'
const TopNavBar = ({ onToggle, isOpen }) => {

    return (
        <div className={styles.main}>
            <div className={styles.menu}>
                <Image
                    onClick={onToggle}
                    src={isOpen ? menuCloseIcon : menuIcon}
                    alt="menu"
                />
            </div>
        </div>
    )
}

export default TopNavBar