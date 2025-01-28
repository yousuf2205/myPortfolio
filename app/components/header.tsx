'use client'

import styles from "./header.module.css"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Header() {
    const [isActive, setIsActive] = useState(false);

    //add the active class
    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
  
    //clean up function to remove the active class
    const removeActive = () => {
      setIsActive(false)
    }
    return (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.headerMain}>
                <div className={styles.logo}>
                    <Link href='/'>
                    <Image
                    src='/logo.svg'
                    alt="logo"
                    width={230}
                    height={100}
                     /></Link>

                </div>

            <nav className={`${styles.navbar}`}>
                <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                    <li onClick={removeActive}>
                    <Link href='#home' className={`${styles.navLink}`}>Home</Link>
                    </li>
                    <li onClick={removeActive}>
                    <Link href='#about' className={`${styles.navLink}`}>About</Link>
                    </li>
                    <li onClick={removeActive}>
                    <Link href='#services' className={`${styles.navLink}`}>Services</Link>
                    </li>
                    <li onClick={removeActive} className={styles.contact}>
                    <Link href='#contact' className={`${styles.navLink}`}>Contact</Link>
                    </li>
                    </ul>

                    <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
                    <span className={`${styles.bar}`}></span>
                    <span className={`${styles.bar}`}></span>
                    <span className={`${styles.bar}`}></span>
                </div>
            </nav>
            <div className={styles.btn}>
                <Link href='#contact'><button>Contact</button></Link>
            </div>
        </div>
        </div>
    </header>
  )
}
