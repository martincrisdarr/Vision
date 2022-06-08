import React from 'react'

function LittleImgContainer({photo,choosenPhoto}) {
  return (
    <>
      <div className='px-2 py-4 shadow-xl'>
        <img src={photo} alt="" className='w-16  object-fit ' onMouseOver={choosenPhoto} />
      </div>
    </>
  )
}

export default LittleImgContainer