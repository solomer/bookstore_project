import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"

const BooksTable = ({books}) => {
  return (
    <div>
      <table className="w-ful border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">No</th>
                <th className="border border-slate-600 rounded-md">Title</th>
                {<th className="border border-slate-600 rounded-md max-md:hidden">Author</th>/*mobile sizing falan */}
                <th className="border border-slate-600 rounded-md max-md:hidden pl-1 pr-1">Publish Year</th>
                <th className="border border-slate-600 rounded-md">Operations</th>

              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book._id} className="h-8">
                  <td className="border border-slate-700 rounded-md text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center ">
                    {book.title}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden pl-1 pr-1">
                    {book.author}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden pl-1 pr-1">
                    {book.publishYear}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center ">
                    <div className="flex justify-center gap-x-3 pl-1">
                      <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className='text-2xl text-green-800'></BsInfoCircle>
                      </Link>
                      <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className='text-2xl text-yellow-600'></AiOutlineEdit>
                      </Link>
                      <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className='text-2xl text-red-600'></MdOutlineDelete>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

    </div>
  )
}

export default BooksTable