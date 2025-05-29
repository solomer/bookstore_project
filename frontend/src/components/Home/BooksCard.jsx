import React, { useState } from 'react'
import { PiBookOpenTextLight } from "react-icons/pi"
import { BiUserCircle } from "react-icons/bi"
import { BsInfoCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from "react-icons/ai"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"
import BookSingleCard from './BookSingleCard'

BsInfoCircle
const BooksCard = ({ books }) => {
  const[showBlur,setShowBlur] = useState(false)
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
{<div className={' backdrop-blur-sm transition-all  bg-opacity-60  fixed top-0  right-0 left-0 z-10 bottom-0'+  ( !showBlur?"hidden":" backdrop-blur-sm ")}></div>}
      {books.map((item) => (
        <BookSingleCard key={item._id} item={item} setShowBlur={setShowBlur}/>
      ))}
    </div>
  )
}

export default BooksCard