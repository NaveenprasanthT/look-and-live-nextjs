import React from 'react'
import styles from '@/styles/Testimonials.module.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import star from '../../../public/Assets/icons/star.svg'
import img from '../../../public/Assets/icons/bg_pattern_rotate.png'


const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true, // enable autoplay
        autoplaySpeed: 2000, // set the autoplay speed to 3 seconds
        pauseOnHover: true,
    };
    const slides = [
        <div className={styles.cardWrap}>
            <div className={styles.imageWrap}>
                <Image className={styles.image} src={img} alt='image' />
            </div>
            <div className={styles.contentWrap}>
                <div className={styles.title}>TESTIMONIALS</div>
                <h1>Supriya Shrivastava</h1>
                <h4>Chief Branding Producer</h4>
                <div className={styles.icons}>
                    <Image src={star}  style={{color: 'red'}} />
                    <Image src={star}  style={{color: 'red'}} />
                    <Image src={star}  style={{color: 'red'}} />
                    <Image src={star}  style={{color: 'red'}} />
                    <Image src={star}  style={{color: 'red'}} />
                </div>
                <div className={styles.review}>
                    I recently had my kitchen renovated and I am extremely satisfied with the result. The team was professional, efficient with me to design a kitchen that was tailored to my needs and preferences. The quality of the materials used and the craftsmanship of the installation were outstanding. The end result is a beautiful, functional, and modern kitchen that has transformed the heart of my home.
                </div>
            </div>
        </div>,
        <div className={styles.cardWrap}>
            <div className={styles.imageWrap}>
                <Image className={styles.image} src={img} alt='image' />
            </div>
            <div className={styles.contentWrap}>
                <div className={styles.title}>TESTIMONIALS</div>
                <h1>Supriya Shrivastava</h1>
                <h4>Chief Branding Producer</h4>
                <div className={styles.icons}>
                    <Image src={star}  style={{color: 'red'}} />
                    <Image src={star}  style={{color: 'red'}} />
                    <Image src={star}  style={{color: 'red'}} />
                    <Image src={star}  style={{color: 'red'}} />
                    <Image src={star}  style={{color: 'red'}} />
                </div>
                <div className={styles.review}>
                    I recently had my kitchen renovated and I am extremely satisfied with the result. The team was professional, efficient with me to design a kitchen that was tailored to my needs and preferences. The quality of the materials used and the craftsmanship of the installation were outstanding. The end result is a beautiful, functional, and modern kitchen that has transformed the heart of my home.
                </div>
            </div>
        </div>,
        <div className={styles.cardWrap}>
            <div className={styles.imageWrap}>
                <Image className={styles.image} src={img} alt='image' />
            </div>
            <div className={styles.contentWrap}>
                <div className={styles.title}>TESTIMONIALS</div>
                <h1>Supriya Shrivastava</h1>
                <h4>Chief Branding Producer</h4>
                <div className={styles.icons}>
                    <Image src={star}  style={{color: 'red'}} />
                    <Image src={star}  style={{color: 'red'}} />
                    <Image src={star}  style={{color: 'red'}} />
                    <Image src={star}  style={{color: 'red'}} />
                    <Image src={star}  style={{color: 'red'}} />
                </div>
                <div className={styles.review}>
                    I recently had my kitchen renovated and I am extremely satisfied with the result. The team was professional, efficient with me to design a kitchen that was tailored to my needs and preferences. The quality of the materials used and the craftsmanship of the installation were outstanding. The end result is a beautiful, functional, and modern kitchen that has transformed the heart of my home.
                </div>
            </div>
        </div>,
    ]
    return (
        <div className={styles.sectionWrap}>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        {slide}
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Testimonials