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
                <h1>Mr. Anurag</h1>
                <div className={styles.icons}>
                    <Image src={star} style={{ color: 'red' }} />
                    <Image src={star} style={{ color: 'red' }} />
                    <Image src={star} style={{ color: 'red' }} />
                    <Image src={star} style={{ color: 'red' }} />
                    <Image src={star} style={{ color: 'red' }} />
                </div>
                <div className={styles.review}>
                    By designing every room from top to bottom, Look & Live turned my new one-bedroom conversion into a stunning, useful, and extremely comfortable living space. They provided mood boards and 3D designs to help visualize the layout, provided their own inspirational suggestions after listening to my initial ideas, and assisted in narrowing down the options so that I was never overwhelmed with too many choices. Throughout, it was a pleasure to work with Look & Live because of their friendliness, enthusiasm, originality, and adaptability. I would hire them again for my next project without hesitation.                </div>
            </div>
        </div>,
        <div className={styles.cardWrap}>
            <div className={styles.imageWrap}>
                <Image className={styles.image} src={img} alt='image' />
            </div>
            <div className={styles.contentWrap}>
                <div className={styles.title}>TESTIMONIALS</div>
                <h1>Mrs. Tanu</h1>
                <div className={styles.icons}>
                    <Image src={star} style={{ color: 'red' }} />
                    <Image src={star} style={{ color: 'red' }} />
                    <Image src={star} style={{ color: 'red' }} />
                    <Image src={star} style={{ color: 'red' }} />
                    <Image src={star} style={{ color: 'red' }} />
                </div>
                <div className={styles.review}>
                    The experience of working with Look & Live was fantastic! They created a space that was both beautifully designed and functional by combining our concepts and vision for our villa with their expertise. Our expectations were met. The care that they take with even the tiniest details is just one aspect of Look & Live. Our family is extremely pleased with the Look & Live service. If you're looking for interior work, we personally would highly recommend Look & Live.
                </div>
            </div>
        </div>,
        <div className={styles.cardWrap}>
            <div className={styles.imageWrap}>
                <Image className={styles.image} src={img} alt='image' />
            </div>
            <div className={styles.contentWrap}>
                <div className={styles.title}>TESTIMONIALS</div>
                <h1>Mr. Deekshith</h1>
                <div className={styles.icons}>
                    <Image src={star} style={{ color: 'red' }} />
                    <Image src={star} style={{ color: 'red' }} />
                    <Image src={star} style={{ color: 'red' }} />
                    <Image src={star} style={{ color: 'red' }} />
                    <Image src={star} style={{ color: 'red' }} />
                </div>
                <div className={styles.review}>
                    We knew we had found what we were looking for when we first met the Look & Live team: a group of young, thoughtful, and enthusiastic designers. Also, as we quickly discovered to be skilled and effective. However, their capacity to listen to our story, who we were, and what we had in mind for the penthouse we had just acquired, was what most impressed us. From that point on, they were able to come up with a beautiful idea that captured the essence of our vision. The rest was hard work, talent, and creativity, and the result was excellent.
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