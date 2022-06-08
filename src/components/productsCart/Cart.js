import React from 'react'
import BotSide from './BotSide/BotSide'
import ImgContainer from './ImgContainer/ImgContainer'
import LeftSide from './LeftSide/LeftSide'

function Cart() {
  return (
    <>
      <div className='pt-32 lg:px-28 flex flex-col lg:flex-row items-center gap-6 lg:justify-around '>
        <ImgContainer />
        <LeftSide />
      </div>
      <BotSide />
    </>
    
  )
}

export default Cart