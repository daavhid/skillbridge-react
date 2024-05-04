import React from 'react'
import { aboutImg } from '../assets/images'

const About = () => {
  return (
    <div>
         <div className='bg-about min-h-[80vh] -z-200 text-white md:py-16 pt-16 md:px-10 px-4'>
            <div>
                <div className="h-1 w-[86px] bg-yellow mx-auto"></div>
                <p className="text-center font-semibold text-xl">About us</p>  
            </div>
            <div className="flex flex-col md:flex-row py-16 gap-8 justify-between items-center">
                <div className="md:basis-[45%]  rounded-full md:order-1 relative  after:absolute after:opacity-10 after:h-full after:w-full after:bg-black after:top-0">

                    <img src={aboutImg} alt="" className="object-cover w-full object-center relative rounded-xl  "/>
                </div>
                <div className="md:basis-[50%] ">

                    <h2 className=" text-2xl md:text-3xl">We Empower your future with the knowledge of today</h2>
                    <p className="text-xl font-thin  py-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum tempore at saepe, veritatis ea similique nesciunt blanditiis officia? Deserunt ratione vel ducimus officiis, laborum unde tenetur! Dolor quibusdam distinctio iste dignissimos nobis ullam voluptatem ipsum ipsa est reiciendis quo rem eveniet saepe itaque, ducimus voluptas? Expedita dolorum, tempora porro molestiae sunt accusantium est rerum ipsum earum blanditiis ipsa aspernatur voluptatem.</p>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default About