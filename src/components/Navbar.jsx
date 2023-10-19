import React, { useState } from 'react'
import {BeakerIcon, Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/solid'
/*
"bg-slate-800 text-white flex-auto justify-between
    items-center gap-8 px-px"
    */
const Links = [
  {name: 'Home', link:'/Home'},
  {name: 'About', link:'/About'},
  {name: 'Projects', link:'/Projects'},
];

function Navbar(activeName) 
{
  let [isOpen, setisOpen] = useState(false);

  function renderLink(link,index)
  {
    return (
      <li key={index} className='font-semibold my-7 md:my-0 md:ml-8'>
        <a className={`${link.link == activeName.activeName ? 'text-red-500' : 'text-white' } hover:text-rose-500 duration-500`} href={link.link}>{link.name}</a>
      </li>
    )
  }
  return (
    <div className='w-full fixed top-0 left-0 z-10 bg-zinc-900 text-base whitespace-nowrap'>
      <div className='md:px-auto py-4 px-7 md:flex justify-between items-center w-3/5 md:m-auto'>
        {/*logo here*/}
        <div className='flex text-2x1 cursor-pointer items-center gap-2'>
          <BeakerIcon className='w-7 h-7 text-red-500'/>
          <span className='font-bold text-white hover:text-red-500'>Inscribe</span>
        </div>

        {/*Menu Icon */}
        <div onClick={() => setisOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden text-white'>
          {
            isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />
          }
        </div>

        {/* nav links here */}
        <ul className={`md:flex text-left md:items-center md:pb-0 pb-12 absolute md:static 
        md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all 
        duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'} bg-zinc-900`}>
          {
            Links.map((link,index) => renderLink(link,index))
          }
          <button className='btn bg-red-500 text-white py-1 px-3 md:ml-8 rounded md:static '>Contact Me</button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar