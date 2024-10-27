import React from 'react'
import styles from './Cadr.module.css'
import { Link } from 'react-router-dom'

export const Cadr = ({id, title, description, image, year, customer }) => {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{description}</p>
            <img className={styles.image} src={image} alt={`${title}`} />
            <p>Год: {year}</p>
            <button><Link to={`/projects/${id}`} className={styles.button}>Подробнее</Link></button>
        </div>
    )
}
