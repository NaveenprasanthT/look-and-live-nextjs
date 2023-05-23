import React, { useState, useEffect } from 'react'
import { MobileView, LogoWrapMobile, LogoMobile, Hamburger } from './NavbarElement'
import { GrClose } from 'react-icons/gr'
import styles from '@/styles/Navbar.module.css'
import logo from '../../../public/Assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import Image from 'next/image'
import Link from 'next/link'
import SlideBar from './SlideBar'
import Button from '../Button'

const Header = () => {
    const [colorChange, setColorchange] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const changeNavbarColor = () => {
        if (window.scrollY >= 20) {
            setColorchange(true);

        }
        else {
            setColorchange(false);
        }
    };
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', changeNavbarColor);
    }



    return (
        <>
            <div className={styles.headerWrap}>
                <div className={styles.logo}>
                    <Link href='/'>
                        <Image src={logo}
                            alt='logo'
                            height={50}
                        />
                    </Link>
                </div>
                <ul className={styles.navItem}>
                    <Link href='/' className={styles.link}><li>Home</li></Link>
                    <Link href='/AboutUs' className={styles.link}><li>About Us</li></Link>
                    <Link href='/products' className={styles.link}><li>Products</li></Link>
                    <Link href='/#testimonials' className={styles.link}><li>Testimonials</li></Link>
                </ul>
                <Link href='/EnquiryForm'  >
                    <Button value='Contact' color='#000' small={true} />
                </Link>

                {/* mobileView */}
            </div>
            <div className={styles.mobileView}>
                <MobileView colorChange={colorChange} >
                    <LogoWrapMobile onClick={() => HandleHome()} href='/' >
                        <LogoMobile src={logo} alt="Logo" />
                    </LogoWrapMobile >
                    <Hamburger onClick={() => setIsOpen(!isOpen)} >
                        {isOpen ? <GrClose /> : <GiHamburgerMenu />}
                    </Hamburger>
                </MobileView>
                <SlideBar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </>
    )
}

export default Header