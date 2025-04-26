import React, { useState } from 'react'
import BackIcon from '@/Assets/Icons/back.png'
import Image from 'next/image'
import styles from './exprience.module.css'
import BlockTitle from '../Title/BolockTitle'
import achivementIcon from '@/Assets/Icons/achivements.png'
import projectIcon from '@/Assets/Icons/project.png'
import ProjectSwipper from '../Swiper/ProjectScroller'
import PhotoSwipper from '../Swiper/PhotoSwipper'
import Viewer from '../ImageViewer/Viewer'


const ExprienceInfoLayout = (props) => {
    const { onBack, data } = props;
    const exprience = data;
    const [imageViewer, setImageViewer] = useState('')
    return (
        <div className={styles.main}>
            {imageViewer && <Viewer src={imageViewer} onClose={() => setImageViewer("")} />}
            <div
                className={styles.background}>
                <Image src={exprience.icon} alt='icon' />
            </div>
            <div className={styles.details}>
                <Image
                    src={BackIcon}
                    onClick={onBack}
                    alt="icon"
                    className={styles.backIcon} />
                <h4
                    className={styles.title}>
                    {exprience.name}
                </h4>
                <p
                    className={styles.address}>
                    {exprience.address}
                </p>
                <h3 className={styles.designation}>{exprience.designation}</h3>
                <div
                    className={styles.about}>
                    {exprience.about}
                </div>
                <br />
                <BlockTitle title={"Projects"} icon={projectIcon} />
                <ProjectSwipper data={exprience.projects} />

                <BlockTitle title={"Achivements Album"} icon={achivementIcon} />
                <PhotoSwipper data={exprience.photos} onSelect={(img) => setImageViewer(img)} />

            </div>
        </div>
    )
}

export default ExprienceInfoLayout