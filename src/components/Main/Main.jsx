import React from 'react'
import styles from './Main.module.css'
import { Cadr } from '../Cadr/Cadr'
import { projectList } from '../../constants/projectList'

export const Main = () => {
  return (
    <main className={styles.main}>
      {projectList.map((project) =>
        <Cadr
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          year={project.year}
          customer={project.customer}
        />)}
    </main>
  )
}
