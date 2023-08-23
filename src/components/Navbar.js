import React from 'react'

const Navbar = () => {
  return (
    <div className='w-[1160px] flex mx-auto mt-5'>
      <div className='flex justify-center p-5 gap-24 
      text-black font-semibold border-b-2 border-black text-[14px]'>
        <h2 className='mr-[170px]'>Najnovije</h2>
        <h2>Politika</h2>
        <h2>Sport</h2>
        <h2>Europa</h2>
        <h2>Svijet</h2>
        <h2>Turska</h2>
        <h2>Crna-Hronika</h2>
      </div>
    </div>
  )
}

export default Navbar