import React from 'react'
import styles from './resume.module.css'
import HeadTitle from '../Title/HeadTitle'
import BlockTitle from '../Title/BolockTitle'
import educationIcon from '@/Assets/Icons/education.png'
import exprienceIcon from '@/Assets/Icons/experience.png'
import teckStackIcon from '@/Assets/Icons/teckStack.png'
import { Education, Exprience, FrameWork, Language } from '@/Utils/data'
import EducationCard from '../Card/EducationCard'
import ExprienceCard from '../Card/ExprienceCard'
import InfinityScroller from '../Scroller/InfinityScroller'
import SkillCard from '../Card/SkillCard'
const Project = () => {
    return (
        <div
            className={styles.main}>
            <HeadTitle title={'Projects'} />



        </div>
    )
}

export default Project