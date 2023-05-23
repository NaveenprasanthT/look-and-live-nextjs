import React from 'react'
import styles from '@/styles/Services.module.css'
import ServicesCard from '../ServicesCard'


const Services = () => {


    const servicesData = [
        {
            title: 'Civil Work',
            desc: 'Strong foundations for lasting communities.',
            image: '/Assets/Services/1st.png'
        },
        {
            title: 'Civil Work',
            desc: 'Strong foundations for lasting communities.',
            image: '/Assets/Services/2nd.png'
        },
        {
            title: 'Civil Work',
            desc: 'Strong foundations for lasting communities.',
            image: '/Assets/Services/3rd.png'
        },
        {
            title: 'Civil Work',
            desc: 'Strong foundations for lasting communities.',
            image: '/Assets/Services/4th.png'
        },
        {
            title: 'Civil Work',
            desc: 'Strong foundations for lasting communities.',
            image: '/Assets/Services/5th.png'
        },
        {
            title: 'Civil Work',
            desc: 'Strong foundations for lasting communities.',
            image: '/Assets/Services/6th.png'
        },
        {
            title: 'Civil Work',
            desc: 'Strong foundations for lasting communities.',
            image: '/Assets/Services/7th.png'
        },
        {
            title: 'Civil Work',
            desc: 'Strong foundations for lasting communities.',
            image: '/Assets/Services/8th.png'
        },
        {
            title: 'Civil Work',
            desc: 'Strong foundations for lasting communities.',
            image: '/Assets/Services/9th.png'
        },
        {
            title: 'Civil Work',
            desc: 'Strong foundations for lasting communities.',
            image: '/Assets/Services/10th.png'
        },
        {
            title: 'Civil Work',
            desc: 'Strong foundations for lasting communities.',
            image: '/Assets/Services/11th.png'
        },
        {
            title: 'Civil Work',
            desc: 'Strong foundations for lasting communities.',
            image: '/Assets/Services/12th.png'
        },
    ]


    return (
        <div className={styles.SectionWrap}>
            <div className={styles.title}>Services We Deliver</div>
            <p>Transform your home with our expert solutions.</p>
            <div className={styles.cards}>
                {
                    servicesData.map((item, key) => (
                        <ServicesCard key={key} title={item.title} desc={item.desc} image={item.image} />
                    ))
                }
            </div>
        </div>
    )
}

export default Services