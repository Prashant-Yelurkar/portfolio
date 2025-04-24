import React from 'react'
import styles from './projects.module.css'
import HeadTitle from '../Title/HeadTitle'
import ProjectCard from '../Card/ProjectCard'
import { MyProjects } from '@/Utils/data'
const Project = () => {

    return (
        <div
            className={styles.main}>
            <HeadTitle title={'Projects'} />

            <div
                className={styles.projectGrid}>
                {
                    MyProjects.map((project, index) => (
                        <ProjectCard

                            key={index}
                            {...project}
                        />
                    ))
                }

            </div>

        </div>
    )
}

export default Project