import styles from './services.module.css'
import Image from 'next/image'

export default function Services() {
  return (
    <section className={styles.section} id='services'>
        <div className="container">
        <h2 className={styles.h2Services}>Services</h2>
            <div className={styles.servicesMain}>
                
                <div className={styles.box}>
                    <Image
                    src='/Frontend.svg'
                    alt='html css logo'
                    width={70}
                    height={70}
                     />
                    <h3>Frontend Developer</h3>
                    <p>Crafting interactive, user-friendly web experiences</p>
                </div>
                <div className={styles.box}>
                    <Image
                    src='/Backend.svg'
                    alt='html css logo'
                    width={70}
                    height={70}
                     />
                    <h3>Backend Developer</h3>
                    <p>Building secure & scalable server-side solutions.</p>
                </div>
                <div className={styles.box}>
                    <Image
                    src='/Wordpress.svg'
                    alt='html css logo'
                    width={70}
                    height={70}
                     />
                    <h3>Wordpress Developer</h3>
                    <p>Crafting dynamic, user-friendly websites.</p>
                </div>
                <div className={styles.box}>
                    <Image
                    src='/nextjs.svg'
                    alt='html css logo'
                    width={75}
                    height={75}
                     />
                    <h3>Next JS Developer</h3>
                    <p>Creating fast, modern web apps.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
