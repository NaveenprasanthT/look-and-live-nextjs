import '@/styles/globals.css'
import { useState } from 'react'
import { DownloadContext, QuizContext, BookingContext } from '../../src/Context'
import Script from 'next/script'

export default function App({ Component, pageProps }) {

  const [downloadPop, setDownloadPop] = useState(false)
  const [booking, setBooking] = useState(false)


  //Quiz
  const [currentQ, setCurrentQ] = useState(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneno, setPhoneno] = useState('')
  const [propertyName, setPropertyName] = useState('')
  const [Q1, setQ1] = useState('')
  const [Q2, setQ2] = useState('')
  const [Q3, setQ3] = useState(10)
  const [Q4, setQ4] = useState('')
  const [Q5, setQ5] = useState('')
  const [Q6, setQ6] = useState('')
  const [Q7, setQ7] = useState('')
  const [Q8, setQ8] = useState('')


  const [Q9, setQ9] = useState({
    one: "",
    two: "",
    three: "",
  })


  const [Q10, setQ10] = useState({
    one: "",
    two: "",
    three: "",
  })
  const [Q11, setQ11] = useState({
    one: "",
    two: "",
    three: "",
  })
  const [Q12, setQ12] = useState({
    one: "",
    two: "",
    three: "",
  })
  const [Q13, setQ13] = useState('')


  return (
    <DownloadContext.Provider value={{ downloadPop, setDownloadPop }}>
      <BookingContext.Provider value={{ booking, setBooking }}>

        <QuizContext.Provider value={{
          currentQ, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, name, email, phoneno, propertyName,
          setCurrentQ, setQ1, setQ2, setQ3, setQ4, setQ5, setQ6, setQ7, setQ8, setQ9, setQ10, setQ11, setQ12, setQ13, setName, setPhoneno, setEmail, setPropertyName,
        }}>

          <Component {...pageProps} />

          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PNJZLVFQMM"></Script>
          <Script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-PNJZLVFQMM');
            `}
          </Script>

        </QuizContext.Provider>
      </BookingContext.Provider>
    </DownloadContext.Provider >
  )
}
