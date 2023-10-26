import React, { useRef, useState } from 'react'
import { hotels } from '../constants'
import Confirm from './Confirm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Offers = () => {
    const [confirm,setConfirm]=useState(false)
    const [hotel,setHotel]=useState({})
    const containerRef = useRef(null);
    const scrollRight = () => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += 300; // Adjust the scroll distance as needed
        }
      }; 

      const scrollLeft = () => {
        if (containerRef.current) {
          containerRef.current.scrollLeft -= 300; // Adjust the scroll distance as needed
        }
      };
    return (
        <>
        <div className='w-full flex justify-center pt-10  '>
            <div className='w-3/4 bg-white rounded-xl shadow px-12'>
                <h1 className='font-bold  text-lg text-center py-3 '>Offers For You</h1>
                <div className='flex px-6 justify-between'>
                    <div className=' gap-2 md:gap-4 hidden md:flex'>
                        <p>All</p>
                        <p>Bank Offers</p>
                        <p>Flights</p>
                        <p>Hotels</p>
                        <p>Cabs</p>
                        <p>Bus</p>
                        <p>Trains</p>
                    </div>
                    <div className='max-w-full'>
                        <p className='text-blue-500 font-bold'>See All Offers</p>

                    </div>
                </div>
                <div className='w-full   px-4 flex overflow-scroll gap-2 pb-8 pt-8 scroll-smooth' ref={containerRef}>
                {hotels.map(item=><div className='p-2 border min-w-[300px]'>
                    <img src={item.image} alt="" />
                    <h1 className='font-bold'>{item.name}</h1>
                    <h6 className='text-sm font-bold text-gray-100'>{item.place}</h6>
                    <p>{item.description}</p>
                    <button onClick={()=>{setConfirm(true);setHotel(item)}} className='mt-4 px-2 py-2 text-white shadow rounded bg-[#ff6d38] flex justify-center items-center'>Book Now</button>
                </div>)}
                </div>
                <div className='flex gap-1 justify-end pb-2'>
                    <FontAwesomeIcon onClick={scrollLeft} className='p-3 bg-orange-500 text-white rounded-full' icon={faArrowLeft}/>
                    <FontAwesomeIcon onClick={scrollRight} className='p-3  bg-orange-500 text-white rounded-full' icon={faArrowRight}/>
                </div>
            </div>
            {confirm&&<Confirm hotel={hotel} close={setConfirm}/>}

        </div>
        </> 
    )
}

export default Offers
