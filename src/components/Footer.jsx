import React from 'react'
import { FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa'
import { logo } from '../assets/images'

const Footer = ({page}) => {
  return (
    <div className="bg-color2 text-white flex flex-col md:flex-row gap-24 md:px-10 px-6 pb-10 pt-6">
        <ul className="flex md:flex-col justify-between md:gap-6">
            <li className="md:text-xl text-xs">Skill Bridge</li>
            <li className="md:text-xl text-xs">Help</li>
            <li className="md:text-xl text-xs">About us</li>
            <li className="md:text-xl text-xs">Get the Real App</li>
        </ul>
        <ul className="text-sm flex md:flex-col gap-8  justify-between">
            <li className="font-semibold md:text-xl ">Contact us</li>
            <li className=''>
                <span className=" md:font-light font-thin text-end py-1 inline-block text-xs">Phone: +7 (212) 654-33-35</span><br/>
                <span className=" md:font-light font-thin py-1 inline-block text-xs">Address: 123 Ave, Lorem City, site Country, The World</span><br/>
                <span className=" md:font-light font-thin py-1 inline-block text-xs">Email: Info@yourdomain.com</span>
            </li>
        </ul>
    <ul className="flex md:flex-col  justify-between gap-10">
        <li className='font-bold text-xl flex gap-3 md:items-center cursor-pointer'>
            <img src={logo} alt="logo" className='w-[30px] self-start'/>
            <p className='font-semibold md:text-xl text-xs'>SKILL BRIDGE</p>
        </li>
        <li className=''>
            <span className="text-sm ml-auto font-light md:w-1/3 block">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu</span><br/>
            {/* <div className="flex   gap-2 pt-1 justify-end">
    
                <FaTwitter className="fab fa-twitter"/>
                <FaFacebook className="fab fa-twitter"/>
                <FaPinterest className="fab fa-twitter"/>
                <FaPinterest className="fab fa-twitter"/>
            </div> */}

        </li>

    </ul>
    </div>


  )
}

export default Footer