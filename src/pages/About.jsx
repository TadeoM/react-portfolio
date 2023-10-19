import React from 'react'

const About = () => {
  return (
    <div className='mx-5 lg:flex lg:justify-between'>
      <div className='m-auto pr-10 max-w-md w-96 flex justify-center items-center'>
        <img className='rounded-md' src={require("../images/me.jpg")} alt='image of me' />
      </div>
      <div className='m-auto'>
        <h2 className='text-left my-2 text-3xl'>Tadeo <span className='text-red-500'>Menichelli</span></h2>
        <h3 className='text-left my-3 text-xl'>Gameplay Engineer</h3>
        <p className='text-left my-10 text-md'>This is the description, we're going to put a ton of interesting stuff in here that people will definitely read.</p>
      </div>
    </div>  
  )
}

export default About;
