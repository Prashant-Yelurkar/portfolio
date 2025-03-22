import Head from 'next/head';
import React from 'react'
import styles from './Layout.module.css'
import SideBar from '../SideBar/SideBar';
const Layout = (props) => {
    const { title, children } = props;
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <main
                className={styles.layout}>

                <div
                    className={styles.navbar}>
                    <SideBar />
                </div>
                <div
                    className={styles.main}>
                    {children}
                </div>

            </main>

        </>
    )
}

export default Layout