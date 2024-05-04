import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Home from './page/Home'
import {animate, circInOut, easeInOut, motion,useMotionValue, useTransform} from 'framer-motion'

// const texts = [
//     'A supportive learning environment with access to mentors and project opportunities.',
//     'hll i can see the mooon',
//     'ii am quiteee the funny dude',
// ]
// const [text,setText]= useState(texts[0])
// const x = useMotionValue(0)
// const baseText = useTransform(x,(latest)=>texts[latest] || ' ')
// const count = useMotionValue(0)
// const rounded = useTransform(count,[1,3],[0.4,1])
// const trans = useTransform(count,[1,3],[0,100])
// // console.log(rounded,x)
// // const dispText = useTransform(rounded,(latest)=>baseText.get().slice(0,latest))

// const upDatedRound = useMotionValue(true)
// useEffect(()=>{
//     const control = animate(count,3,{
//         type:'keyframes',
//         duration:3,
//         repeat:Infinity,
//         repeatType:'reverse',
//         repeatDelay:1,
//         ease:circInOut,
//         bounce:rounded,
//         times:1,
//         onUpdate(latest){
//             // console.log(latest,'hi')
//             if(upDatedRound.get()===true && latest===3){
//                 console.log('now is false',upDatedRound)
//                 upDatedRound.set(false)
//             }else if(upDatedRound.get()===false && latest===0){
//                 if(x.get()=== texts.length-1){
//                     console.log('kai',latest)
//                     x.set(0)
//                     setText(texts[x.get()])
//                     console.log(x.get(),text,'this is')
//                 }else{
//                     x.set(x.get()+1)
//                     setText(texts[x.get()])
//                     console.log('passd here')
//                 }
//                 upDatedRound.set(true)
                
//             }


//         }
//     })
//     console.log(x.get(),'hre')
//     return control.stop
// },[text])

const App = () => {
    
    return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
          </Routes>
      
      </BrowserRouter>
    )
}

export default App