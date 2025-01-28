'use client'

import styles from './about.module.css'
// import Image from 'next/image';
import Card from './card';



export default function About() {
  return (
    <section className={styles.section} id='about'>
        <div className="container">
            <div className={styles.aboutMain}>
                <h2>Lets Know <span className={styles.h2Span}>About Me</span></h2>

                <p className={styles.para}>I&apos;m a passionate Full Stack Developer with expertise in WordPress
                 and Next.js. I specialize in building dynamic, responsive, and user-friendly
                 websites, blending creativity with robust functionality to deliver exceptional digital experiences.</p>

                 <div className={styles.cardMain}>
                    <Card />
            </div>
            </div>
        </div>
    </section>
  )
}
