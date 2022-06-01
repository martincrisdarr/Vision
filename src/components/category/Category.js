import React from 'react'
import GlassCategories from './Categories.js/GlassCategories'

function Category() {
  return (
    <>
      <div className='py-24 px-6 sm:px-12 w-full gap-6 px-auto flex items-center justify-center flex-wrap '>
        <GlassCategories photo='assets/home/sunglasses/square.png' name='Sunglasses' />
        <GlassCategories photo='assets/home/sunglasses/aviator.png' name='Aviator' />
        <GlassCategories photo='assets/home/sunglasses/tint.png' name='Square' />
        <GlassCategories photo='assets/home/prescription/catEye.png' name='CatEye'/>
        <GlassCategories photo='assets/home/prescription/rimless.png' name='Rimless'/>
        <GlassCategories photo='assets/home/protective/sports.png' name='Sports'/> 
      </div>
    </>
  )
}

export default Category