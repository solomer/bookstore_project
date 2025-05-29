import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { enqueueSnackbar } from 'notistack'

const DeleteBook = () => {
  const {id} = useParams()
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const handleDelete= ()=>{
    setLoading(true)
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setLoading(false)
      enqueueSnackbar("Deleted successfully",{variant:"default"})
      navigate("/")
    })
    .catch((err)=>{console.log(err);enqueueSnackbar("Error.",{variant:"error"})})
  }
  return (
    <div className='p-4'>
      <h5 className='text-3xl my-4'>Delete Book</h5>
      <BackButton/>
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl p-8 w-[600px] mx-auto">

      <h3 className='text-2xl'>are you sure you want to delete ?</h3>
      <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDelete}> Yes, delete it</button>
      </div>
    </div>
  )
}

export default DeleteBook