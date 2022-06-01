import React from 'react'

function People(props) {
  return (
    <>
        <div className='mt-6'>
            <h2 className='text-2xl'>{props.name}</h2>
            <p className='mt-2 text-lg'>Address: {props.address}</p>
            <p className='text-lg'>Contact no: {props.contact}</p>
            <p className='text-lg'>Location: <span className='text-[#6CADF9] cursor-pointer '>Google Map</span></p>
        </div>
    </>
  )
}

export default People