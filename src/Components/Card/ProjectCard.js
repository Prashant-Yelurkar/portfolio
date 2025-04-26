import React from 'react';
import styles from './projectCard.module.css';
import githubIcon from '@/Assets/Icons/github.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { toast } from 'sonner';

const ProjectCard = (props) => {
    const { name, desc, img, git, hostLink } = props;
    const router = useRouter();

    const handleGitClick = (e) => {
        e.stopPropagation();
        window.open(git, '_blank');
    };

    const handleCardClick = () => {
        if (hostLink)
            return router.push(hostLink);
        toast.error("Hosting is not Live")
    };

    return (
        <div className={styles.card} onClick={handleCardClick}>
            <div className={styles.cardInner}>
                <Image className={styles.projectImg} src={img} alt="project" />
            </div>
            <div className={styles.details}>
                <p>{name}</p>
                <div className={styles.addDetails}>
                    <span>{desc}</span>
                    {
                        git && <button
                            onClick={handleGitClick}
                            className={styles.gitButton}
                            aria-label="GitHub Link"
                        >

                            <Image src={githubIcon} alt="GitHub icon" />
                        </button>
                    }

                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
