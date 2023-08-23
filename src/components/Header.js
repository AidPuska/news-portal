"use client"
import Image from 'next/image'
import React from 'react'

const Header = () => {

  return (
    <div>
      <div className='relative bg-red-500 
        flex flex-col items-center'>
        <Image
          src={require('../../public/velika-sala.png')}
          className='w-full h-[500px] md:h-full object-cover'
          alt='main_image'
          quality={100}
        />
        <Image 
          src={require('../../public/arrow-left.png')}
          className='w-12 h-12 absolute top-1/2 left-2 md:left-20 hover:scale-95'
          alt='left arrow'
          quality={100}
        />
        <Image 
          src={require('../../public/arrow-right.png')}
          className='w-12 h-12 absolute top-1/2 right-2 md:right-20 hover:scale-95'
          alt='right arrow'
          quality={100}
        />
        <div className='absolute w-52 md:w-fit 
          bottom-5 items-center flex flex-col'>
          <p className='text-lg text-justify drop-shadow-xl 
          md:text-3xl font-bold text-white'>
            Ustavni sud Bosne i Hercegovine odlučio o spornom slučaju...
          </p>
          <p className='text-[12px] underline 
          decoration-white text-white hover:scale-105'>
            Čitaj više...
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header