import React from 'react'
import styles from './infinityScroller.module.css'
const InfinityScroller = ({ children, speed }) => {
    return (
        <div className={styles['scroll-container']}>
            <div
                className={styles['scroll-content']}
                style={{ animationDuration: `${speed}s` }}
            >
                {children}
                {children}
            </div>
        </div >
    )
}

export default InfinityScroller