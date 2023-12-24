import React from 'react'
import Navbar from '../components/home/Navbar'
import Home from '../components/home/Home'
import Footer from '../components/home/Footer'

const HomeSearch = ({setSearch}) => {
  return (
    <div className=' flex flex-col mt-0'>
      <Navbar/>
      <Home setSearch={setSearch}/>
      <Footer/>
    </div>
  )
}

export default HomeSearch