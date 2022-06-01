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
      <div className='w-[60%] '>
        <h1>Premium Square Sunglasses</h1>
        <p>$32.95</p>
        {/* ---------------------------------- COUNTER ---------------------------------- */}
        <div className='flex text-2xl items-center gap-10'>
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
        

      </div>
    </>
  )
}

export default LeftSide