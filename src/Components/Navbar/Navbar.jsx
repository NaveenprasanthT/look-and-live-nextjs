import React, { useState, useEffect, useRef } from 'react'
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
        if (window.scrollY >= 150) {
            setColorchange(true);

        }
        else {
            setColorchange(false);
        }
    };
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', changeNavbarColor);
    }

    const navbarHeightRef = useRef(null);
    const handleClick = (e, id) => {
        e.preventDefault();
        
        const element = document.getElementById(id);
        if (element) {
          const offset = element.offsetTop - navbarHeightRef.current.clientHeight - (window.innerHeight * 0.01);
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      };



    return (
        <>
            <div className={styles.headerWrap}  ref={navbarHeightRef} style={{opacity: colorChange ? '0.85' : '1'}}>
                <div className={styles.logo}>
                    <Link href='/'>
                        <Image src={logo}
                            alt='logo'
                            height={50}
                            style={{objectFit: 'contain'}}
                        />
                    </Link>
                </div>
                <ul className={styles.navItem}> 
                <div onClick={(e) => handleClick(e,"home")} className={styles.link}><li>Home</li></div>
                    <div onClick={(e) => handleClick(e,"about")} className={styles.link}><li>About Us</li></div>
                    <div onClick={(e) => handleClick(e,"services")} className={styles.link}><li>Services</li></div>
                    <div onClick={(e) => handleClick(e,"testimonials")} className={styles.link}><li>Testimonials</li></div>
                </ul>
                <Link href='tel:+919844000873'  >
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