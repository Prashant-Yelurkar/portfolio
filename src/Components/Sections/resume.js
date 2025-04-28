import React, { useEffect, useRef, useState } from 'react'
import styles from './resume.module.css'
import HeadTitle from '../Title/HeadTitle'
import BlockTitle from '../Title/BolockTitle'
import educationIcon from '@/Assets/Icons/education.png'
import exprienceIcon from '@/Assets/Icons/experience.png'
import teckStackIcon from '@/Assets/Icons/teckStack.png'
import certificateIcon from '@/Assets/Icons/certificate.png'
import achivementsIcon from '@/Assets/Icons/achivements.png'


import { Certifications, Education, Exprience, FrameWork, Language, MyAchivements } from '@/Utils/data'
import EducationCard from '../Card/EducationCard'
import ExprienceCard from '../Card/ExprienceCard'
import InfinityScroller from '../Scroller/InfinityScroller'
import SkillCard from '../Card/SkillCard'

import downloadIcon from '@/Assets/Icons/download.png'
import Image from 'next/image'
import ExprienceInfoLayout from './exprience'
import PhotoSwipper from '../Swiper/PhotoSwipper'
import Viewer from '../ImageViewer/Viewer'

const Resume = ({ onChange }) => {
    const blockRef = useRef();
    const [imageViewer, setImageViewer] = useState('')

    const handleDownload = (e) => {
        e.preventDefault();

        const button = e.currentTarget;
        button.classList.add(styles.btn_animation);
        const pdfUrl = '/Prashant_Resume.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'cv.pdf';
        document.body.appendChild(link);
        setTimeout(() => {
            button.classList.remove(styles.btn_animation)
            link.click();
            document.body.removeChild(link);
        }, 2000)
    };

    const [selectedInfo, setSelectedInfo] = useState({
        type: '',
        id: null
    })

    const Pages = {
        "Exprience": <ExprienceInfoLayout data={selectedInfo} onBack={() => setSelectedInfo({})} />,
        "Education": <ExprienceInfoLayout data={selectedInfo} onBack={() => setSelectedInfo({})} />
    }

    useEffect(() => {
        if (selectedInfo.id)
            onChange()
    }, selectedInfo.id)
    return (
        <div
            ref={blockRef}
            className={styles.main}>

            {
                selectedInfo.id ?
                    Pages[selectedInfo.type] :
                    <>
                        <HeadTitle title={'Resume'} />

                        <div>
                            <BlockTitle icon={educationIcon} title={"Education"} />
                            <div
                                className={styles.container}>
                                {
                                    Education.map((item, index) => (
                                        <EducationCard key={index} {...item} isLast={Education.length - 1 != index} />
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <BlockTitle icon={exprienceIcon} title={"Experience"} />
                            <div
                                className={styles.container}>
                                {
                                    Exprience.map((item, index) => (
                                        <ExprienceCard
                                            onSelect={() => setSelectedInfo({ ...item, type: "Education" })}
                                            key={index}
                                            {...item}
                                            isLast={Exprience.length - 1 != index} />
                                    ))
                                }
                            </div>

                        </div>

                        <BlockTitle title={"TechStack"} icon={teckStackIcon} />
                        <InfinityScroller
                            speed={40}>

                            {
                                Language.map((lan, index) => {
                                    return <SkillCard key={index} {...lan} />
                                })
                            }
                            {
                                FrameWork.map((lan, index) => {
                                    return <SkillCard key={index} {...lan} />
                                })
                            }


                        </InfinityScroller>
                        <BlockTitle title={"Achivements"} icon={achivementsIcon} />
                        <PhotoSwipper data={MyAchivements}
                            onSelect={(img) => setImageViewer(img)}
                        />

                        <BlockTitle title={"Certificates"} icon={certificateIcon} />
                        <PhotoSwipper data={Certifications}
                            onSelect={(img) => setImageViewer(img)}
                        />

                        <div className={styles.btn_block}>
                            <button
                                aria-label="Download Resume"
                                onClick={handleDownload}
                                className={styles.btn}>
                                <div
                                    className={styles.img_block}>

                                    <Image src={downloadIcon} alt="icon" />
                                </div>
                                <p>Download Resume</p>
                            </button>
                        </div>
                    </>

            }
            {imageViewer && <Viewer src={imageViewer} onClose={() => setImageViewer("")} />}

        </div >
    )
}

export default Resume