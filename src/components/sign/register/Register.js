import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
function Register() {
  return (
    <>
      <div className='py-32 px-6 lg:px-32 flex flex-col md:flex-row poppins items-center justify-center'>
        <LeftSide S />
        <RightSide />
      </div>
        
    </>
  )
}

export default Register