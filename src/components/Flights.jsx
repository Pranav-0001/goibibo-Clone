import React from 'react'
import { TripForm, fairType } from '../constants'

const Flights = () => {
  return (
    <div className='w-full  bg-no-repeat bg-cover bg-center '  style={{backgroundImage:'url("/Bg.svg")'}}>
        <h1 className='font-bold text-xl text-white text-center py-4'>Domestic and International Flights</h1>
      <div className='flex justify-center lg:px-60 px-3 '>
        <div className='w-full bg-white shadow-md  rounded-md px-3 py-3'>
            <div className='flex gap-4 px-4 pt-2'>
                <div className='flex gap-1'>
                    <input type="radio" name="type" id="" />
                    <label htmlFor="">One-way</label>
                </div>
                <div className='flex gap-1'>
                    <input type="radio" name="type" id="" />
                    <label htmlFor="">Round Trip</label>
                </div><div className='flex gap-1'>
                    <input type="radio" name="type" id="" />
                    <label htmlFor="">Multy-City</label>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-5  gap-3 w-full'>
                {TripForm.map(item=><div><p>{item.name}</p><input className='w-full outline-none border border-gray-200 shadow rounded px-3 h-10' type={item.type}></input></div>)}
            </div>
            <div className='lg:grid grid-cols-2 py-5 gap-2 items-center  '>
                <div className='bg-gray-100 w-fit p-2 rounded'>
                   {fairType.map(e=> <><input type="radio" name="" id="" /><span className='pe-3'>{e}</span></>)}
                </div>
                <div className='flex gap-2 items-center'>
                    <p>Trending Search : </p>
                    <li className='list-none bg-gray-100 p-2 rounded shadow  w-fit'>Banglore - Mumbai</li>

                </div>
            </div>
            <div className='flex justify-center'>
                <button className='rounded-full bg-[#ff6d38] px-6 py-3 text-white font-bold'>Search Flights</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Flights
