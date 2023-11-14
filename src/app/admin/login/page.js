"use client"

import React, { useState } from 'react'

const page = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, password)
  }

  return (
    <form onSubmit={handleSubmit} className='w-fit p-5 md:p-0 md:w-full gap-5 h-[100vh] flex flex-col justify-center items-center'>
      <h1 className='text-xl'>Login page</h1>
      <div className='flex flex-col gap-2'>
        <label>
          <input
            required
            placeholder='username'
            className='bg-gray-200 p-5 rounded-sm' 
            type='text' 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
          />
        </label>
        <label>
          <input
            required
            placeholder='password'
            className='bg-gray-200 p-5 rounded-sm' 
            type='password' 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
          />
        </label>
      </div>
      <button 
        className='bg-black text-white p-3 rounded-sm'
        type='submit'
      >
        Login
      </button>
    </form>
  )
}

export default page