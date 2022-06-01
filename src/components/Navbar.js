import React, { useState } from 'react'
import visionLogo from '../assets/visionLogo.png'
import {BiMenu} from 'react-icons/bi'
import {Link} from "react-router-dom";
function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () =>{
    setNav(!nav)
  }
  return (
    <>
        <div className='w-full h-16 flex items-center justify-between poppins shadow-md px-12 fixed z-50 bg-white'>
            <div className='flex items-center'>
            <Link to='/'><div className='flex items-center'><img src={visionLogo} alt="logo" />
                <h1 className='text-2xl font-bold'>VISION</h1></div></Link>
            </div>
            <ul className='hidden md:flex gap-8 text-[#7A7A7A] items-center'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/category'><li>Category</li></Link>
                <Link to='/location'><li>Location</li></Link>
                <Link to='/faq'><li>FAQ</li></Link>
                <li className='py-2 px-8 signIn text-white rounded-xl'>Sign In</li>
            </ul>
            <BiMenu className={!nav ? 'text-3xl flex md:hidden cursor-pointer transition duration-500 ' : 'text-3xl flex md:hidden cursor-pointer rotate-180 transition duration-500'} onClick={handleClick} />
        </div>
            <ul className={!nav ? 'pt-6 pl-12 fixed md:hidden shadow-xl -top-64  z-40 bg-white transition-all duration-500 pr-24 h-[220px] w-full flex flex-col gap-4 poppins text-xl' : 'duration-500  pt-6 p-12 fixed md:hidden shadow-xl top-16 transition-all z-40 bg-white   h-[280px] w-full flex flex-col gap-4 poppins text-xl'}>
              <Link to='/'><li className='border-b-2 font-semibold' onClick={handleClick}>Home</li></Link>
              <Link to='/category' className='border-b-2 font-semibold' onClick={handleClick}><li>Category</li></Link>
              <Link to='/location' className='border-b-2 font-semibold' onClick={handleClick}><li>Location</li></Link>
              <Link to='/faq'><li className='border-b-2 font-semibold' onClick={handleClick}>FAQ</li></Link>
              <li className='py-2 mt-2 px-4 text-center signIn text-white rounded-xl w-full'>Sign In</li>
            </ul>
    </>
  )
}

export default Navbar