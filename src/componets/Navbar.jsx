import React from 'react'
import {AiOutlineMenu,AiOutlineSearch} from "react-icons/ai"
import {BsFillCartFill} from "react-icons/bs"

const Navbar = () => {
  return (

    // navbar
    <div className='max-w-(1640px) max-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div cursor-pointer>
           <AiOutlineMenu  size={30}/> 
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Uber <span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-(14px)'>
            <p className='bg-black text-white rounded-full p-2'>Delivery</p>
            <p className='p-2'>PickUp</p>
        </div>
        </div>

        {/* search input */}

        <div className='bg-gray-200 rounded-full flex text-center px-2 w-(200px) sm:w-(400px) lg:(500px)'>
            <AiOutlineSearch size={25}/>
            <input className='bg-transparent p-2 focus:outline-none w-full' type='text' placeholder='Search foods'/>
        </div>
        {/* cart button */}
        <button className='bg-black text-white md:flex items-center py-2 rounded-full'>
            <BsFillCartFill size={20} className='mr-20'/> Cart
        </button>

        {/* Mobile Menu */}

        <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>

        </div>

        {/* Side Draw Menu */}

        <div>
            
        </div>



    </div>
  )
}

export default Navbar