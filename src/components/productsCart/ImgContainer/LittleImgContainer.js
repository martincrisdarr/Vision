import React from 'react'

function LittleImgContainer({photo,tuvieja}) {
  return (
    <>
      <div className='px-2 py-4 shadow-xl'>
        <img src={photo} alt="" className='w-16 md:w-16' />
      </div>
    </>
  )
}

export default LittleImgContainer