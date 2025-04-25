import React from 'react'
import BackIcon from '@/Assets/Icons/back.png'
import Image from 'next/image'
import styles from './exprience.module.css'
import BlockTitle from '../Title/BolockTitle'
import achivementIcon from '@/Assets/Icons/achivements.png'
import projectIcon from '@/Assets/Icons/project.png'
import { Exprience } from '@/Utils/data'
import ProjectSwipper from '../Swiper/ProjectScroller'
import PhotoSwipper from '../Swiper/PhotoSwipper'


const ExprienceInfoLayout = (props) => {
    const { onBack } = props;
    const data = Exprience[0];
    return (
        <div className={styles.main}>
            <div
                className={styles.background}>
                <Image src={data.icon} alt='icon' />
            </div>
            <div className={styles.details}>
                <Image
                    src={BackIcon}
                    onClick={onBack}
                    alt="icon"
                    className={styles.backIcon} />
                <h4
                    className={styles.title}>
                    {data.name}
                </h4>
                <p
                    className={styles.address}>
                    {data.address}
                </p>
                <h3>{data.designation}</h3>
                <div
                    style={{ whiteSpace: 'pre-wrap', fontFamily: 'sans-serif', lineHeight: '1.6' }}
                    className={styles.about}>
                    {data.about}
                </div>
                <BlockTitle title={"Projects"} icon={projectIcon} />
                <ProjectSwipper data={data.projects} />

                <BlockTitle title={"Achivements Album"} icon={achivementIcon} />
                <PhotoSwipper data={data.photos} />

            </div>
        </div>
    )
}

export default ExprienceInfoLayout