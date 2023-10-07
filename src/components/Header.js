"use client"
import { data } from '@/pages/Main'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = ({data}) => {

  const [dataNum, setDataNum] = useState(0)
  console.log(dataNum)
  const featuredData = data.filter(item => item.featured === true).splice(0, 5)
  console.log(featuredData)

  return (
    <div>
      <div className={`relative flex flex-col items-center w-[${400}px] md:w-full mx-auto h-[400px]`}>
        <Image
          src={featuredData[dataNum].image}
          className='w-full md:w-full h-[500px] md:h-full object-cover'
          alt='main_image'
          layout='fill'
          quality={100}
        />
        <Image 
          src={require('../../public/arrow-left.png')}
          className='cursor-pointer w-12 h-12 absolute top-1/2 left-4 md:left-20 hover:scale-95'
          alt='left arrow'
          quality={100}
          onClick={() => {
            if(dataNum === 0) setDataNum(featuredData.length - 1);
            else setDataNum(prev => prev - 1)
          }}
        />
        <Image 
          src={require('../../public/arrow-right.png')}
          className='cursor-pointer w-12 h-12 absolute top-1/2 right-4 md:right-20 hover:scale-95'
          alt='right arrow'
          quality={100}
          onClick={() => {
            if(dataNum === (featuredData.length - 1)) setDataNum(0);
            else setDataNum(prev => prev + 1)
          }}
        />
        <div className='absolute w-52 md:w-fit 
          bottom-5 items-center flex flex-col'>
          <p className='text-lg md:text-justify drop-shadow-xl 
          md:text-3xl font-bold text-white'>
            {featuredData[dataNum].title}
          </p>
          <Link 
            href={`/vijesti/${featuredData[dataNum].id}`}
            className='text-[12px] underline 
            decoration-white text-white hover:scale-105 cursor-pointer'
          >
            Čitaj više...
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header