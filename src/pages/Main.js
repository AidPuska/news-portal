"use client"
import Header from '@/components/Header'
import ImageWrapper from '@/components/ImageWrapper'
import Navbar from '@/components/Navbar'
import SingleNews from '@/components/SingleNews'
import Image from 'next/image'
import React from 'react'

const data = [
  {
    id: 0,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: 'big'
  },
  {
    id: 1,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: 'middle'
  },
  {
    id: 2,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: 'middle'
  }
]

const Main = () => {

  return (
    <div className='mx-0 md:mx-20'>
      <Header />
      <Navbar />
      <div className='flex justify-around gap-5 p-5'>
        <div className='bg-grey-400 w-[200px] border border-black' />
        <div className='flex gap-2'>
          <SingleNews size='big' />
          <SingleNews size='middle' />
          <div className='flex flex-col justify-between'>
            <SingleNews size='small' />
            <SingleNews size='small' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main