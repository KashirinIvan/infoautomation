import React from 'react'
import { Link } from 'react-router-dom'

export const ProjectsList = ({ projectList }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" ,}}>
            {
                projectList.map((project) => (<Link to={`${project.id}`}>{project.title}</Link>))
            }
        </div>
    )
}
