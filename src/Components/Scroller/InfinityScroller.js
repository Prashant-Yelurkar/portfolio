import React from 'react'
import styles from './infinityScroller.module.css'
const InfinityScroller = ({ children }) => {
    return (
        <div className={styles['scroll-container']}>
            <div className={styles['scroll-content']}>
                {children}
                {children}
            </div>
        </div >
    )
}

export default InfinityScroller