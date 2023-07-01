import React, { useContext, useState } from 'react'
import styles from '@/styles/DownloadPopup.module.css'
import { GrClose } from 'react-icons/gr'
import { DownloadContext, QuizContext } from '../Context'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Button from './Button';
import { useRouter } from 'next/router';
import download from '../../public/Assets/icons/download.png'
import Image from 'next/image';
import Link from 'next/link';
import emailjs from "emailjs-com";


const DownloadPopup = () => {
  const { setDownloadPop } = useContext(DownloadContext);
  const [active, setActive] = useState("Form")
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [phoneno, setPhoneno] = useState('')
  // const [propertyName, setPropertyName] = useState('')
  const [otp, setotp] = useState('')
  const [invalidOtp, setinvalidOtp] = useState(false)

  const { name, setName, email, setEmail, phoneno, setPhoneno, propertyName, setPropertyName } = useContext(QuizContext)

  const router = useRouter()


  const handleDownloadBtn = (event) => {
    event.preventDefault();
    setActive('OTP')

    //reCaptch
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    }, auth);


    const phoneNumber = '+91' + phoneno;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        // ...
      }).catch((error) => {
        console.log(error);
      });
  }

  const handleDownload = () => {
    fetch('Look and Live.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Look&Live.pdf';
        alink.click();
      })
    })
  };

  //handleVerification
  const handleVerification = async () => {
    const code = otp;
    window.confirmationResult.confirm(code).then((result) => {
      setActive("Thank you")
      handleDownload();
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      setinvalidOtp(true);
      // ...
    });
    if (invalidOtp != true) {
      const formData = {
        name: name,
        email: email,
        phoneno: phoneno,
        propertyName: propertyName,
      }
      emailjs.send('service_j4osggk', 'template_lngtefr', formData, 'k9WdFwHT4cnJaWrCV')
        .then(() => {
          console.log('Email sent successfully!');
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    }
  }



  const Thankyou = () => {
    return (
      <div className={styles.QuizeWrap}>
        <Image width={80} src={download} alt='icon' />
        <div className={styles.thanksText}>
          Thank you for downloading
          interior designing guide
        </div>
        <div className={styles.downloadAgain}>
          Your download should start
          automatically, if not <span style={{ color: 'var(--primary-)' }} >click here</span>.
        </div>
        <div className={styles.msg}>
          Please answer a few more questions to
          help us better understand your  interior
          requirement.
        </div>
        <div onClick={() => router.push('/Quiz')} className={styles.quizBtn}>
          <Button value='Customer Quiz' color='#000' />
        </div>
      </div>
    )
  }



  return (
    <>
      <div className={styles.downloadWrap}>
      <div id='recaptcha-container'></div>
        <div className={styles.heading}>
          <h1>Download</h1>
          <div className={styles.close} onClick={() => setDownloadPop(false)} >
            <GrClose />
          </div>
        </div>
        <div className={styles.mainSection}>
          {active === "Form" ?

            // Info Form
            <div className={styles.form}>
              <form action="" className={styles.Downloadform} onSubmit={handleDownloadBtn} >
                <input type="text" placeholder='Name*' value={name} required onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Email*' required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='Phone Number*' pattern=".{10,}" required value={phoneno} onChange={(e) => setPhoneno(e.target.value)} />
                <input type="text" placeholder='Property Name' required value={propertyName} onChange={(e) => setPropertyName(e.target.value)} />

                <div className={styles.downloadBtn} >
                  <input type='submit' value="SUBMIT" />
                </div>
              </form>
              <div className={styles.DownloadPolicy}>
                <p className={styles.pop_up_privacy_policy}>By submitting this form, you agree to the <Link target="_blank" href='/Privacy-Policy' className={styles.highlight}>Privacy Policy </Link> & <Link href='/Terms-Condition' target="_blank" className={styles.highlight}>Terms and Conditions</Link></p>
              </div>
            </div>

            : active === "OTP" ?

              // OPT form

              <div className={styles.sendOtpWrap}>
                <input className={invalidOtp ? styles.inputError : styles.input} autoFocus="autofocus" type="text" value={otp} onChange={(e) => { setotp(e.target.value) }} placeholder='Enter OTP' required />
                <div onClick={handleVerification} ><Button value='Verify' color='#000' small={false} /></div>
                <p className={invalidOtp ? styles.alertActive : styles.alertInactive}>Invalid OTP</p>
              </div>

              :

              // thankyou
              <Thankyou />
          }
        </div>
      </div>
    </>
  )
}

export default DownloadPopup