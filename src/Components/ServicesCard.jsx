import React, { useContext } from 'react'
import styles from '@/styles/Services.module.css'
import Image from 'next/image'
import Button from './Button'
import { BookingContext } from '@/Context'

const ServicesCard = ({ image, title, desc }) => {
    const {setBooking} = useContext(BookingContext)
    return (
        <div className={styles.cardWrap}>
            <Image className={styles.image} src={image} alt='Services' />
            <div className={styles.titleWrap}>
                <h3>{title}</h3>
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div onClick={()=> setBooking(true)} >
                    <Button value='Book free consultation' color='#fff' small={true} />
                </div>
            </div>
        </div>
    )
}

export default ServicesCard