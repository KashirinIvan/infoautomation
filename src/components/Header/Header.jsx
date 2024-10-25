import React from 'react'
import { Logo } from "../Logo/Logo"
import styles from "./Header.module.css"
import { Menu } from '../Menu/Menu'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        {/*  <Logo /> */}
        <h1 className={styles.title}>Системы мониторинга и автоматизации</h1>
      </div>
      <Menu />
    </header>
  )
}
