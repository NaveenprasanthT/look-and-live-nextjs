import React from 'react'
import styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import logo from '../../public/Assets/logo.png'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.footerWrap}>
            <main className={styles.main} >
                <div className={styles.logoWrap}>
                    <Image className={styles.logo} src={logo} alt='logo' />
                </div>
                <ul className={styles.navItem}>
                    <Link href='/' className={styles.link}><li>Home</li></Link>
                    <Link href='/AboutUs' className={styles.link}><li>About Us</li></Link>
                    <Link href='/products' className={styles.link}><li>Products</li></Link>
                    <Link href='/#testimonials' className={styles.link}><li>Testimonials</li></Link>
                </ul>
                <div className={styles.content}>
                    <h1>Visit</h1>
                    <p>Ground Floor, 19th Main Rd, 4th Sector, HSR Layout, Bengaluru, Karnataka 560102</p>
                </div>
                <div className={styles.content}>
                    <h1>Contact Us</h1>
                    <p>9844000873</p>
                    <p>info@chargeinfra.in</p>
                </div>
            </main>
            <div className={styles.copyRight}></div>
        </div>
    )
}

export default Footer