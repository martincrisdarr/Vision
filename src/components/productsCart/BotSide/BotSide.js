import React from 'react'

function BotSide() {
  return (
    <>
      <h1 className='px-16  mt-16 text-2xl poppins'>More Info</h1>
      <div className='px-16 w-full poppins flex flex-col md:flex-row'>
        {/* -------------------------------- MORE INFO -------------------------------  */}
        
        <div className='w-full sm:w-1/2'>
          <h2 className='text-xl mt-12'>SPECIFICATIONS</h2>
          <ul className='mt-4 flex flex-col lg:flex-row flex-wrap '>
            <li className='w-full lg:w-1/2 mt-2'>PD Range: 55-75</li>
            <li className='w-full lg:w-1/2 mt-2'>Rim: Full Rim</li>
            <li className='w-full lg:w-1/2 mt-2'>Prescription Range: -6.00 +2.00</li>
            <li className='w-full lg:w-1/2 mt-2'>Shape: Square</li>
            <li className='w-full lg:w-1/2 mt-2'>Material: TR</li>
            <li className='w-full lg:w-1/2 mt-2'>Progressive / Bifocal: No</li>
            <li className='w-full lg:w-1/2 mt-2'>Feature: Custom engraving, Lightweight</li>
          </ul>
        </div>
        {/*  ------------------------------- FRAME SIZE -------------------------------  */}
        <div className='w-full sm:w-1/2 mb-32'>
          <h2 className='text-xl mt-12'>FRAME SIZE</h2>
          <ul className='mt-4 flex flex-col lg:flex-row flex-wrap '>
            <li className='w-full lg:w-1/2 mt-2'>Frame Width: 146 mm</li>
            <li className='w-full lg:w-1/2 mt-2'>Temple Length: 142mm</li>
            <li className='w-full lg:w-1/2 mt-2'>Bridge: 20mm</li>
            <li className='w-full lg:w-1/2 mt-2'>Lens Width: 52 mm</li>
            <li className='w-full lg:w-1/2 mt-2'>Lens Height: 46 mm</li>
            <li className='w-full lg:w-1/2 mt-2'>Frame Weight: 17 grams</li>
          </ul>
        </div>

      </div>
      
    </>
  )
}

export default BotSide