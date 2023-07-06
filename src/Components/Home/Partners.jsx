import React from 'react'
import styles from '@/styles/Partners.module.css'
import Image from 'next/image';

const Partners = () => {

    const data = [
        {
            img: '/Assets/Partners/edited/2.png',
        },
        {
            img: '/Assets/Partners/edited/3.png',
        },
        {
            img: '/Assets/Partners/edited/4.png',
        },
        {
            img: '/Assets/Partners/edited/5.png',
        },
        {
            img: '/Assets/Partners/edited/6.png',
        },
        {
            img: '/Assets/Partners/edited/7.png',
        },
        //temp
        {
            img: '/Assets/Partners/edited/1.png',
        },
        {
            img: '/Assets/Partners/edited/8.png',
        },
        {
            img: '/Assets/Partners/edited/9.png',
        },
        //
        //Double time
        {
            img: '/Assets/Partners/edited/2.png',
        },
        {
            img: '/Assets/Partners/edited/3.png',
        },
        {
            img: '/Assets/Partners/edited/4.png',
        },
        {
            img: '/Assets/Partners/edited/5.png',
        },
        {
            img: '/Assets/Partners/edited/6.png',
        },
        {
            img: '/Assets/Partners/edited/7.png',
        },
        //temp
        {
            img: '/Assets/Partners/edited/1.png',
        },
        {
            img: '/Assets/Partners/edited/8.png',
        },
        {
            img: '/Assets/Partners/edited/9.png',
        },
    ]

    return (
            <div className={styles.sectionWrap}>
                <div className={styles.title}>Trusted Partners</div>
                <p>An elite list of partners who strengthen our brand promise.</p>
                <div className={styles.cardsContainer}>
                    <div className={styles.cards}>
                        {
                            data.map((item, key) => (
                                <div className={styles.card} key={key}>
                                    <Image width={1000} height={1000} className={styles.image} src={item.img} alt='Images' />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
    )
}

export default Partners