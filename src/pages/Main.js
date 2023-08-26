"use client"
import Header from '@/components/Header'
import ImageWrapper from '@/components/ImageWrapper'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import SingleNews from '@/components/SingleNews'
import Image from 'next/image'
import React from 'react'

const orderOfGrid = ['big', 'middle', 'middle', 'middle', 'middle', 'big', 'middle', 'middle', 'small', 'small']

export const data = [
  {
    id: 0,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/bih.jpg'),
    size: 'big'
  },
  {
    id: 1,
    title: 'Foto/Video: Teška nesreća u Sarajevu',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/foto.jpg'),
    size: 'middle'
  },
  {
    id: 2,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: 'middle'
  },
  {
    id: 3,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/predsjednistvo.jpg'),
    size: 'middle'
  },
  {
    id: 4,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: 'middle'
  },
  {
    id: 5,
    title: 'EU o stupanju na snagu zakona u RS:',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/eu.jpeg'),
    size: 'big'
  },
  {
    id: 5,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: 'middle'
  },
  {
    id: 5,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/bih.jpg'),
    size: 'middle'
  },
  {
    id: 5,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: 'big'
  },
  {
    id: 5,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: 'middle'
  },
  {
    id: 5,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: 'middle'
  },
]

const Main = () => {

  return (
    <div className='mx-0 md:mx-20'>
      <Header />
      <Navbar />
      <div className='flex justify-around gap-5 p-5'>

        <div className='bg-grey-400 w-[300px] border border-black'>
          <Sidebar />
        </div>

        <article className='w-[70%] flex flex-col gap-2'>
          <div className='grid grid-cols-4 gap-2'>
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