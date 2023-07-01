import React, { useState, useEffect, useContext } from 'react'
import styles from '@/styles/HeroSection.module.css'
import Image from 'next/image';
import Button from '../Button';
import { BookingContext } from '@/Context';
// import img from '../../../public/Assets/HomeSlider'


const HeroSection = () => {

    const { setBooking } = useContext(BookingContext);

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        '/Assets/HomeSlider/S1.png',
        '/Assets/HomeSlider/S2.png',
        '/Assets/HomeSlider/S3.png',
        '/Assets/HomeSlider/S4.png',
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            const lastIndex = images.length - 1;
            const shouldResetIndex = currentIndex === lastIndex;
            const index = shouldResetIndex ? 0 : currentIndex + 1;
            setCurrentIndex(index);
        }, 3000); // Transition every 3 seconds

        return () => {
            clearInterval(timer);
        };
    }, [currentIndex, images.length]);

    if (images.length === 0) {
        return <div>No images to display</div>;
    }

    return (
        <div className={styles.SectionWrap} id='home'>
            <Image className={styles.image} width={400} height={100} src={images[currentIndex]} alt="Slider Image" />
            <div className={styles.content}>
                <p style={{ color: 'var(--primary-color)' }} >ARCHITECTURE DESIGN</p>
                <h1>Elevate your space with style.</h1>
                <p>We enhance the appearance and overall ambiance of a living space by adding elements of style, design, and sophistication.</p>
                <div onClick={()=> setBooking(true)}>
                <Button value='Book free consultation' color='#fff' />
                </div>
            </div>
        </div>
    )
}


export default HeroSection