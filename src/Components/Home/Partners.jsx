import React from 'react'
import styles from '@/styles/Partners.module.css'
import Image from 'next/image'

const Partners = () => {

    const data = [
        {
            img: '/Assets/Partners/ap.png',
        },
        {
            img: '/Assets/Partners/bulidtrack.png',
        },
        {
            img: '/Assets/Partners/elica.png',
        },
        {
            img: '/Assets/Partners/greenply.png',
        },
        {
            img: '/Assets/Partners/Layer1.png',
        },
    ]

    return (
        <div className={styles.sectionWrap}>
            <div className={styles.sectionWrap}>
                <div className={styles.title}>Trusted Partners</div>
                <p>An elite list of partners who strengthen our brand promise.</p>
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