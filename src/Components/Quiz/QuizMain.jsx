import React, { useContext, useEffect } from 'react'
import styles from '@/styles/Quiz.module.css'
import Image from 'next/image'
import logo from '../../../public/Assets/logo.png'
import Button from '../Button'
// import bgImg from '../../../public/Assets/questions/que_1_back.png'
import { QuizData } from './Data'
import { QuizContext } from '@/Context'


const QuizMain = () => {

  const { currentQ, setCurrentQ } = useContext(QuizContext);
  // let filteredData = [];
  
  const filteredData = QuizData.filter(QuizData => {
    console.log("filter")
    return QuizData.id === currentQ
  })
  // console.log("Quize Main", filteredData);

  return (
    <>
      <h1>test  </h1>
      {
        
        filteredData.map((item, key) => {
          console.log("filteredData0001", filteredData);
          return(
            <div key={key} className={styles.QuizMainWrap}>
              {console.log("return00003", filteredData)}
            <div className={styles.header}>
              <Image className={styles.logo} src={logo} alt='logo' />
              <div className={styles.QNo}>
                <h3>{item.id}</h3>
                <h6>/13</h6>
              </div>
              <Button value='EXIT' small={true} color='#000' />
            </div>
            <div className={styles.bgImg}>
              <Image className={styles.image} width={600} height={600} src={item.bgImg} alt='Image' />
              <div className={styles.questionWrap}>
                <div className={styles.glassBg}>
                  <h4>{item.heading}</h4>
                  <div className={styles.cardWrap}>
                    {item.option.map((opt, key) => (
                      <div key={key} className={styles.card}>
                        <Image width={500} height={500} className={styles.cardImg} src={opt.img} alt='questionImage' />
                        <div className={styles.title}>{opt.t1}</div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.bottomSection}>
                    <div onClick={() => setCurrentQ(currentQ - 1)}>
                      {item.id = !1 ? <Button value='Back' small={true} color='#fff' /> : ''}
                    </div>
                    <div onClick={() => setCurrentQ('2')} ><Button value='Next' small={true} color='#fff' /> </div>
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

// {
//   item.option.map((opt, key) => (
//     <div className={styles.cardWrap}>
//       <div className={styles.card}>
//         {/* <Image className={styles.cardImg} src={bgImg} alt='questionImage' /> */}
//         {/* <div className={styles.title}>{opt.}</div> */}
//       </div>
//     </div>
//   ))
// }