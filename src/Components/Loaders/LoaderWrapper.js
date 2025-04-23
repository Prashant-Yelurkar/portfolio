import React from 'react'
import styles from './Loader.module.css'
const LoaderWrapper = ({ loading, children }) => {

    return (
        <>
            {children}
            {loading && <div className={styles.loaderWrapper}>
                <div className={styles.loader}></div>
            </div>}
        </>

    )
}

export default LoaderWrapper