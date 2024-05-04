import React, { useState } from 'react'
import { MdClose, MdMenu, MdSearch } from 'react-icons/md'
import { logo } from '../assets/images'

const Navbar = () => {
    const [open,setOpen] = useState(false)
    const [data,setData] = useState('em')

    const handleChange = (e)=>{
        setData(e.target.files)
        console.log(data)


    }
  return (
    <div className='sticky md:relative top-0 '>
        <div className='flex justify-between px-1 py-3'>
            <div className='font-bold text-xl flex gap-3 items-center cursor-pointer'>
                <img src={logo} alt="logo" className='w-[30px]'/>
                <p>SKILL BRIDGE</p>
            </div>
            {/* desktop view */}
            <ul className='hidden md:flex justify-between basis-[55%] text-white font-light'>
                    <li className='cursor-pointer hover:-translate-y-0.5 duration-700 transition-all ease-in-out py-2 px-2 navLink'>Home<div className="bg-white"></div></li>
                    <li className='cursor-pointer hover:-translate-y-0.5 duration-700 transition-all ease-in-out py-2 px-2 navLink'>Projects<div className="bg-white"></div></li> 
                    <li className='cursor-pointer hover:-translate-y-0.5 duration-700 transition-all ease-in-out py-2 px-2 navLink'>About<div className="bg-white"></div></li>
                    <li className='cursor-pointer hover:-translate-y-0.5 duration-700 transition-all ease-in-out py-2 px-2 navLink'>Calender<div className="bg-white"></div></li>
                    <li className='cursor-pointer hover:-translate-y-0.5 duration-700 transition-all ease-in-out py-2 px-2 navLink'>Agents<div className="bg-white"></div></li>
                    <li className='cursor-pointer hover:-translate-y-0.5 duration-700 transition-all ease-in-out py-2 px-2 navLink'>Contact<div className="bg-white"></div></li>
                    <li className='cursor-pointer hover:-translate-y-0.5 duration-700 transition-all ease-in-out py-2 px-2 navLink'>Sign up / Sign In<div className="bg-white"></div></li>
            </ul>
            {/* mobile view */}
            {

            open && <ul className='md:hidden flex flex-col py-3 px-3  gap-6 basis-[55%] h-[100vh] fixed right-0 top-0 w-[100%] transition-all duration-1000 sm:w-[50%] z-[200] font-light bg-purple-700/90 text-center'>
                    <li className='p-2 md:hidden block bg-black rounded-full w-fit ml-auto ' onClick={()=>{setOpen(prev=>!prev)}}><MdClose className='text-3xl text-white ml-auto'/></li>
                    <li className='cursor-pointer relative text-2xl font-bold text-black  duration-700 transition-all ease-in py-2 px-2 navLink2 hover:text-white '>Home<div className="absolute top-0 left-0  bg-white"></div></li>
                    <li className='cursor-pointer relative text-2xl font-bold  duration-700 transition-all ease-in-out py-2 px-2 navLink2 hover:text-white '>Projects<div className="absolute top-0 left-0  bg-white"></div></li> 
                    <li className='cursor-pointer relative text-2xl font-bold  duration-700 transition-all ease-in-out py-2 px-2 navLink2 hover:text-white '>About<div className="absolute top-0 left-0  bg-white"></div></li>
                    <li className='cursor-pointer relative text-2xl font-bold  duration-700 transition-all ease-in-out py-2 px-2 navLink2 hover:text-white '>Calender<div className="absolute top-0 left-0  bg-white"></div></li>
                    <li className='cursor-pointer relative text-2xl font-bold  duration-700 transition-all ease-in-out py-2 px-2 navLink2 hover:text-white '>Agents<div className="absolute top-0 left-0  bg-white"></div></li>
                    <li className='cursor-pointer relative text-2xl font-bold  duration-700 transition-all ease-in-out py-2 px-2 navLink2 hover:text-white '>Contact<div className="absolute top-0 left-0  bg-white"></div></li>
                    <li className='cursor-pointer relative text-2xl font-bold  duration-700 transition-all ease-in-out py-2 px-2 navLink2 hover:text-white '>Sign up / Sign In<div className="absolute top-0 left-0  bg-white"></div></li>
            </ul>
            }

            <div className='p-2 md:hidden block bg-purple-700 rounded-full' onClick={()=>{
            setOpen(prev=>!prev)}}><MdMenu className='text-3xl text-white'/></div>
        </div>
        <div className='hidden md:block w-[60%] mx-auto py-5'>
            <span className='flex gap-5 bg-white items-center py-1 px-3 rounded-[8px]'><MdSearch className='text-gray-500 text-2xl'/><input type="text" placeholder='Search' className='outline-none grow  text-black'/></span>
        </div>
        <input type='file' onChange={(e)=>{
            handleChange(e)
        }}/>

    </div>
  )

}

export default Navbar