"use client"
import { data } from '@/pages/Main'
import Image from 'next/image'
import React, { useState } from 'react'

const Header = () => {

  const [dataNum, setDataNum] = useState(0)

  const width = window.innerWidth;

  return (
    <div>
      <div className={`relative flex flex-col items-center w-[${width}px] md:w-full mx-auto h-[400px]`}>
        <Image
          src={data[dataNum].image}
          className='w-full md:w-full h-[500px] md:h-full object-cover'
          alt='main_image'
          quality={100}
        />
        <Image 
          src={require('../../public/arrow-left.png')}
          className='w-12 h-12 absolute top-1/2 left-4 md:left-20 hover:scale-95'
          alt='left arrow'
          quality={100}
          onClick={() => setDataNum(prev => prev - 1)}
        />
        <Image 
          src={require('../../public/arrow-right.png')}
          className='w-12 h-12 absolute top-1/2 right-4 md:right-20 hover:scale-95'
          alt='right arrow'
          quality={100}
          onClick={() => setDataNum(prev => prev + 1)}
        />
        <div className='absolute w-52 md:w-fit 
          bottom-5 items-center flex flex-col'>
          <p className='text-lg md:text-justify drop-shadow-xl 
          md:text-3xl font-bold text-white'>
            {data[dataNum].title}
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