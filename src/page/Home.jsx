import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Leaders from '../components/Leaders'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=' '>
        <div className=' px-2 sticky md:relative md:hidden block  bg-white md:bg-color2/100  shadow-xl top-0 w-full '>

            <Navbar/>
        </div>
        <div className='bg-fill  -z-10 md:z-10'>

            <Hero/>
        </div>
        <Services/>
        <About/>
        <Leaders/>
        <Footer/>
    </div>
  )
}

export default Home