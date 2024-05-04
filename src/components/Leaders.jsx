import React from 'react'
import { leader1, leader2, leader3, leader4 } from '../assets/images'
import { FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa'

const Leaders = () => {
    const Card = ({photo,text,title})=>{
        return(

            <div>
                <img src={photo} alt="photo" className="object-cover h-[400px] md:h-[300px] w-full"/>
                <div className="pt-6 pb-4 pl-4 flex flex-col gap-1">
                    <p>{text}</p>
                    <h2 className="font-bold text-xl leading-none">{title}</h2>
                    <div className="flex   gap-2 pt-2">
                        <div className="bg-yellow w-1 "></div>
                        <FaTwitter className="fab fa-twitter"/>
                        <FaFacebook className="fab fa-twitter"/>
                        <FaPinterest className="fab fa-twitter"/>
                        <FaPinterest className="fab fa-twitter"/>
                    
                    </div>
                </div>
            </div>
        )
    }
  return (
    <div>
        <div className="">
            <h2 className="font-bold text-center text-3xl md:text-5xl py-16">Meet with Our <br/>Team Leaders</h2>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 px-4 pb-20">
                <Card photo={leader1} text={'Founder and thinker'} title={'Jack Rain'}/>
                <Card photo={leader2} text={'Back End Manager'} title={'Eliza John'}/>
                <Card photo={leader3} text={'Mobile App Manager'} title={'Victor Black'}/>
                <Card photo={leader4} text={'Web Development Manager'} title={'Richard Benson'}/>
                
            </div>
        </div>
    </div>
  )
}

export default Leaders