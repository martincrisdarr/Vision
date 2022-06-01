import React from 'react'
import SimpleCard from './SimpleCard'

function Cards({lists, title}) {
  return (
    <>
      <h1 className='text-5xl px-8 md:px-16 pt-16 font-semibold'>{title}</h1>
      <div className='p-6 md:p-16 poppins'>
        <ul className='grid grid-cols-2 lg:grid-cols-4  justify-between gap-4 '>
          {
            lists.map(list =>{
                return <SimpleCard photo={list.frontPic} name={list.name} price={list.price} />
            })
          }
        </ul>
      </div>
    </>
  )
}

export default Cards