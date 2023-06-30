import React from 'react'
import styles from '@/styles/WhyUs.module.css'
import Image from 'next/image'


const WhyUs = () => {

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
    ]
    const row2 = [
        {
            number: '05+',
            text: 'Years Experience',
            img: require('../../../public/Assets/icons/choose4.png'),
        },
        {
            number: '100+',
            text: 'Projects Delivered',
            img: require('../../../public/Assets/icons/choose5.png')
        },
        {
            number: '50+',
            text: 'Skilled interior designer',
            img: require('../../../public/Assets/icons/choose5.png'),
        },
        {
            number: '50+',
            text: 'Skilled interior designer',
            img: require('../../../public/Assets/icons/choose7.png')
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
        <div className={styles.SectionWrap}>
            <div className={styles.title}>Why Choose Us?</div>
            <div className={styles.row1}>
                {
                    row1.map((item, key) => (
                        <div className={styles.iconWrap} key={key} >
                            <Image className={styles.icon}  src={item.img} alt='image' />
                            <div className={styles.contentWrap}>
                                <div className={styles.number}>{item.number}</div>
                                <div className={styles.text}>{item.text}</div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className={styles.row2}>
                {
                    row2.map((item, key) => (
                        <div className={styles.iconWrap} key={key} >
                            <Image className={styles.icon} src={item.img} alt='image' />
                            <div className={styles.contentWrap}>
                                <div className={styles.number}>{item.number}</div>
                                <div className={styles.text}>{item.text}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
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