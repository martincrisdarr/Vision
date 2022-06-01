import React from 'react'
import ImgContainer from './ImgContainer/ImgContainer'
import LeftSide from './LeftSide/LeftSide'

function Cart() {
  return (
    <>
      <div className='pt-32 px-28 flex items-center justify-around '>
        <ImgContainer />
        <LeftSide />
      </div>
    </>
    
  )
}

export default Cart