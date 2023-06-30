import React, { useContext, useEffect, useState } from 'react'
import styles from '@/styles/Quiz.module.css'
import Image from 'next/image'
import logo from '../../../public/Assets/logo.png'
import Button from '../Button'
// import bgImg from '../../../public/Assets/questions/que_1_back.png'
import { QuizData } from './Data'
import { QuizContext } from '@/Context'
import { useRouter } from 'next/router';
import Link from 'next/link'
import emailjs from 'emailjs-com';


const QuizMain = () => {
  const router = useRouter()

  const { currentQ, setCurrentQ } = useContext(QuizContext);
  const { name,  email,  phoneno,  propertyName } = useContext(QuizContext)
  const { Q1, setQ1 } = useContext(QuizContext);
  const { Q2, setQ2 } = useContext(QuizContext);
  const { Q3, setQ3 } = useContext(QuizContext);
  const { Q4, setQ4 } = useContext(QuizContext);
  const { Q5, setQ5 } = useContext(QuizContext);
  const { Q6, setQ6 } = useContext(QuizContext);
  const { Q7, setQ7 } = useContext(QuizContext);
  const { Q8, setQ8 } = useContext(QuizContext);
  const { Q9, setQ9 } = useContext(QuizContext);
  const { Q10, setQ10 } = useContext(QuizContext);
  const { Q11, setQ11 } = useContext(QuizContext);
  const { Q12, setQ12 } = useContext(QuizContext);
  const { Q13, setQ13 } = useContext(QuizContext);


  const [state, setstate] = useState([])
  // let filteredData = [];

  const filteredData = QuizData.filter(QuizData => {
    return QuizData.id === currentQ
  })

  useEffect(() => {
    setstate([...filteredData])
  }, [currentQ])

  const handleQ9 = (answer) => {
    console.log("entere", Q9);
    if (Q9.one == "") {
      setQ9(Q9 => ({
        ...Q9, one: answer
      }))
    }
    else if (Q9.two == "") {
      setQ9(Q9 => ({
        ...Q9, two: answer
      }))
    }
    else if (Q9.three == "") {
      setQ9(Q9 => ({
        ...Q9, three: answer
      }))
    }
    if (Q9.one == answer) {
      setQ9(Q9 => ({
        ...Q9, one: ""
      }))
    }
    if (Q9.two == answer) {
      setQ9(Q9 => ({
        ...Q9, two: ""
      }))
    }
    if (Q9.three == answer) {
      setQ9(Q9 => ({
        ...Q9, three: ""
      }))
    }
  }

  const handleQ10 = (answer) => {
    console.log("entere", Q10);
    if (Q10.one == "") {
      setQ10(Q10 => ({
        ...Q10, one: answer
      }))
    }
    else if (Q10.two == "") {
      setQ10(Q10 => ({
        ...Q10, two: answer
      }))
    }
    else if (Q10.three == "") {
      setQ10(Q10 => ({
        ...Q10, three: answer
      }))
    }
    if (Q10.one == answer) {
      setQ10(Q10 => ({
        ...Q10, one: ""
      }))
    }
    if (Q10.two == answer) {
      setQ10(Q10 => ({
        ...Q10, two: ""
      }))
    }
    if (Q10.three == answer) {
      setQ10(Q10 => ({
        ...Q10, three: ""
      }))
    }
  }

  const handleQ11 = (answer) => {
    console.log("entere");
    if (Q11.one == "") {
      setQ11(Q11 => ({
        ...Q11, one: answer
      }))
    }
    else if (Q11.two == "") {
      setQ11(Q11 => ({
        ...Q11, two: answer
      }))
    }
    else if (Q11.three == "") {
      setQ11(Q11 => ({
        ...Q11, three: answer
      }))
    }
    if (Q11.one == answer) {
      setQ11(Q11 => ({
        ...Q11, one: ""
      }))
    }
    if (Q11.two == answer) {
      setQ11(Q11 => ({
        ...Q11, two: ""
      }))
    }
    if (Q11.three == answer) {
      setQ11(Q11 => ({
        ...Q11, three: ""
      }))
    }
  }

  const handleQ12 = (answer) => {
    console.log("entere");
    if (Q12.one == "") {
      setQ12(Q12 => ({
        ...Q12, one: answer
      }))
    }
    else if (Q12.two == "") {
      setQ12(Q12 => ({
        ...Q12, two: answer
      }))
    }
    else if (Q12.three == "") {
      setQ12(Q12 => ({
        ...Q12, three: answer
      }))
    }
    if (Q12.one == answer) {
      setQ12(Q12 => ({
        ...Q12, one: ""
      }))
    }
    if (Q12.two == answer) {
      setQ12(Q12 => ({
        ...Q12, two: ""
      }))
    }
    if (Q12.three == answer) {
      setQ12(Q12 => ({
        ...Q12, three: ""
      }))
    }
  }


  //handleSubmition

  const handleSubmition = async () => {

    

    const formData = {
      name: name,
      email: email,
      phoneno: phoneno,
      propertyName: propertyName,
      Q1: Q1,
      Q2: Q2,
      Q3: Q3,
      Q4: Q4,
      Q5: Q5,
      Q6: Q6,
      Q7: Q7,
      Q8: Q8,
      Q9: JSON.stringify(Q9),
      Q10: JSON.stringify(Q10),
      Q11: JSON.stringify(Q11),
      Q12:JSON.stringify(Q12),
      Q13:Q13,
    }
    emailjs.send('service_j4osggk', 'template_lngtefr', formData, 'k9WdFwHT4cnJaWrCV')
      .then(() => {
        console.log('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
      setCurrentQ(14);
  }

  return (
    <>
      {

        state.map((item, key) => {
          return (
            <div key={key} className={styles.QuizMainWrap}>
              <div className={styles.header}>
                <Link className={styles.logoWrap} href='/' ><Image className={styles.logo} src={logo} alt='logo' /></Link>
                <div className={styles.QNo}>
                  <h3>{item.id}</h3>
                  <h6>/13</h6>
                </div>
                <Link className={styles.exitBtn} href='/' ><Button value='EXIT' small={true} color='#000' /></Link>
              </div>
              <div className={styles.bgImg}>
                <Image className={styles.image} width={600} height={600} src={item.bgImg} alt='Image' />
                <div className={styles.questionWrap}>
                  <div className={styles.glassBg}>
                    <h4>{item.heading}</h4>

                    <div className={styles.cardWrap}>
                      {(() => {
                        switch (item.id) {
                          case 1:
                            return (
                              item.option.map((opt, key) => (
                                <div onClick={() => setQ1(opt.title)} key={key} className={Q1 === opt.title ? styles.cardSelected : styles.card}>
                                  <Image width={500} height={500} className={styles.cardImg} src={opt.img} alt='questionImage' />
                                  <div className={styles.title}>{opt.title}</div>
                                </div>
                              ))
                            )
                          case 2:
                            return (
                              item.option.map((opt, key) => (
                                <div onClick={() => setQ2(opt.title)} key={key} className={Q2 === opt.title ? styles.cardSelected : styles.card}>
                                  <Image width={500} height={500} className={styles.cardImg} src={opt.img} alt='questionImage' />
                                  <div className={styles.title}>{opt.title}</div>
                                </div>
                              ))
                            )
                          case 3:
                            return (
                              item.option.map((opt, key) => (
                                <div key={key} className={styles.input}>
                                  <input type="range"
                                    min="0"
                                    max="200"
                                    onChange={(e) => setQ3(e.target.value)}
                                    value={Q3}
                                  />
                                  <h2 style={{ textAlign: 'center' }} >{Q3} SQFT </h2>
                                </div>
                              ))
                            )
                          case 4:
                            return (
                              item.option.map((opt, key) => (
                                <div onClick={() => setQ4(opt.title)} key={key} className={Q4 === opt.title ? styles.cardSelected : styles.card}>
                                  <Image width={500} height={500} className={styles.cardImg} src={opt.img} alt='questionImage' />
                                  <div className={styles.title}>{opt.title}</div>
                                </div>
                              ))
                            )
                          case 5:
                            return (
                              <div className={styles.btnWrap} >
                                {item.option.map((opt, key) => (
                                  <button onClick={() => setQ5(opt.title)} key={key} className={Q5 === opt.title ? styles.btnSelected : styles.btn} >{opt.title} </button>
                                ))}
                              </div>
                            )
                          case 6:
                            return (
                              <div className={styles.btnWrap} >
                                {item.option.map((opt, key) => (
                                  <button onClick={() => setQ6(opt.title)} key={key} className={Q6 === opt.title ? styles.btnSelected : styles.btn} >{opt.title} </button>
                                ))}
                              </div>
                            )
                          case 7:
                            return (
                              <div className={styles.btnWrap} >
                                {item.option.map((opt, key) => (
                                  <button onClick={() => setQ7(opt.title)} key={key} className={Q7 === opt.title ? styles.btnSelected : styles.btn} >{opt.title} </button>
                                ))}
                              </div>
                            )
                          case 8:
                            return (
                              <div className={styles.btnWrap} >
                                {item.option.map((opt, key) => (
                                  <button onClick={() => setQ8(opt.title)} key={key} className={Q8 === opt.title ? styles.btnSelected : styles.btn} >{opt.title} </button>
                                ))}
                              </div>
                            )
                          case 9:
                            return (
                              item.option.map((opt, key) => (
                                <div onClick={() => handleQ9(opt.title)} key={key} className={Q9.one == opt.title || Q9.two == opt.title || Q9.three == opt.title ? styles.cardSelected : styles.card} >
                                  <Image width={500} height={500} className={styles.cardImg} src={opt.img} alt='questionImage' />
                                  <div className={styles.title}>{opt.title}</div>
                                </div>
                              ))
                            )
                          case 10:
                            return (
                              item.option.map((opt, key) => (
                                <div onClick={() => handleQ10(opt.title)} key={key} className={Q10.one == opt.title || Q10.two == opt.title || Q10.three == opt.title ? styles.cardSelected : styles.card} >
                                  <Image width={500} height={500} className={styles.cardImg} src={opt.img} alt='questionImage' />
                                  <div className={styles.title}>{opt.title}</div>
                                </div>
                              ))
                            )
                          case 11:
                            return (
                              item.option.map((opt, key) => (
                                <div onClick={() => handleQ11(opt.title)} key={key} className={Q11.one == opt.title || Q11.two == opt.title || Q11.three == opt.title ? styles.cardSelected : styles.card} >
                                  <Image width={500} height={500} className={styles.cardImg} src={opt.img} alt='questionImage' />
                                  <div className={styles.title}>{opt.title}</div>
                                </div>
                              ))
                            )
                          case 12:
                            return (
                              item.option.map((opt, key) => (
                                <div onClick={() => handleQ12(opt.title)} key={key} className={Q12.one == opt.title || Q12.two == opt.title || Q12.three == opt.title ? styles.cardSelected : styles.card} >
                                  <Image width={500} height={500} className={styles.cardImg} src={opt.img} alt='questionImage' />
                                  <div className={styles.title}>{opt.title}</div>
                                </div>
                              ))
                            )
                          case 13:
                            return (

                              <textarea
                                type="text"
                                autoFocus="autofocus"
                                className={styles.textarea}
                                value={Q13}
                                onChange={(e) => { setQ13(e.target.value) }}
                                placeholder='Message'
                              />
                            )
                          case 14:
                            return (
                              <div className={styles.thanksWrap}>
                                <Image className={styles.thanksImage} src={item.img} alt='thank you' />
                                <h4>Thank you for all your inputs. Our team will call you back shortly.</h4>
                                <button onClick={() => router.push('/')} className={styles.thanksBtn} >Done</button>
                              </div>
                            )

                          default:
                            return null
                        }
                      })()}

                    </div>
                    <div className={styles.bottomSection}>
                      <div onClick={() => setCurrentQ(currentQ - 1)}>
                        {item.id > 1 && item.id < 14 ? <Button value='Back' small={true} color='#fff' /> : ''}
                      </div>
                      <div >
                        {item.id != 13 ? <div onClick={() => setCurrentQ(currentQ + 1)}  ><Button value='Next' small={true} color='#fff' /></div> : <div onClick={handleSubmition} > <Button value='Submit' small={true} color='#fff' /></div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        )
      }

    </>
  )
}

export default QuizMain