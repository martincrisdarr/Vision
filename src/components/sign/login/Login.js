import React from 'react'
import LeftSideLogin from './LeftSideLogin'
import RightSideLogin from './RightSideLogin'

function Login() {
  return (
    <>
      <div className='py-32 px-6 lg:px-32 flex flex-col md:flex-row poppins items-center justify-center'>
        <LeftSideLogin />
        <RightSideLogin />
      </div>
    </>
  )
}

export default Login