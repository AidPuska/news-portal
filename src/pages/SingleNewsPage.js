"use client"

import React, { useState } from 'react'
import { data } from './Main'
import Image from 'next/image'
import { Inter, Roboto_Mono } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const text = 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana."Kao političar niste uvijek sretni svaki dan kada pročitate šta piše u novinama, ali u slobodnoj zemlji normalno je komentarisati. Nekada vam se i svidi. Važno je imati dobar radni odnos, možda i malo više od dobrog. Vaša odgovornost je da informišete ljude i to je jednako važno kao i naša odgovornost da usmjerimo budućnost ka razvoju", kazao je na početku.Šta želimo ja i međunarodna zajednica od BiH, zapitao se Schmidt."Odgovor je jednostavan. Ništa posebno. Želimo da pomognemo BiH da bude normalna zemlja, normalan i pouzdan partner u zajednici država i da je pomognemo na putu ka EU integraciji. Ali znamo da to uopće nije lako, no moguće je. Vratio bih se na svoje iskustvo iz 1989. godine, kada je moja zemlja postigla napredak kakav nikada nismo očekivali, jer je bilo neočekivano da Berlinski zid koji je sagrađen prije 60 godina tek tako padne - ne nasiljem, već zbog čistog opredjeljenja naroda. To je nešto što me uvelo u politiku. Nikada neću zaboraviti 1990. godine kada sam izabran u njemački parlament. Čuda se mogu desiti, ali prije nego tražite čuda, treba shvatiti da sva čuda u historiji imaju puno rada. Zato sam uvjeren da mlada BiH može i treba postati model dobrog života, ako fokus bude na zajedničkoj budućnosti, a ne da se cement troši na cementiranje podjela", rekao je.Kazao je kako ima osjećaj da se previše vremena troši na prošlost, na izgradnju narativa o dramatičnoj prošlosti."Ja znam da je teška historija i situacija, ali to je nešto što nisu započele žrtve'

const SingleNewsPage = ({singleNews}) => {

  const [openModal, setOpenModal] = useState(false)
  const [author, setAuthor] = useState(false)
  const [comment, setComment] = useState(false)

  let width;
  if(typeof window !== 'undefined'  ) {
    width = window.innerWidth;
  }

  console.log('a', singleNews)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(test)
  }

  return (
    <div className='w-full h-full flex flex-col items-center'>
      <div className={`w-[${width}px] md:w-[800px] h-full flex flex-col gap-5`}>
        <Image
          height={400}
          width={800} 
          src={singleNews?.image}
          alt='Glavna slika vijesti '
        />

        <div className='px-5 md:px-20 mb-10 flex flex-col'>

          <h1 className='text-[20px] font-bold'>{singleNews?.title}</h1>

          <div className='flex justify-between text-[13px] mb-10'>
            <p>Autor: {singleNews?.author} - Prije 2d</p>
            <div className='flex items-center gap-1'>
              <p>512</p>
              <Image 
                objectFit='contain'
                src={require('../../public/share.png')}
                alt='share news'
              />
            </div>
          </div>

          <h3 className='text-justify text-[13px] first-letter:text-3xl mb-10'>{singleNews?.desc}</h3>

          <div className='mb-10'>
            <button 
              className='bg-sky-500 p-1 rounded text-white mb-3 text-sm'
              onClick={() => {setOpenModal(true)}}
            >
              Dodaj komentar
            </button>

            {openModal && (
              <form onSubmit={handleSubmit} className='flex flex-col p-5 gap-2'>
                <input placeholder='ime' className='border rounded' />
                <textarea placeholder='komentar' className='border rounded' />

                <button type='submit' onClick={() => setOpenModal(false)} className='bg-black p-[1px] rounded text-white'>Objavi</button>
              </form>
            )}

            <h1>Komentari: </h1>
            <div
              className='h-fit w-full flex flex-col gap-2'
            >
              {!singleNews.comments ? (
                <p className='text-[12px] p-2 font-[300]'>Nema komentara.</p>
              )
              :
              (
                singleNews.comments.map(comment => (
                  <div className='flex gap-2 items-center justify-between shadow-sm shadow-black/50 p-2' key={comment.author}>
                    <p className={`text-[12px] basis-[85%] text-justify ${inter.variable}`}>{comment?.text.slice(0,300)}</p>
                    <p className='basis-[15%] text-sm bg-black text-white text-center'>{comment.author}</p>
                  </div>
                ))
              )
              }
            </div>
          </div>

          <div>
            <h1>Vise ovakvih vijesti: </h1>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleNewsPage