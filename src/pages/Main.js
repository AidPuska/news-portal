"use client"

import Header from '@/components/Header'
import ImageWrapper from '@/components/ImageWrapper'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import SingleNews from '@/components/SingleNews'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { beforeData } from '../../assets/data'

const orderOfGrid = ['big', 'middle', 'middle', 'middle', 'middle', 'big', 'big', 'middle', 'middle', 'big']

const getCardSize = (id) => {
  if (id >= 0 && id <= 9) return id;
  else if (id > 9) return id % 10;
}

export const data = beforeData.map(item => (
  {...item, size: orderOfGrid[getCardSize(item.id)]}
))

const Main = () => {

  let width = window.innerWidth;

  return (
    <div className='mx-0 md:mx-20'>
      <Header />
      <Navbar />
      <div className={`flex w-[${width}px] md:w-full mx-auto justify-around gap-5 p-5`}>

        <div className='bg-grey-400 hidden md:flex w-[300px] border border-black bg-[#F0F0F0]'>
          <Sidebar />
        </div>

        <article className='w-full md:w-[70%] flex flex-col gap-2'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
            {data.map(news => (
              <SingleNews 
                key={news.id} 
                size={news.size} 
                news={news} 
              />
            ))}
          </div>
      </article>
    </div>
    </div>
  )
}

export default Main