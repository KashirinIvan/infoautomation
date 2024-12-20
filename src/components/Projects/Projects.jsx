import React from 'react'
import { useParams } from 'react-router-dom'
import styles from "./Projects.module.css"

export const Projects = ({ projectList }) => {
    let { id } = useParams();
    const project = projectList.find((project) => project.id === Number(id));
        return (
            <div className={styles.project}>
                <h3>{project.title}</h3>
                <h4>Описание проекта</h4>
                <p className={styles.descriptionAll}>{project.descriptionAll}</p>
                <img className={styles.image} src={project.image} alt={`${project.title}`} />
                <p>Год: {project.year}</p>
            </div>
        )
}
