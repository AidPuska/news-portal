"use client"

import React from 'react'
import { data } from './Main'
import Image from 'next/image'

const text = 'Visoki predstavnik u BiH danas je u Sarajevu održao nastupnu konferenciju za medije, na kojoj je govorio kako vidi BiH i šta će raditi na razvoju države za bolji život svih građana."Kao političar niste uvijek sretni svaki dan kada pročitate šta piše u novinama, ali u slobodnoj zemlji normalno je komentarisati. Nekada vam se i svidi. Važno je imati dobar radni odnos, možda i malo više od dobrog. Vaša odgovornost je da informišete ljude i to je jednako važno kao i naša odgovornost da usmjerimo budućnost ka razvoju", kazao je na početku.Šta želimo ja i međunarodna zajednica od BiH, zapitao se Schmidt."Odgovor je jednostavan. Ništa posebno. Želimo da pomognemo BiH da bude normalna zemlja, normalan i pouzdan partner u zajednici država i da je pomognemo na putu ka EU integraciji. Ali znamo da to uopće nije lako, no moguće je. Vratio bih se na svoje iskustvo iz 1989. godine, kada je moja zemlja postigla napredak kakav nikada nismo očekivali, jer je bilo neočekivano da Berlinski zid koji je sagrađen prije 60 godina tek tako padne - ne nasiljem, već zbog čistog opredjeljenja naroda. To je nešto što me uvelo u politiku. Nikada neću zaboraviti 1990. godine kada sam izabran u njemački parlament. Čuda se mogu desiti, ali prije nego tražite čuda, treba shvatiti da sva čuda u historiji imaju puno rada. Zato sam uvjeren da mlada BiH može i treba postati model dobrog života, ako fokus bude na zajedničkoj budućnosti, a ne da se cement troši na cementiranje podjela", rekao je.Kazao je kako ima osjećaj da se previše vremena troši na prošlost, na izgradnju narativa o dramatičnoj prošlosti."Ja znam da je teška historija i situacija, ali to je nešto što nisu započele žrtve'

const SingleNewsPage = () => {

  return (
    <div className='w-full h-full flex flex-col items-center'>
      <div className='w-[800px] h-full flex flex-col gap-5'>
        <Image 
          height={400}
          width={800}
          src={data[0].image}
        />

        <div className='px-20'>
          <h1 className='text-[20px] font-bold'>{data[0].title}</h1>

          <div className='flex justify-between text-[13px] mb-10'>
            <p>Autor: {data[0].author} - Prije 2d</p>
            <div className='flex items-center gap-1'>
              <p>512</p>
              <Image 
                objectFit='contain'
                src={require('../../public/share.png')}
              />
            </div>
          </div>

          <h3 className='text-justify text-[13px] first-letter:text-3xl'>{text}</h3>
        </div>
      </div>
    </div>
  )
}

export default SingleNewsPage