import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"
import BooksTable from '../components/Home/BooksTable'
import BooksCard from '../components/Home/BooksCard'


const Home = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [showType, setShowType] = useState()

  useEffect(() => {
    console.log(showType)
    setLoading(true)
    axios.get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])


  return (
    <div className={'p-4 z-0 '}>
      {/* <div className={"absolute top-0 left-0 bottom-0 right-0 bg-blue-500 blur-sm  "+(toBlur?"  bg-black":"")}>gwerrghew lorem500</div> */}
      <div className="flex justify-center items-center gap-x-4">
        <button className="  bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={() => { setShowType("table") }}>Table</button>
        <button className="  bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={() => { setShowType("card") }}>Card</button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to={"/books/create"}>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      <div >
        {loading ? <Spinner /> : showType === "table" ? <BooksTable books={books} /> : <BooksCard books={books} />}
      </div>



    </div>
  )
}

export default Home
