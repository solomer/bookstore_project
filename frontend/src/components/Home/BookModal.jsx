import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'
const BookModal = ( {item,onClose}) => {
  return (
    <div className='  fixed top-0  right-0 left-0 z-10 bottom-0 flex justify-center items-center'  onClick={()=>{onClose()}}>
      <div className='bg-black backdrop-blur-sm bg-opacity-60  fixed top-0 right-0 left-0 z-10 bottom-0'></div>
      <div className=' w-[600px]  bg-white h-[400px] rounded-xl relative flex z-20 flex-col p-5 ' onClick={(event)=>{event.stopPropagation()}}>
        <AiOutlineClose className='absolute top-5 right-4 bg-red-600 rounded-[6px] text-3xl p-1 text-white cursor-pointer' onClick={onClose} />


        <h2 className="w-fit m-2 px-4 py-1 bg-red-300 rounded-lg">
          {item.publishYear}
        </h2>

        <h1 className='text-gray-400 my-2'>{item._id}</h1>
        <div className='flex items-center gap-x-2 mb-1'>
          <PiBookOpenTextLight className='text-red-500 text-2xl'></PiBookOpenTextLight>
          <h1 className=''>{item.title}</h1>
        </div >
        <div className='flex items-center gap-2 mb-3'>

          <BiUserCircle className='text-red-500 text-2xl'></BiUserCircle>
          <h1 className=''>{item.author}</h1>
        </div>

      </div>




    </div>
  )
}

export default BookModal