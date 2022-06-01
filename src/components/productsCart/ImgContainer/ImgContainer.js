import React, { useState } from 'react'
import LittleImgContainer from './LittleImgContainer'
import front from '../../../assets/products/front.png'
import side from '../../../assets/products/side.png'
import upside from '../../../assets/products/upside.png'
function ImgContainer() {
  const [objetos, setObjetos] = useState([{"pic" : front}, {"pic" : side}, {"pic" : upside}])
  const [picked, setPicked] = useState({})
  const handleClick = () =>{
    setPicked(objetos.pic )
    console.log('holamundo')
  }
  return (
    <>
      <div className='w-[300px]'>
        <img src={front} alt=""  className='shadow-lg  py-16 px-6 mb-6 w-full' />
        <div className='flex gap-6 w-full justify-center mt-6 mb-16'>
         {
           objetos.map((objeto) =>{
             return (
               <LittleImgContainer onClick={handleClick} photo={objeto.pic} />
             )
           })
         }
        </div>
      </div>
    </>
  )
}

export default ImgContainer