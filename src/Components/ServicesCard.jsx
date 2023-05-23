import React from 'react'
import styles from '@/styles/Services.module.css'
import Image from 'next/image'
import Button from './Button'

const ServicesCard = ({ image, title, desc }) => {
    return (
        <div className={styles.cardWrap}>
            <Image width={400} height={400} className={styles.image} src={image} alt='Services' />
            <div className={styles.titleWrap}>
                <h3>{title}</h3>
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Button value='Book free consultation' color='#fff' small={true} />
            </div>
        </div>
    )
}

export default ServicesCard