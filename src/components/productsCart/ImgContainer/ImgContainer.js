import React, { useState } from 'react'
import LittleImgContainer from './LittleImgContainer'
function ImgContainer() {
  const photos = [{'id' : 1 , 'img' : '../../../assets/products/front.png'},
  {'id' : 2, 'img' : '../../../assets/products/side.png'},
  {'id': 3 , 'img' : '../../../assets/products/upside.png'}]
  const [picked, setPicked] = useState('')
  return (
    <>
      <div className='w-[300px]'>
        <img src={picked == '' ? '../../../assets/products/front.png' : picked } alt=""  className='shadow-lg h-[230px] object-fit py-16 px-6 mb-6 w-full' />
        <div className='flex gap-6 w-full justify-center mt-6 mb-16'>
         {
           photos.map((objeto) =>{
             return (
               <LittleImgContainer choosenPhoto={() => setPicked(objeto.img)} photo={objeto.img} key={objeto.id} />
             )
           })
         }
        </div>
      </div>
    </>
  )
}

export default ImgContainer