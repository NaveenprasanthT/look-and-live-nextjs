import React from 'react'
import styles from '@/styles/HowItWorks.module.css'
import Image from 'next/image'

const HowItWorks = () => {

    const data = [
        {
            img: '/Assets/work/workimg1.png',
            content: 'Meet a designer'
        },
        {
            img: '/Assets/work/workimg2.png',
            content: 'Book a renovation 5% Payment'
        },
        {
            img: '/Assets/work/workimg3.png',
            content: 'Execution begins 50% Payment'
        },
        {
            img: '/Assets/work/workimg4.png',
            content: 'Final Installations 100% Payment'
        },
        {
            img: '/Assets/work/workimg5.png',
            content: 'Move in and enjoy!'
        },
    ]

    return (
        <div className={styles.sectionWrap} id='work'>
            <div className={styles.title}>How It Works</div>
            <div className={styles.cards}>
                {
                    data.map((item, key) => (
                        <div className={styles.card} key={key}>
                            <Image width={1000} height={1000} className={styles.image} src={item.img} alt='Images' />
                            <div className={styles.content}>{item.content}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HowItWorks