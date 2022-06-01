import React from 'react'

function GlassCategories({photo, name}) {
  return (
    <>
      <div className=' md:w-[500px] h-48 mx-auto shadow-xl mt-12 flex items-center justify-center gap-16 px-24 poppins text-2xl'>
        <img src={photo} alt={name} className="w-[80%] " />
        <p className='w-32'>{name} </p>
      </div>
    </>
  )
}

export default GlassCategories