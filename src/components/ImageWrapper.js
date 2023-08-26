import Image from 'next/image'
import React from 'react'

const ImageWrapper = ({source, width, height, addStyles, size}) => {



  return (
    <div className={`relative w-[${size === 'big' ? '50%' : '100%'}] h-[${height}%]`}>
      <Image 
        src={source}
        className={`w-full h-full ${addStyles}`}
        quality={100}
        layout='fill'
        objectFit='cover'
        alt='slika vijesti'
      />
      <div className='h-[18px] absolute bottom-0 w-full bg-[#4D2115]' />
      <div className='h-[18px] absolute top-0 w-full bg-[#4D2115]' />
    </div>
  )
}

export default ImageWrapper