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
      <div className='h-[1px] absolute bottom-0 w-full bg-black' />
      <div className='h-[1px] absolute top-0 w-full bg-black' />
    </div>
  )
}

export default ImageWrapper