import React from 'react'
import Navbar from './Navbar'
import { useMotionValue } from 'framer-motion'
import { MdArrowForwardIos, MdArrowOutward } from 'react-icons/md'
import { ellipse, heroImg } from '../assets/images'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
    const count = useMotionValue(0)
    const pTexts = [
        'A supportive learning environment with access to mentors and project opportunities.'
    ] 
  return (
    <div className=' md:h-[100vh] h-[90vh] text-white py-5 px-4  overflow-hidden md:relative'>
        <div className=' hidden md:block'>

            <Navbar/>
        </div>
        <div className='flex items-center py-16 md:py-0 md:items-start h-full md:flex-row z-[4000]'> 

                <div id='hero-text' className='md:basis-[65%]   order-1 md:order-none md:mt-[8rem] z-[4000]'>
                    <div className="h-1 w-[50%] bg-yellow/40 text-white"></div>
                    <p className='text-2xl'></p>
                    <button className='flex gap-5 cursor-pointer items-center bg-yellow my-5 p-2 rounded-2xl text-xl font-semibold text-black hover:-translate-y-0.5 hover:bg-white/50 hover:text-white transition-all duration-700'>Get Started <FaArrowRight className="fas fa-arrow-right"/></button>
                </div>
                <div className=' md:basis-[35%] hidden md:block mx-auto  '>
                    <div className='absolute  w-[550px] -bottom-[4rem] md:right-[3rem] right-0  z-[20]'>
                        <img src={heroImg} alt="" className='w-[550px] object-top object-contain z-[40]  h-[550px]'/>
                    </div>
                    <div className='absolute -bottom-[2rem] md:right-[2rem] right-0  w-[500px]  -z-[20]'>
                        <img src={ellipse} alt=""className='-z-[20] w-full object-cover '/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Hero