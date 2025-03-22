import React from 'react'
import styles from './about.module.css'
import { Aboutdata } from '@/Utils/data'
import IndustrySwiper from '../Swiper/IndustrySwiper'
import BlockTitle from '../Title/BolockTitle'
import AboutCard from '../Card/AboutCard'
const About = () => {
    return (
        <div
            className={styles.main}>
            <h1 className={styles.title}>About Me</h1>
            <div
                className={styles.about_txt}
            >
                {
                    Aboutdata.about
                }
            </div>

            <BlockTitle title={"What I'm doing"} />
            <div
                className={styles.roles}>
                {
                    Aboutdata.roles.map((role, index) => {
                        return (
                            <AboutCard key={index} {...role} />
                        )
                    })
                }
            </div>
            <BlockTitle title={"Testmonials"} />
            <IndustrySwiper data={Aboutdata.testimonials} />
        </div>
    )
}

export default About