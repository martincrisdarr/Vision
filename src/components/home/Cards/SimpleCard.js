import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
function SimpleCard({photo, name, price}) {
  return (
    <>
      <li className='flex flex-col items-center justify-between gap-4 shadow-xl p-4 '>
        <img src={photo} alt="sunglasses" className='object-fit w-[90%] ' />
        <p className='text-center'>{name}</p>
        <p>{price}</p>
        <div className='flex items-center cursor-pointer'>
          <div className='h-12 w-12 flex justify-center items-center text-black bg-[#E7E3E3]'><AiOutlineHeart size='1.5rem' /></div>
          <div className='flex items-center px-2 h-12  bg-black text-white gap-2'>
            <FaShoppingCart size='1.5rem' />
            <p className='text-[70%] sm:text-md '>ADD TO CART</p>
          </div>
        </div> 
      </li>
    </>
  )
}

export default SimpleCard