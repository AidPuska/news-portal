"use client"
import Header from '@/components/Header'
import ImageWrapper from '@/components/ImageWrapper'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import SingleNews from '@/components/SingleNews'
import Image from 'next/image'
import React from 'react'

const orderOfGrid = ['big', 'middle', 'middle', 'middle', 'middle', 'big', 'big', 'middle', 'middle', 'big']

const getCardSize = (id) => {
  if (id >= 0 && id <= 9) return id;
  else if (id > 9) return id % 10;
}

export const beforeData = [
  {
    id: 0,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/bih.jpg'),
    size: '', 
    category: 'politika'
  },
  {
    id: 1,
    title: 'Foto/Video: Teška nesreća u Sarajevu',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/foto.jpg'),
    size: '', category: ''
  },
  {
    id: 2,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: '', category: ''
  },
  {
    id: 3,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/predsjednistvo.jpg'),
    size: '', category: ''
  },
  {
    id: 4,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: '', 
    category: 'politika'
  },
  {
    id: 5,
    title: 'EU o stupanju na snagu zakona u RS:',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/eu.jpeg'),
    size: '', category: '' 
  },
  {
    id: 6,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: '', category: '' 
  },
  {
    id: 7,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/bih.jpg'),
    size: '', category: '' 
  },
  {
    id: 8,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: '', category: '' 
  },
  {
    id: 9,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: '', category: '' 
  },
  {
    id: 10,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: '', category: ''
  },
  {
    id: 11,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: '', category: ''
  },
  {
    id: 12,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: '', category: ''
  },
  {
    id: 13,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: '', category: ''
  },
  {
    id: 14,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: '', category: ''
  },
  {
    id: 15,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: '', category: ''
  },
  {
    id: 16,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: '', category: ''
  },
  {
    id: 17,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: '', category: ''
  },
  {
    id: 18,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: '', category: ''
  },
  {
    id: 19,
    title: 'Schmidt: BiH neće postati',
    desc: 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana. idi BiH i šta će raditi na razvoju države za bolji život svih građana.',
    author: 'Admin',
    image: require('../../public/sefik.png'),
    size: '', category: ''
  },
]

export const data = beforeData.map(item => (
  {...item, size: orderOfGrid[getCardSize(item.id)]}
))

const Main = () => {

  return (
    <div className='mx-0 md:mx-20'>
      <Header />
      <Navbar />
      <div className='flex w-[400px] md:w-full mx-auto justify-around gap-5 p-5'>

        <div className='bg-grey-400 hidden md:flex w-[300px] border border-black'>
          <Sidebar />
        </div>

        <article className='w-[70%] flex flex-col gap-2'>
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