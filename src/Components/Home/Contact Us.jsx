import React from 'react'
import styles from '@/styles/ContactUs.module.css'
import { BsTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import Image from 'next/image'

const ContactUs = () => {

    const cities = [
        {
            name: 'Pune',
            img: require('../../../public/Assets/ContactUs/contactimg1.png'),
        },
        {
            name: 'Chennai',
            img: require('../../../public/Assets/ContactUs/contactimg2.png'),
        },
        {
            name: 'Mysore',
            img: require('../../../public/Assets/ContactUs/contactimg3.png'),
        },
        {
            name: 'Hyderabad',
            img: require('../../../public/Assets/ContactUs/contactimg4.png'),
        },
        {
            name: 'Kolkata',
            img: require('../../../public/Assets/ContactUs/contactimg5.png'),
        },
    ]

    return (
        <div className={styles.sectionWrap} id='contact'>
            <div className={styles.topSection}>
                <h2>CONTACT US</h2>
                <p>Reach Out to Our Team of Professional Interior Designers</p>
                <div className={styles.phoneEmail}>
                    <div className={styles.wrap}>
                        <BsTelephoneFill className={styles.icon} />
                        <div className={styles.wrapText}>9844000873</div>
                    </div>
                    <div className={styles.wrap}>
                        <GrMail className={styles.icon} />
                        <div className={styles.wrapText}>info@chargeinfra.com</div>
                    </div>
                </div>
            </div>
            <div className={styles.bottomSection}>
                <div className={styles.mapWrap}>
                    <div className={styles.mapContent}>
                        <h6>LOOK & LIVE</h6>
                        <p>Charge Infra -HSR<br />Ground Floor, 19th Main Rd, 4th Sector, HSR Layout, Bengaluru, Karnataka 560102</p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.850017709486!2d77.6421349742329!3d12.917359587393033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1571554566a9%3A0x8b2d3278751d1631!2sCharge%20Infra%20-HSR!5e0!3m2!1sen!2sin!4v1688390347040!5m2!1sen!2sin" style={{ border: 'none', borderRadius: '8px', }} width="98%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div style={{width:'100%'}}>
                <h4>accessible cities</h4>
                <div className={styles.cityContainer}>
                    {
                        cities.map((item, key) => (
                            <div className={styles.card} key={key}>
                                <Image width={1000} height={1000} className={styles.image} src={item.img} alt='Images' />
                                <div className={styles.content}>{item.name}</div>
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs