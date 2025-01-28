import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className='container'>
            <div className={styles.footerMain}>
                <div className={styles.footerDiv1}>
                <Link href='/'>
                <Image 
                src='/logo.svg'
                alt='footer logo'
                width={250}
                height={100}
                />
                </Link>
                </div>
                <div className={styles.footerDiv2}>
                    <h3 className={styles.foooterh3}>Quick Links</h3>
                    <ul>
                        <li><Link href='#home'>Home</Link></li>
                        <li><Link href='#about'>About</Link></li>
                        <li><Link href='#services'>Services</Link></li>
                        <li><Link href='#contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className={styles.footerDiv3}>
                    <h3 className={styles.foooterh3}>Social Links</h3>
                    <div className={styles.emailBox}>
                                <div className={styles.EmailIcon}>
                                    <Image
                                    src='/phone.svg'
                                    alt='mail'
                                    width={25}
                                    height={25}
                                     />
                                </div>
                                <div>
                                <h3 className={styles.emailh3}><Link href='tel:+923208821661'>Phone</Link></h3>
                                </div>
                                
                    </div>
                    <div className={styles.emailBox}>
                                <div className={styles.EmailIcon}>
                                    <Image
                                    src='/instagram.svg'
                                    alt='mail'
                                    width={25}
                                    height={25}
                                     />
                                </div>
                                <div>
                                <h3 className={styles.emailh3}><Link href='https://www.instagram.com/ch_yousuf_/'>Instagram</Link></h3>
                                </div>
                                
                    </div>
                    <div className={styles.emailBox}>
                                <div className={styles.EmailIcon}>
                                    <Image
                                    src='/linkdin.svg'
                                    alt='mail'
                                    width={25}
                                    height={25}
                                     />
                                </div>
                                <div>
                                <h3 className={styles.emailh3}><Link href='https://www.linkedin.com/in/m-yousuf-3b2303323/'>LinkDin</Link></h3>
                                </div>
                                
                    </div>
                </div>

                {/* <div className={styles.footerDiv4}>
                    <h3>Privacy Policy</h3>
                    <h3>Ter</h3>
                </div> */}

            </div>
        </div>
    </footer>
  )
}
