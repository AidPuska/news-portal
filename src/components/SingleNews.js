"use client"

import React from 'react'
import ImageWrapper from './ImageWrapper'
import Image from 'next/image'
import Link from 'next/link'

const SingleNews = ({size, news}) => {

  if(window.innerWidth <= 640) {
    size = 'big'
  }

  return (
    <Link 
      href={{
        pathname: "/vijesti",
      }}
      className={size === 'big' && 'col-span-2 h-[350px] flex' || size === 'middle' && 'col-span-1 h-[350px] border-b border-black' || size === 'small' && 'col-span-1 h-[170px] flex'}
    >
    {/* <div className={size === 'big' && 'w-[400px] h-[350px] flex' || size === 'middle' && 'w-[200px] h-[350px] overflow-hidden border-b border-black' || size === 'small' && 'w-[400px] h-[170px] flex'}> */}

        <ImageWrapper
          addStyles='object-cover bg-red-500'
          source={news.image}
          height={size === 'big' ? '100' : '50'}
          size={size}
        />

      {size === 'big' || size === 'middle' ? <div className={size === 'big' ? 'w-[50%] h-full flex flex-col justify-between border-t border-r border-b border-black/50 p-3 bg-[#E9ECEF]' : 'h-[50%] bg-[#E9ECEF] flex flex-col justify-between border-r border-l border-black p-3'}>
        <h1 className='text-[15px] font-semibold'>{news.title}</h1>
        <p className='text-[12px]'>{size === 'middle' ? news.desc.slice(0, 90)+'...' : news.desc}</p>
        <div>
          <div className='bg-black w-[80%] h-[0.5px] mb-2' />
          <p className='text-[12px]'>Author: {news.author}</p>
        </div>
      </div> : (
        <div className='w-[100%] h-full flex flex-col justify-center items-center border-t border-r border-b border-black p-3'>
          <h1 className='text-[16px] font-semibold'>{news.title}</h1>
        </div>
      )}

    </Link>
  )
}

export default SingleNews