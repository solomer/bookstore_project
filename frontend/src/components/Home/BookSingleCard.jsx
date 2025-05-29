import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from 'react-icons/bs'
import { BiShow } from 'react-icons/bi'
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"
import { PiBookOpenTextLight } from "react-icons/pi"
import { BiUserCircle } from "react-icons/bi"
import BookModal from './BookModal'
const BookSingleCard = ({ item ,setShowBlur}) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div key={item._id} className="border-2 bg-white rounded-lg px-4 py-2 m-4  relative hover:shadow-2xl  "  
    onMouseEnter={(e)=>{e.target.classList.add("z-10");setShowBlur(true)}} onMouseLeave={(e)=>{e.target.classList.remove("z-10");setShowBlur(false)}}
    > {/* relative bak */}
      <h2 className={"absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg "}>
        {item.publishYear}
      </h2>
      <div className="flex flex-col">

        <h1 className='text-gray-400 my-2'>{item._id}</h1>
        <div className='flex items-center gap-x-2 mb-1'>
          <PiBookOpenTextLight className='text-red-500 text-2xl'></PiBookOpenTextLight>
          <h1 className=''>{item.title}</h1>
        </div >
        <div className='flex items-center gap-2 mb-3'>

          <BiUserCircle className='text-red-500 text-2xl'></BiUserCircle>
          <h1 className=''>{item.author}</h1>
        </div>
        <div className="flex justify-around items-center my-4">
          <BiShow className='text-3xl text-blue-500 hover:text-black' onClick={() => { setShowModal(true) }}> </BiShow>
          <Link to={`/books/details/${item._id}`}>
            <BsInfoCircle className='text-2xl text-green-800 hover:text-black'></BsInfoCircle>
          </Link>
          <Link to={`/books/edit/${item._id}`}>
            <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black'></AiOutlineEdit>
          </Link>
          <Link to={`/books/delete/${item._id}`}>
            <MdOutlineDelete className='text-2xl text-red-600 hover:text-black'></MdOutlineDelete>
          </Link>
        </div>
      </div>
      {
        showModal && <BookModal item={item} onClose={() => { setShowModal(false) }} />
      }

    </div>)
}

export default BookSingleCard