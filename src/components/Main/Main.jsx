import React from 'react'
import styles from './Main.module.css'
import { Cadr } from '../Cadr/Cadr'
import { allProjectList } from '../../constants/allProjectList'

export const Main = () => {
  return (
    <main className={styles.main}>
      {allProjectList.map((project) =>
        <Cadr
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          year={project.year}
          customer={project.customer}
        />)}
    </main>
  )
}
