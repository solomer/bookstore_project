import React, { useEffect, useState } from 'react'
import Spinner from '../components/spinner'
import BackButton from '../components/BackButton'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { enqueueSnackbar } from 'notistack'

const EditBook = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [publishYear, setPublishYear] = useState("")
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {

    setLoading(true)
    axios.get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        // console.log(response.data.title)
        setLoading(false)
        setTitle(response.data.title)
        setAuthor(response.data.author)
        setPublishYear(response.data.publishYear)
      })
      .catch((err) => { console.log(err) })


  }, [])
  const handleSubmit = () => {
    const data={
      title,
      author,
      publishYear
    }
    setLoading(true)
    axios.put(`http://localhost:5555/books/${id}`,data)
    .then(()=>{
      setLoading(false)
      enqueueSnackbar("Book edited successfully",{variant:"success"})
      navigate("/")
    })
    .catch((err)=> {
      setLoading(false)
      enqueueSnackbar("Error.",{variant:"error"})
      console.log(err)
    })
  }



  return (
    <div>


      <BackButton />
      {loading ? <Spinner /> : (


        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label htmlFor="" className="text-xl mr-4 text-gray-400">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => { setTitle(e.target.value) }}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label htmlFor="" className="text-xl mr-4 text-gray-400">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => { setAuthor(e.target.value) }}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label htmlFor="" className="text-xl mr-4 text-gray-400">Publish Year</label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => { setPublishYear(e.target.value) }}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={handleSubmit}> submit</button>
        </div>
      )}


    </div>
  )
}

export default EditBook