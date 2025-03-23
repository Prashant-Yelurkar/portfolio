import React from 'react'
import styles from './resume.module.css'
import HeadTitle from '../Title/HeadTitle'
import BlockTitle from '../Title/BolockTitle'
import educationIcon from '@/Assets/Icons/education.png'
import exprienceIcon from '@/Assets/Icons/experience.png'
import teckStackIcon from '@/Assets/Icons/teckStack.png'
import { Education, Exprience, Language } from '@/Utils/data'
import EducationCard from '../Card/EducationCard'
import ExprienceCard from '../Card/ExprienceCard'
import InfinityScroller from '../Scroller/InfinityScroller'
import SkillCard from '../Card/SkillCard'
const Resume = () => {
    return (
        <div
            className={styles.main}>
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
                            <ExprienceCard key={index} {...item} isLast={Exprience.length - 1 != index} />
                        ))
                    }
                </div>

            </div>
            {/* <a href="/Prashant_Resume.pdf" download>
                Download Resume
            </a> */}
            <BlockTitle title={"TechStack"} icon={teckStackIcon} />
            <InfinityScroller>

                {
                    Language.map((lan, index) => {
                        return <SkillCard key={index} {...lan} />
                    })
                }

            </InfinityScroller>
            <br />
            <InfinityScroller>

                {
                    Language.map((lan, index) => {
                        return <SkillCard key={index} {...lan} />
                    })
                }

            </InfinityScroller>
            <br />
            <InfinityScroller>

                {
                    Language.map((lan, index) => {
                        return <SkillCard key={index} {...lan} />
                    })
                }

            </InfinityScroller>
        </div>
    )
}

export default Resume