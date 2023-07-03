import styles from '@/styles/Home.module.css'

export const aboutUs = {
    id: 'about',
    title: 'ABOUT US',
    titleColor: 'var(--primary-color)',
    topTitle: false,
    heading: <h1>We’re here to bring your Vision to Life!</h1>,
    content: <p>
        <span className={styles.bigFont} >LOOK AND LIVE</span> creates beautiful and functional living spaces. Our mission is to provide high-quality, aesthetically pleasant, useful, and long-lasting home decor products.We are constantly exploring new ways to reduce our environmental impact and promote sustainable living & find the perfect products for your home.
    </p>,
    subContent: '',
    btnValue: 'Book free consultation',
    imageRight: false,
    imgUrl: require("../../../../public/Assets/aboutUS.png").default,
}
export const residential = {
    id: 'residential',
    title: 'RESIDENTIAL CONSTRUCTION',
    titleColor: 'var(--primary-color)',
    topTitle: true,
    heading: <h1>Creating spaces that inspire and delight.</h1>,
    content: <p>
        Residential construction is the process of expanding, renovating, building a new house or areas designed to be utilised for residential purposes.
    </p>,
    subContent:<h3><ul>
        <li>We are dedicated to provide high-quality construction services that are both timely and cost-effective. To guarantee that your house is built to last, we only utilise the best materials and cutting-edge construction processes.</li>
        <li>We also adhere to all safety standards and regulations to ensure a safe and secure living space for our clients</li>
        <li>Our team of experts will collaborate with you to understand the vision and requirements for your home and create a cohesive and harmonious design. </li>
    </ul></h3>,
    btnValue: '',
    imageRight: false,
    imgUrl: require("../../../../public/Assets/residential.png").default,
}

export const emi = {
    id: 'emi',
    title: 'ATTRACTIVE EMI OPTIONS',
    titleColor: '#fff',
    topTitle: false,
    heading: <h1>Want to book a <span className={styles.highlight}>FREE</span> Consultation session?</h1>,
    content: <h2>Design Now, Pay later</h2>,
    subContent: <h3>
        <p>Putting off your home interiors project because of financial constraints? You don't have to anymore.
            The No Cost EMI facility helps you to pay your monthly EMIs without any additional cost. This means, when repaying your purchase cost, you only have to pay the actual cost of the product without any interest.</p>
        <p>Tenure: 6-24 months. No cost EMI options.</p>
        <p>T&Cs apply</p>
    </h3>,
    btnValue: 'Book now',
    imageRight: false,
    imgUrl: require("../../../../public/Assets/aboutUS.png").default,
}

export const parentCo = {
    id: 'parentCo',
    title: 'OUR PARENT COMPANY',
    titleColor: 'var(--primary-color)',
    topTitle: false,
    heading: <h1>A one stop turnkey solution with unique concepts & ideas.</h1>,
    content: <p>
        Residential construction is the process of expanding, renovating, building a new house or areas designed to be utilised for residential purposes.
    </p>,
    subContent: <h3>Want to know about our <span className={styles.highlight} >parent company</span>?</h3>,
    btnValue: '',
    imageRight: false,
    imgUrl: require("../../../../public/Assets/parentCo.png").default,
}

export const download = {
    id: 'download',
    title: '',
    titleColor: '#000',
    topTitle: false,
    heading: <h1><span className={styles.highlight}>Download</span> home interior designing guide.</h1>,
    content: <p>
        When beginning interior design, don't forget to consider these fundamental design principles.
    </p>,
    subContent: '',
    btnValue: 'Download Now',
    imageRight: true,
    imgUrl: require("../../../../public/Assets/download.png").default,
}