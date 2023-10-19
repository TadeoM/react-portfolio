import React from 'react'

export const Home = () => {
  return (
    <div className='mx-auto space-y-4 translate-y-1/3'>
      <h1 className='font-bold text-6xl'>Tadeo <span className='text-red-500'>Menichelli</span></h1>
      <h3 className='text-3xl'>Gameplay Engineer</h3>
      <button href='/contact' className='btn bg-red-500 text-white text-l py-4 px-10 rounded-full leading-4'>Get in Touch</button>
    </div>
  )
}

export default Home;
