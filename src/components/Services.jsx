import React from 'react'
import {FaAngleDoubleRight,FaCog} from 'react-icons/fa'

const Services = () => {
  return (
    <div className="md:py-24 py-10">
        <div>
            <div className="h-1 w-[86px] bg-gradient1 mx-auto"></div>
            <p className="text-center font-bold text-xl">Our Services</p>
            <h2 className=" mx-auto font-bold text-center w-[65%] text-2xl md:text-[60px]/[70.84px] pb-10 pt-8">Improve Your Knowledge & Skill  With Us</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 max-w-[1240px] mx-auto gap-10 md:gap-4 md:py-16 py-6 " >
            <div className="text-center mx-10 md:mx-0 flex flex-col gap-4 cursor-pointer services">
                <FaCog className="fas fa-cog text-5xl mx-auto text-color2 color"/>
                <h2 className="font-bold text-2xl">Technical and Digital Skills</h2>
                <p className="text-xl font-thin">Lorem ipsum dolor sit amet consectetur. Augue volutpat tristique ornare non adipiscing. Lorem ipsum dolor sit amet consectetur. Augue volutpat tristiq</p>
                <div className='p-4  bg-gray-300 w-fit mx-auto rounded-full'><FaAngleDoubleRight className="text-center text-sm w-full text-gray-500 color "/></div>
                
            </div>
            <div className="text-center mx-10 md:mx-0 flex flex-col gap-4 services cursor-pointer">
                <FaCog className="fas fa-cog text-5xl mx-auto text-color2 color"/>
                <h2 className="font-bold text-2xl">Personal Development Skills</h2>
                <p className="text-xl font-thin">Lorem ipsum dolor sit amet consectetur. Augue volutpat tristique ornare non adipiscing. Lorem ipsum dolor sit amet consectetur. Augue volutpat tristiq</p>
                <div className='p-4  bg-gray-300 w-fit mx-auto rounded-full'><FaAngleDoubleRight className="text-center text-sm w-full text-gray-500 color"/></div>
            </div>
            <div className="text-center mx-10 md:mx-0 flex flex-col gap-4 services cursor-pointer">
                <FaCog className="fas fa-cog text-5xl mx-auto text-color2 color"/>
                <h2 className="font-bold text-2xl">Creative Arts and<br/> Hobbies</h2>
                <p className="text-xl font-thin">Lorem ipsum dolor sit amet consectetur. Augue volutpat tristique ornare non adipiscing. Lorem ipsum dolor sit amet consectetur. Augue volutpat tristiq</p>
                <div className='p-4  bg-gray-300 w-fit mx-auto rounded-full'><FaAngleDoubleRight className="text-center text-sm w-full text-gray-500 color"/></div>
            </div>
            <div className="text-center mx-10 md:mx-0 flex flex-col gap-4 services cursor-pointer">
                <FaCog className="fas fa-cog text-5xl mx-auto text-color2 color"/>
                <h2 className="font-bold text-2xl">Language and Communication Skills</h2>
                <p className="text-xl font-thin">Lorem ipsum dolor sit amet consectetur. Augue volutpat tristique ornare non adipiscing. Lorem ipsum dolor sit amet consectetur. Augue volutpat tristiq</p>
                <div className='p-4  bg-gray-300 w-fit mx-auto rounded-full'><FaAngleDoubleRight className="text-center text-sm w-full text-gray-500 color"/></div>
            </div>

        </div>


</div>
  )
}

export default Services