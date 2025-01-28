'use client'

import styles from './heroBanner.module.css'
import dynamic from 'next/dynamic';


const TypeWriterEffect = dynamic(() => import('react-typewriter-effect'), {
    ssr: false, // Disable SSR for this component
  });



export default function HeroBanner() {
  
  return (
    <section className={styles.section} id='home'>
        <div className='container'>
            <div className={styles.heroMain}>
                <div>
                    <h1><span className={styles.h1Sapn}>Hi, I am</span> Yousuf</h1>
                    <TypeWriterEffect
                        textStyle={{
                        fontFamily: 'poppins',
                        fontWeight: 700,
                        textAlign: 'center',
                        }}
                        wrapperClassName={styles.typewriterText}
                        startDelay={200}
                        cursorColor="transparent"
                        multiText={[
                        'FRONTEND DEVELOPER',
                        'BACKEND DEVELOPER',
                        'NEXT JS DEVELOPER',
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={100}
                    />
                    <div className={styles.gradient}></div>
                </div>
            </div>
        </div>
    </section>
  )
}
