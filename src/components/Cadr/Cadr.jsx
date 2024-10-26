import React from 'react'
import styles from './Cadr.module.css'

export const Cadr = ({ title, description, image, year, customer }) => {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{description}</p>
            <img className={styles.image} src={image} alt={`${title}`} />
            <p>Год: {year}</p>
            <p>Заказчик: {customer}"</p>
        </div>
    )
}
