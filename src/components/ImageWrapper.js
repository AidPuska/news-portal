import Image from 'next/image'
import React from 'react'

const ImageWrapper = ({source, width, height}) => {
  return (
    <div className={`relative w-[${width}] h-[${height}]`}>
      <Image 
        src={source}
        className='w-full h-full'
        quality={100}
        alt='slika vijesti'
      />
      <div className='h-[18px] absolute bottom-0 w-full bg-[#4D2115]' />
      <div className='h-[18px] absolute top-0 w-full bg-[#4D2115]' />
    </div>
  )
}

export default ImageWrapper