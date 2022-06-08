import React, { useState } from 'react'
import visionLogo from '../../../assets/visionLogo.png'
import {Link} from 'react-router-dom'
function LeftSide() {
  const [datos, setDatos] = useState ({
    name : '',
    email : '',
    phone : '',
    password : '',
    confirmPassword : ''
  })
  const handleSubmit = (e) =>{
    e.preventDefault()
    e.target.reset()
  }
  const handleChange = (e) =>{
    setDatos({...datos,
      [e.target.name] : e.target.value})
    
  }
  return (
    <>
        <div className='w-full md:w-[55%] h-[650px] shadow-xl lg:rounded-bl-xl rounded-tl-xl  pl-16 py-16'>
          <div className='pr-16'>
            <div className='flex items-center '>
              <img src={visionLogo} alt="logo" />
              <h1 className='text-2xl font-bold'>VISION</h1>
            </div>
            <h2 className='text-2xl mt-16 '>REGISTER</h2>
            <form onSubmit={handleSubmit} action="" className=' mt-8 w-full flex flex-col items-center gap-4'>
              <label htmlFor="" className='flex gap-6 w-full justify-end items-end'>Name
              <input onChange={handleChange} name='name' type="text" className='border-b-2 border-[#57C3F9] text-[#57C3F9] w-[60%] outline-none  '/></label>
              <label htmlFor="" className='flex gap-6 w-full justify-end  items-end '>Email
              <input onChange={handleChange} name='email' type="email" className='border-b-2 border-[#57C3F9] text-[#57C3F9] w-[60%] outline-none'/></label>
              <label htmlFor="" className='flex gap-6 w-full justify-end  items-end '>Phone
              <input onChange={handleChange} name='phone' type="text" className='border-b-2 border-[#57C3F9] text-[#57C3F9] w-[60%] outline-none'/></label>
              <label htmlFor="" className='flex gap-6 w-full justify-end  items-end '>Password
              <input onChange={handleChange} name='password' type="password" className='border-b-2 border-[#57C3F9] text-[#57C3F9] w-[60%] outline-none'/></label>
              <label htmlFor="" className='flex gap-6 w-full justify-start  items-end justify-end  '>Confirm 
              <input onChange={handleChange} name='confirmPassword' type="password" className='border-b-2 border-[#57C3F9] text-[#57C3F9] w-[60%] outline-none'/></label>
              <button type='submit' className='w-full py-4 signIn mt-12 flex justify-center items-center rounded-3xl text-white text-xl '>Register</button>
            </form>
            
            <p className='text-[#A6A0A0] mt-8 text-center w-full pb-12'>Already have an account? <Link to='/login'><span className='text-[#0666F7] '>Sign In</span></Link> </p>
          </div>
        </div>
      
    </>
  )
}

export default LeftSide