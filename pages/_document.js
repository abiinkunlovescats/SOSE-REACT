import { Html, Head, Main, NextScript } from 'next/document'
import { useState } from 'react'
import Header from '../components/Header'
import AccountForm from '../components/AccountForm'
import Footer from '../components/Footer'
export default function Document() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Html lang="en">
      <Head />
      <Header />
        <body>
        <Main />
        <Account isOpen={isOpen}/>
        <NextScript />
      </body>
      <Footer/>
    </Html>
  )
}
function Account(isOpen){
  if(isOpen === true ){
  return(<AccountForm/>)
}
}
