import React, { useState } from 'react'
import visionLogo from '../../../assets/visionLogo.png'
import {Link} from 'react-router-dom'

function LeftSideLogin() {
  const [datos, setDatos] = useState({
    email : '',
    password : ''
  })
  const handleChange = (e) =>{
    setDatos({...datos,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    e.target.reset()
    console.log(datos)
  }
  return (
    <>
      <div className='w-full md:w-[55%] h-[600px] shadow-xl lg:rounded-bl-xl rounded-tl-xl  pl-16 py-12'>
        <div className='pr-16'>
          <div className='flex items-center '>
            <img src={visionLogo} alt="logo" />
            <h1 className='text-2xl font-bold'>VISION</h1>
          </div>
          <h1 className='text-2xl mt-20 '>SIGN IN</h1>
          <p className='text-[#A6A0A0] mt-4'>Please sign in to continue</p>
          <form onSubmit={handleSubmit} className='mt-16 text '>
              <input onChange={handleChange} placeholder='Enter your email' name='email' type="email" className='border-b-2 border-[#57C3F9] text-[#57C3F9]  w-full outline-none  '/>
              <input onChange={handleChange} placeholder='○○○○○○○○○○○○' name='password' type="password" className='border-b-2 border-[#57C3F9] text-[#57C3F9]  w-full outline-none mt-12 '/>
              <button type='submit' className='w-full py-4 logIn mt-12 flex justify-center items-center rounded-3xl text-white text-xl '>Sign In</button>
              <p className='text-[#A6A0A0] mt-8 text-center w-full pb-12'>Haven’t Registered?   <Link to='/register'><span className='text-[#0666F7] '>Sign Up</span></Link> </p>

          </form>
        </div>
      </div>
    </>
  )
}

export default LeftSideLogin