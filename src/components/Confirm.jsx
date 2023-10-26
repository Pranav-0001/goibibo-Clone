import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Confirm = ({hotel,close}) => {
  return (
    <div className='w-full absolute bottom-60  flex justify-center px-2 '>
      <div className='lg:w-1/4 w-full bg-white py-5 shadow'>
        <div className='flex justify-end p-3'>
<h1><FontAwesomeIcon onClick={()=>close(false)} className='bg-[#ff6d38] text-white p-2 rounded-full' icon={faClose}/></h1>
        </div>
        <div className='flex justify-center w-full'>
 <img src="https://i.gifer.com/7efs.gif" className='h-40' alt="" />
        </div>
        <h1 className='text-center font-bold text-lg'> Thankyou for booking
        <p className='text-sm text-gray-400'>Booking Id:{hotel.id}</p>
        <p className='text-sm text-gray-400'>Hotel:{hotel.name}</p>
        <p className='text-sm text-gray-400'>Location:{hotel.place}</p>
        </h1>
       
      </div>
    </div>
  )
}

export default Confirm
