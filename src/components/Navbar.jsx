import React from 'react'
import { navHead } from '../constants'

const Navbar = () => {
  return (
    <div className='w-full h-14  shadow-md flex items-center px-4 justify-between'>
        <img src="https://goibibo.ibcdn.com/styleguide/images/goLogo.png" className='h-3/5' alt="" />
        {navHead.map(item=> <p  className='lg:block hidden font-bold text-gray-600'>{item.name}</p> )}
        <div className='text-blue-500 border border-blue-500 p-2 rounded hover:text-white hover:bg-blue-500 duration-500 transition'>
            Login/SignUp
        </div>
    </div>
  )
}

export default Navbar
