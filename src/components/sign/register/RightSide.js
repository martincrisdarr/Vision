import React from 'react'
import registerWoman from '../../../assets/register/registerWoman.png'
function RightSide() {
  return (
    <>
      <div className='w-full md:w-[45%] signIn h-[500px] md:h-[650px]  rounded-bl-xl md:rounded-bl-none md:rounded-tr-xl rounded-br-xl flex items-center justify-center'>
        <img src={registerWoman} alt="register woman" className='border-2 border-slate-200 pt-4 pl-4' />
      </div>
    </>
  )
}

export default RightSide