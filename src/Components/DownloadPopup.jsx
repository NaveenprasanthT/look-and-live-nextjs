import React, { useContext, useState } from 'react'
import styles from '@/styles/DownloadPopup.module.css'
import { GrClose } from 'react-icons/gr'
import { DownloadContext } from '../Context'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import db from '../FirebaseConfig'
import Button from './Button';


const DownloadPopup = () => {
  const { setDownloadPop } = useContext(DownloadContext);
  const [active, setActive] = useState("Quiz")
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneno, setPhoneno] = useState('')
  const [propertyName, setPropertyName] = useState('')
  const [otp, setotp] = useState('')
  const [invalidOtp, setinvalidOtp] = useState(false)



  const handleDeonloadBtn = (event) => {
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

      });
  }

  //handleVerification
  const handleVerification = () => {
    const code = otp;
    window.confirmationResult.confirm(code).then((result) => {
      const user = result.user;
      setActive("Quiz")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      setinvalidOtp(true);
      // ...
    });
  }



  const Thankyou = () => {
    return (
      <div className={styles.QuizeWrap}>
        <div className={styles.thanksText}>
          Thank you for downloading
          interior designing guide
        </div>
        <div className={styles.downloadAgain}>
          Your download should start
          automatically, if not <span style={{color: 'var(--primary-)'}} >click here</span>.
        </div>
        <div className={styles.msg}>
          Please answer a few more questions to
          help us better understand your  interior
          requirement.
        </div>
        <div className={styles.quizBtn}>
          <Button value='Customer Quiz' color='#000' />
        </div>
      </div>
    )
  }



  return (
    <>
      <div className={styles.downloadWrap}>
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
              <form action="" className={styles.Downloadform} onSubmit={handleDeonloadBtn} >
                <input type="text" placeholder='Name*' value={name} required onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Email*' required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='Phone Number*' required value={phoneno} onChange={(e) => setPhoneno(e.target.value)} />
                <input type="text" placeholder='Property Name' required value={propertyName} onChange={(e) => setPropertyName(e.target.value)} />

                <div className={styles.downloadBtn} >
                  <input type='submit' value="SUBMIT" />
                </div>
              </form>
              <div className={styles.DownloadPolicy}>
                <p className={styles.pop_up_privacy_policy}>By submitting this form, you agree to the <span className={styles.EMI_yellow_text}>Privacy Policy </span> & <span className={styles.EMI_yellow_text}>Terms and Conditions</span></p>
              </div>
            </div>

            : active === "OTP" ?

              // OPT form

              <div className={styles.sendOtpWrap}>
                <input className={invalidOtp ? styles.inputError : styles.input} autoFocus="autofocus" type="text" value={otp} onChange={(e) => { setotp(e.target.value) }} placeholder='Enter OTP' required />
                <Button onClick={() => handleVerification} value='Verify' color='#000' small={true} />
                <p className={invalidOtp ? styles.alertActive : styles.alertInactive}>Invalid OTP</p>
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

export default DownloadPopup