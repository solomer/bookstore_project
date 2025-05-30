import { useState } from "react"
import React from 'react'
import Spinner from "../components/spinner"
import BackButton from "../components/BackButton"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useSnackbar } from "notistack"
const CreateBooks = () => {
  const [title,setTitle] = useState("")
  const [author,setAuthor] = useState("")
  const [publishYear,setPublishYear] = useState("")
  const [loading,setLoading]= useState(false)
  const navigate = useNavigate()
  const {enqueueSnackbar} = useSnackbar()

  const handleSubmit = ()=>{
    console.log("geldi")
    const data ={
          title,
          author,
          publishYear
    }
    setLoading(true)
    axios
    .post("http://localhost:5555/books/",data)
    .then(()=>{
      setLoading(false)
      enqueueSnackbar("Book created successfully",{variant:"success"})
      navigate("/")
    })
    .catch((error)=>{
      setLoading(false)
      // alert("there is an error please check the console")
      enqueueSnackbar("Error.",{variant:"warning"})
      console.log(error);
    })
  }
  return (
    <div className="p-4">
      <BackButton/>
           
      <h1>Create Book</h1>
      {loading ? <Spinner/>:(

 <div className="">
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
            <div className="my-4">
              <label htmlFor="" className="text-xl mr-4 text-gray-400">Title</label>
              <input 
              type="text"
              value={title}
              onChange={(e)=>{setTitle(e.target.value)}}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              /> 
            </div>
            <div className="my-4">
              <label htmlFor="" className="text-xl mr-4 text-gray-400">Author</label>
              <input 
              type="text"
              value={author}
              onChange={(e)=>{setAuthor(e.target.value)}}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              /> 
            </div>
            <div className="my-4">
              <label htmlFor="" className="text-xl mr-4 text-gray-400">Publish Year</label>
              <input 
              type="text"
              value={publishYear}
              onChange={(e)=>{setPublishYear(e.target.value)}}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              /> 
            </div>
            <button className="p-2 bg-sky-300 m-8" onClick={handleSubmit }> submit</button>
          </div>

      </div>


      )}



     
      </div>
  )
}

export default CreateBooks