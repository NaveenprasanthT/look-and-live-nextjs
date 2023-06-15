import React, { useContext, useState } from 'react'
import styles from '@/styles/DownloadPopup.module.css'
import { GrClose } from 'react-icons/gr'
import Button from './Button';
import { BookingContext } from '@/Context';

const Booking = () => {
    const { setBooking } = useContext(BookingContext);
    const [active, setActive] = useState("Form")
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneno, setPhoneno] = useState('')



    const handleSubmit = () => {
        setActive('thank you')
    }


    const Thankyou = () => {
        return (
            <div className={styles.QuizeWrap}>
                <div className={styles.thanksText}>
                    Thank you for Booking
                </div>
                {/* <div className={styles.downloadAgain}>
                    Your download should start
                    automatically, if not <span style={{ color: 'var(--primary-)' }} >click here</span>.
                </div> */}
                <div className={styles.msg}>
                    We will get back to you shortly.
                </div>
                <div className={styles.quizBtn} onClick={() => setBooking(false)} >
                    <Button  value='Close' color='#000' />
                </div>
            </div>
        )
    }


    return (
        <>
            <div className={styles.downloadWrap}>
                <div className={styles.heading}>
                    <h1>Book free consultation</h1>
                    <div className={styles.close} onClick={() => setBooking(false)} >
                        <GrClose />
                    </div>
                </div>
                <div className={styles.mainSection}>
                    {active === "Form" ?

                        // Info Form
                        <div className={styles.form}>
                            <form action="" className={styles.Downloadform} onSubmit={handleSubmit} >
                                <input type="text" placeholder='Name*' value={name} required onChange={(e) => setName(e.target.value)} />
                                <input type="email" placeholder='Email*' required value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input type="text" placeholder='Phone Number*' required value={phoneno} onChange={(e) => setPhoneno(e.target.value)} />
                                <div className={styles.downloadBtn} >
                                    <input type='submit' value="SUBMIT" />
                                </div>
                            </form>
                            <div className={styles.DownloadPolicy}>
                                {/* <p className={styles.pop_up_privacy_policy}>By submitting this form, you agree to the <span className={styles.EMI_yellow_text}>Privacy Policy </span> & <span className={styles.EMI_yellow_text}>Terms and Conditions</span></p> */}
                            </div>
                        </div>

                        :

                        // thankyou
                        <Thankyou />

                    }
                </div>

            </div>
            <div id='recaptcha-container'></div>
        </>
    )
}

export default Booking