import React from 'react';
import Link from "next/link";
import styles from '../styles/ProjectBox.module.scss';

import TechItem from './TechItem';

interface ProjectBoxProps {
    slug: string;
    projectType: string;
    projectDate: string;
    projectTitle: string;
    techs: string[];
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ slug, projectType, projectDate, projectTitle, techs }) => {
    return (
        <div className={styles.box} key={slug}>
            <div className={styles.header}>
                <p>{projectType}</p>
                <p>{projectDate}</p>
            </div>
            <div className={styles.title}>
                <Link href={`api/posts/${slug}`}>
                    <p>{projectTitle}</p>
                </Link>
            </div>
            <div className={styles.footer}>
                {techs.map((tech: string) => (
                    <TechItem tech={tech} key={tech} />
                ))}
            </div>
        </div>
    )
};

export default ProjectBox;