import React from 'react'
import {BsInstagram, BsTwitter, BsYoutube} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
function Footer() {
  return (
    <>
        <div className='flex flex-col  md:flex-row gap-8 w-full px-8 md:px-16 py-12 bg-black text-white poppins'>
            {/*  -------------------------------- LEFT SIDE ------------------------------- */ }
            <div className='flex flex-col gap-4 w-full lg:w-[70%] '>
                <h2 className='text-2xl'>ABOUT US</h2>
                <div>
                    <p>Nepal's Coolest Eyewear Store</p>
                    <p>ORDER ANYTIME AND RECEIVE FREE AND FAST DELIVERY.</p> 
                </div>
                <h2 className='text-2xl'>CONTACT</h2>
                <div className='flex gap-4 items-center flex-wrap'>
                    <span className='flex items-center gap-2'>
                        <p className='font-semibold text-lg'>Phone</p>
                        <p>9823-749-232</p>
                    </span>
                    <span className='flex items-center gap-2'>
                        <p className='font-semibold text-lg'>Email</p>
                        <p>visioncustomercare@outlook.com</p>
                    </span>
                    <span className='flex items-center gap-2'>
                        <p className='font-semibold text-lg'>Address</p>
                        <p>Maitidevi, Kathmandu</p>
                    </span>
                    
                </div>
            </div>
            {/* RIGHT SIDE */}
            <div className='w-full lg:w-[30%]'>
                <h2 className='text-2xl'>POLICY</h2>
                <span className='flex w-full mt-4'>
                    <p className='w-1/2 cursor-pointer'>Delivery</p>
                    <p className=' pl-6 cursor-pointer'>Payment</p>
                </span>
                <span className='flex w-full mt-2'>
                    <p className='w-1/2 cursor-pointer'>Exchange and Return</p>
                    <p className=' pl-6 cursor-pointer'>Cancellation</p>
                </span> 
                {/* SOCIAL MEDIA */}
                <div className='flex flex-col lg:flex-row items-center gap-4 mt-12'>
                    <h2 className='text-2xl'>SOCIALS</h2>
                    <span className='flex gap-4 '>
                        <BsInstagram className='text-3xl cursor-pointer'/>
                        <BsTwitter className='text-3xl cursor-pointer'/>
                        <FaFacebookF className='text-3xl cursor-pointer'/>
                        <BsYoutube className='cursor-pointer text-3xl'/>
                    </span>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer