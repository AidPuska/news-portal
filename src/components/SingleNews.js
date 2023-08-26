"use client"

import React from 'react'
import ImageWrapper from './ImageWrapper'
import Image from 'next/image'

const SingleNews = ({size, news}) => {

  const desc = 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.'

  return (
    <div className={size === 'big' && 'col-span-2 h-[350px] flex' || size === 'middle' && 'col-span-1 h-[350px] border-b border-black' || size === 'small' && 'col-span-1 h-[170px] flex'}>
    {/* <div className={size === 'big' && 'w-[400px] h-[350px] flex' || size === 'middle' && 'w-[200px] h-[350px] overflow-hidden border-b border-black' || size === 'small' && 'w-[400px] h-[170px] flex'}> */}

      <ImageWrapper
        source={news.image}
        width={size === 'big' && '50%' || size === 'middle' && '100%' || size === 'small' && '100%'}
      />

      {size === 'big' || size === 'middle' ? <div className={size === 'big' ? 'w-[50%] h-full flex flex-col justify-between border-t border-r border-b border-black p-3' : 'h-[51.3%] flex flex-col justify-between border-r border-l border-black p-3'}>
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

    </div>
  )
}

export default SingleNews