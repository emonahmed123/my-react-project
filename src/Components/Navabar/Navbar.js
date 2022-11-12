import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
   const [nav,setNav]= useState(true)
   const handleNav =()=>{
    setNav(!nav)
   }
 
 
    return (
    <div  className='flex justify-between  items-center  h-24 text-white max-w-[1240px] px-4 mx-auto'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>

    <ul className=' hidden  md:flex '>
     <li className='p-4'>Home</li>
     <li className='p-4'>Company </li>
     <li className='p-4'>Resources </li>
     <li className="p-4">About </li>
     <li className='bg-[#00df9a] w-[200px] p-4 rounded-md font-medium my-4 mx-auto px-11 my-0 text-black'>Get Started </li>


    </ul>
    <div onClick={handleNav} className='block md:hidden' >
        {
            !nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20}/>  
        }
       
    </div>

    <div className={
    !nav ? 'fixed top-0 left-0 w-[50%] h-[400px] border-r ease-in-out duration-500 bg-[#000300]  border-r-gray-600' : 'fixed top-[-100%]  ease-in-out duration-500 w-[30%] left-0 '


    }>
    <h1 className='w-full text-3xl font-bold text-[#00df9a]  mt-8'>REACT.</h1>
    <ul className='pt-12 uppercase ' >
     <li className='p-4'>Home</li>
     <li className='p-4'>Company </li>
     <li className='p-4'>Resources </li>
     <li className="p-4">About </li>
     <li className="p-4">Contact </li>


    </ul>
    </div>
    </div>
  )
}

export default Navbar
