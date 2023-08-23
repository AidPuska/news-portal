"use client"
import Header from '@/components/Header'
import ImageWrapper from '@/components/ImageWrapper'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const Main = () => {

  return (
    <div className='mx-0 md:mx-20'>
      <Header />
      <Navbar />
    </div>
  )
}

export default Main