import React from 'react'
import Places from './Places'
function Location() {
  return (
    <>
      <div className='flex flex-col gap-6 poppins bg-[#F8F8F8] px-24 pt-32 pb-24 '>
          <h1 className='text-3xl font-semibold'>OUR BRANCHES</h1>
          <Places 
          name= 'Kathmandu Branch'
          address= 'Boudha, Tushal'
          contact= '9851-328-564'/>
          <Places
          name='Kathmandu Branch' 
          address=' Ganabahal, Kichapokhari, New Road, Arniko Complex'
          contact= '9851-213-596'/>
          <Places 
          name='Pokhara Branch'
          address='Chipledhunga, Trade Mall, Ground Floor'
          contact='9856-079-555'/>
          <Places 
          name='Butwal Branch'
          address='Tinkune Chow, Srijana Mart'
          contact=' 9811-927-397'/>
          <Places 
          name='Chitwan Branch'
          address='Chitwan, Pragatipath'
          contact='056-53348'/>
          <Places 
          name='Itahari Branch'
          address='Itahari, Sky Plaza'
          contact='9827-023-489'/>
          <Places 
          name='Dharan Branch'
          address='Putali Line, Maskey complex, Next to Vinayak Digital'
          contact='9819-358-689'/>
          
      </div>
    </>
  )
}

export default Location