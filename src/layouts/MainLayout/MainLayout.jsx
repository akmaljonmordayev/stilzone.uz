import React from 'react'
import Footer from "../../components/layout/Footer/Footer"
import Header from "../../components/layout/Header/Header"
function MainLayout({children}) {
  return (
   <>
    <Header/>
    {children}
    <Footer/>
   </>
  )
}

export default MainLayout