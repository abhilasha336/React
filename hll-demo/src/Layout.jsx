import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Middle from './components/Middle/Middle'

function Layout() {
  return (
   
    <>
    <Header/>
    <Middle/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout