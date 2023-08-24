"use client"

import React from 'react'
import ImageWrapper from './ImageWrapper'
import Image from 'next/image'

const SingleNews = ({size}) => {

  const desc = 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.'

  return (
    <div className={size === 'big' && 'w-[400px] h-[350px] flex' || size === 'middle' && 'w-[200px] h-[350px] overflow-hidden border-b border-black' || size === 'small' && 'w-[400px] h-[170px] flex'}>

      <ImageWrapper
        source={require('../../public/sefik.png')}
        width={size === 'big' && '50%' || size === 'middle' && '100%' || size === 'small' && '100%'}
        height={size === 'small' && '100%'}
      />

      {size === 'big' || size === 'middle' ? <div className={size === 'big' ? 'w-[50%] h-full flex flex-col justify-between border-t border-r border-b border-black p-3' : 'h-full flex flex-col gap-6 border-r border-l border-black p-3'}>
        <h1 className='text-[16px] font-semibold'>Schmidt: BiH neće postati </h1>
        <p className='text-[12px]'>{size === 'middle' ? desc.slice(0, 90)+'...' : desc}</p>
        <div>
          <div className='bg-black w-[80%] h-[0.5px] mb-2' />
          <p className='text-[12px]'>Author: Admin</p>
        </div>
      </div> : (
        <div className='w-[100%] h-full flex flex-col justify-center items-center border-t border-r border-b border-black p-3'>
          <h1 className='text-[16px] font-semibold'>Schmidt: BiH neće postati </h1>
        </div>
      )}

    </div>
  )
}

export default SingleNews