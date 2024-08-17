import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function ExploreLayout() {
  let title = '#613223'
  let color = "#fff"
  let bgcolor= "#E22733"
  return (
    <div className='bg-beige'>
        <Header color={color} bgcolor={bgcolor} title={title}/>
        <Outlet/> 
        <Footer/>
    </div>
  )
}

export default ExploreLayout