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
                    <Link href='/#about' className={styles.link}><li>About Us</li></Link>
                    <Link href='/#services' className={styles.link}><li>Services</li></Link>
                    <Link href='/#work' className={styles.link}><li>Our Work</li></Link>
                    <Link href='/#testimonials' className={styles.link}><li>Testimonials</li></Link>
                    <Link href='/Privacy-Policy' className={styles.linkPhone} style={{textDecoration:'none',color:'#fff'}}><li>Privacy Policy</li></Link>
                    <Link href='/Terms-Condition' className={styles.linkPhone} style={{textDecoration:'none',color:'#fff'}}><li>Terms & Conditions</li></Link>
                </ul>
                {/*<div className={styles.content}>
                    <h1>Visit</h1>
                    <Link className={styles.contactLink} target="_blank" href='https://goo.gl/maps/riTkqLVJgaN5K9ws6' > <p>Ground Floor, 19th Main Rd, 4th Sector, HSR Layout, Bengaluru, Karnataka 560102</p></Link>
                </div>
                <div className={styles.content}>
                    <h1>Contact Us</h1>
                    <Link className={styles.contactLink} href='tel:+919844000873'><p>+91 9844000873</p></Link>
                    <Link className={styles.contactLink} href='mailto:info@chargeinfra.in'><p>info@chargeinfra.in</p></Link>
                </div>*/}
            </main>
            <div className={styles.copyRight}>
                <ul>
                    <Link href='/Privacy-Policy' className={styles.copyRightLink} style={{textDecoration:'none',color:'#fff'}}><li>Privacy Policy</li></Link>
                    <Link href='/Terms-Condition' className={styles.copyRightLink} style={{textDecoration:'none',color:'#fff'}}><li>Terms & Conditions</li></Link>
                    <li className={styles.copyRightLink}>©2023, Look & Live, all rights reserved </li>
                    <li className={styles.linkPhone} style={{fontSize:'12px'}}>©2023, Look & Live, all rights reserved </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer