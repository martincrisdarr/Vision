import React from 'react'
import loginFullPhoto from '../../../assets/login/loginFullPhoto.png'
function RightSideLogin() {
  return (
    <>
      <div className='w-full md:w-[45%] flex items-center justify-center'>
        <img src={loginFullPhoto} alt="" className='h-[500px] md:h-[600px] w-full object-cover rounded-br-xl md:rounded-tr-xl rounded-bl-xl md:rounded-bl-none'/>
      </div>
    </>
  )
}

export default RightSideLogin