import React from 'react'
import styles from "./Footer.module.css"

export const Footer = () => {
    return (
        <footer>
            <div className={styles.line}></div>
            <div className={styles.footer}>
                <a href="tel:+7 (962) 827-15-24">
                    <img
                        className={styles.footerPhone}
                        src='/Phone.png'
                        alt='Иконка Телефона'
                    />
                </a>

                <a href="https://t.me/Ivan_Andreevich_Kashirin">
                    <img
                        className={styles.footerIcon}
                        src='/TG.svg'
                        alt='Иконка Телеграм'
                    />
                </a>

                <a href="mailto:info@infoautomation.ru">
                    <img
                        className={styles.footerIcon}
                        src="/Email.svg"
                        alt='Иконка почты'
                    />
                </a>
            </div>
        </footer>
    )
}
