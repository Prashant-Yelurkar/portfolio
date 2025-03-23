import React from 'react'
import styles from './about.module.css'
import { Aboutdata } from '@/Utils/data'
import IndustrySwiper from '../Swiper/IndustrySwiper'
import BlockTitle from '../Title/BolockTitle'
import AboutCard from '../Card/AboutCard'
import HeadTitle from '../Title/HeadTitle'
const About = () => {
    return (
        <div
            className={styles.main}>
            <HeadTitle title={'About Me'} />
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