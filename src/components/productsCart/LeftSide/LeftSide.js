import React, { useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
function LeftSide() {
  const [count, setCount] = useState(0)
  const handleAddClick = () =>{
    setCount(count + 1)
  }
  const handleRestClick = () =>{
    if (count > 0){
      setCount(count - 1)
    }
  }
  return (
    <>
      <div className='w-full px-16 lg:px-0 lg:w-[60%] poppins'>
        <h1 className='text-3xl'>Premium Square Sunglasses</h1>
        <p className='text-xl mt-2'>$32.95</p>
        {/* ---------------------------------- COUNTER ---------------------------------- */}
        <div className='flex text-2xl items-center gap-10 mt-8'>
          <div>
            <input 
            type="button" 
            onClick={handleRestClick} 
            value='-' 
            className='w-12 cursor-pointer'/>
            {count}
            <input 
            type="button" 
            onClick={handleAddClick} 
            value='+' 
            className='w-12 cursor-pointer'/>
          </div>
          <div className='flex text-3xl gap-4'>
            <AiOutlineHeart className='cursor-pointer'/>
            <FaShoppingCart className='cursor-pointer'/>
          </div>
        </div>
        {/* ------------------------------- DESCRPTION ------------------------------- */ }
        <h2 className='text-2xl mt-8'>Description</h2>
        <p className='text-sm mt-4'>Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious feel with subtly curved lenses. Made with lightweight TR90 plastic, these large square sunglasses have a striking layered design. The matte translucent front rim features a dark tortoiseshell overlay and dark tortoiseshell temple arms. A metal brow bar adds a modern touch. Please note, the actual pattern on eyeglasses may vary slightly from the one pictured.</p>
        <div className='flex text-lg gap-6 mt-6'>
          <p>Available: Yes</p>
          <p>Model No: 1116615</p>
        </div>
         
      </div>
    </>
  )
}

export default LeftSide