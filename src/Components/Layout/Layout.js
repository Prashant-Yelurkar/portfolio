import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react'
import styles from './Layout.module.css'
import SideBar from '../SideBar/SideBar';
import TopNavBar from '../Navabr/TopNavBar';

const Layout = (props) => {
    const { title, children } = props;
    const [menu, setMenu] = useState(false);
    const divRef = useRef()
    const toggleMenu = () => {
        setMenu(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (divRef.current && divRef.current.contains(event.target)) {
                if (menu)
                    toggleMenu()
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menu]);



    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <main className={styles.layout}>
                <TopNavBar onToggle={toggleMenu} isOpen={menu} />

                <div className={`${styles.navbar} ${menu ? styles.active_navbar : ''}`}>
                    <SideBar />
                </div>

                <div
                    ref={divRef}
                    className={styles.main}>
                    {children}
                </div>
            </main>
        </>
    )
}

export default Layout;
