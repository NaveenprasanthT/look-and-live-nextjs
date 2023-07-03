import React from 'react'
import styles from '@/styles/Services.module.css'
import ServicesCard from '../ServicesCard'

const Services = () => {


    const servicesData = [
        {
            title: 'Modular Design',
            desc: 'Customized cooking spaces for you.',
            image: require('../../../public/Assets/Services/1st.png')
        },
        {
            title: 'Lighting',
            desc: 'Brighten up your space with elegance.',
            image: require('../../../public/Assets/Services/3rd.png')
        },
        {
            title: 'Flooring',
            desc: 'Create your dream space with stylish flooring.',
            image: require('../../../public/Assets/Services/4th.png')
        },
        {
            title: 'False ceiling',
            desc: 'Style your ceiling with modern touch.',
            image: require('../../../public/Assets/Services/5th.png')
        },
        {
            title: 'Civil Work',
            desc: 'Strong foundations for lasting communities.',
            image: require('../../../public/Assets/Services/7th.png')
        },
        {
            title: 'Wall design & painting',
            desc: 'Make your walls a work of art.',
            image: require('../../../public/Assets/Services/8th.png')
        },
        {
            title: 'Conceptualization',
            desc: 'The art of visualizing the future.',
            image: require('../../../public/Assets/Services/9th.png')
        },
        {
            title: '3D Visualization',
            desc: 'Visualize your ideas like never before.',
            image: require('../../../public/Assets/Services/14th.png')
        },
    ]


    return (
        <div className={styles.SectionWrap} id='services'  >
            <div className={styles.title}>Services We Deliver</div>
            <p>Transform your home with our expert solutions.</p>
            <div className={styles.cards}>
                {
                    servicesData.map((item, key) => (
                        <ServicesCard key={key} title={item.title} desc={item.desc} image={item.image} alt={item.title} />
                    ))
                }
            </div>
        </div>
    )
}

export default Services