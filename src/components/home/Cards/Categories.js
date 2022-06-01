import React from 'react'
import Cards from './Cards'
import prescription from '../../productsJson/prescription.json'
import protective from '../../productsJson/protective.json'
import sunglasses from '../../productsJson/sunglasses.json'
function Categories() {
  return (
    <>
      <Cards lists={sunglasses} title='SUNGLASSES'/>
      <Cards lists={prescription} title='PRESCRIPTION FRAMES'/>
      <Cards lists={protective} title='PROTECTIVE EYEWARE'/>
    </>
  )
}

export default Categories