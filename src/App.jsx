import React from 'react'
import Header from './Components/Header'
// import Hero from './Components/Hero'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
import Hero from './Components/Hero'

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default App;
