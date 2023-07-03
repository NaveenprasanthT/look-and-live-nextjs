import React, { useContext } from 'react'
import styles from '@/styles/WhyUs.module.css'
import Image from 'next/image';
import { BookingContext } from '@/Context';

const WhyUs = () => {
    const { setBooking } = useContext(BookingContext);
    const row1 = [
        {
            number: '05+',
            text: 'Years Experience',
            img: require('../../../public/Assets/icons/choose1.png'),
        },
        {
            number: '100+',
            text: 'Projects Delivered',
            img: require('../../../public/Assets/icons/choose2.png'),
        },
        {
            number: '50+',
            text: 'Skilled interior designer',
            img: require('../../../public/Assets/icons/choose3.png'),
        },
        {
            number: '200+',
            text: 'Workforce',
            img: require('../../../public/Assets/icons/choose4.png'),
        },
        {
            number: '09+',
            text: 'Cities',
            img: require('../../../public/Assets/icons/choose5.png')
        },
        {
            number: '100%',
            text: 'Transparent Pricing',
            img: require('../../../public/Assets/icons/choose5.png'),
        },
    ]

    const data = [
        {
            title: 'Warranty',
            content: <ul>
                <li>Quality that lasts a decade, guaranteed.</li>
                <li>Maximize your investment with our 1-year on-site service warranty.</li>
            </ul>
        },
        // {
        //     title: 'Technology & Science',
        //     content: <ul>
        //         <li>AquaBloc® Technology - Hermetically sealed edges that ensure no moisture enters the panels of your modular cabinets.</li>
        //         <li>AntiBubble® Technology - Super seamless panels without air bubbles for your modular cabinets.</li>
        //         <li>DuraBuild™ Technology - Robust structure for modular cabinets, making them strong andlong-lasting.</li>
        //         <li>Design Science - Modular kitchens with improved accessibility that makes daily tasks more efficient and reduces stress on the body.</li>
        //     </ul>
        // },
    ]

    return (
        <div className={styles.SectionWrap} id='about'>
            <div className={styles.HeaderContainer}>
                <h1>ABOUT US</h1>
                <h2>We’re here to bring your Vision to Life!</h2>
                <p>LOOK AND LIVE creates beautiful and functional living spaces. Our mission is to provide high-quality, aesthetically pleasant, useful, and long-lasting home decor products.We are constantly exploring new ways to reduce our environmental impact and promote sustainable living & find the perfect products for your home.</p>
            </div>
            <div className={styles.row1}>
                {
                    row1.map((item, key) => (
                        <div className={styles.iconWrap} key={key} >
                            <Image className={styles.icon} src={item.img} alt='image' width={1000} height={1000}/>
                            <div className={styles.contentWrap}>
                                <div className={styles.number}>{item.number}</div>
                                <div className={styles.text}>{item.text}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className={styles.aboutUsBtn} onClick={() => setBooking(true)}>Book Free Consultation</button>
            <div className={styles.warranty}>
                {
                    data.map((item, key) => (
                        <div className={styles.content} key={key} >
                            <div className={styles.title}>{item.title}</div>
                            <div>{item.content}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WhyUs