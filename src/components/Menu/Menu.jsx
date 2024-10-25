import React from 'react'
import "./Menu.css"
import { NavLink } from 'react-router-dom'

export const Menu = () => {
    return (
        <nav>
            <ul style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "center",
                gap: "25px",
            }}>
                <li><NavLink to='/' className={({ isActive }) =>
                    `${isActive ? "active" : ""}`}>Главная</NavLink></li>
                <li><NavLink to='/about-us'>О нас</NavLink></li>
                <li><NavLink to='/contacts'>Контакты</NavLink></li>
            </ul>
        </nav>
    )
}
