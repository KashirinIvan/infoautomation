import React from 'react'
import { useParams } from 'react-router-dom'
import styles from "./Projects.module.css"

export const Projects = ({ projectList }) => {
    let { id } = useParams();
    const project = projectList.find((project)=>project.id===Number(id));
    console.log(project);
    return (
        <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img className={styles.image} src={project.image} alt={`${project.title}`} />
            <p>Год: {project.year}</p>
            <p>Заказчик: {project.customer}"</p>
        </div>
    )
}