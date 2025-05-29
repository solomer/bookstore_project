import express from "express" 
import { Book } from "../models/bookmodel.js"//BURAYA JS YAZILABİLİR .JS
const router = express.Router()
 
 //route for saving a new book

 router.post("/", async(request,response)=>{
  try {
    if(!request.body.title || !request.body.author || !request.body.publishYear){
      return response.status(400).send({message:"please send all title author and publish year" + request.body.author,})
    }
    const newBook = {
      title: request.body.title,
      author : request.body.author,
      publishYear :request.body.publishYear,// "request.publishYear"
    }
    const book = await Book.create(newBook)
    // console.log("after book.create" + book)

    return response.status(201).send(book)
  } catch (error) {
    console.log(error)
    response.status(500).send({message: error.message})
  }
})
//route for getting all books from database
router.get("/",async (request,response)=>{
  try {
    const books = await Book.find({})

    return response.status(200).json({
      count: books.length,
      data: books
    })
  } catch (error) {
    console.log(error.message);
    response.status(500).send({message: error.message})
    
  }
})
//route for getting a book with id from database
router.get("/:id",async (request,response)=>{
  try {
    const {id} = request.params//ÖNEMLİ
    const book = await Book.findById(id)

    return response.status(200).json(book)
  } catch (error) {
    console.log(error.message);
    response.status(500).send({message: error.message})
    
  }
})
//route to update 
router.put("/:id",async(request,response)=>{
  try {
    if(!request.body.title || !request.body.author || !request.body.publishYear){
      request.status(400).send({message: "pelase send all the things "})
    }
    const {id} =  request.params

    const result = await Book.findByIdAndUpdate(id,request.body)

    if(!result){
      return response.status(404).json({message:"book not found"})
    }
    return response.status(200).send({message:"book updated successfully"})

  } catch (error) {
    console.log(error.message)
    response.status(500).send({message: error.message})
  }
})

//deleting a book
router.delete("/:id",async (request,response)=>{
  try {
    const result = await Book.findByIdAndDelete(request.params.id)
    
    if(!result){
      return response.status(404).send({message: "book not found"})
    }
    console.log(result)
    return response.status(200).send({message:"book deleted successfully"})

  } catch (error) {
    console.log(error.message)
    response.status(500).send({message: error.message})
  }
})

export default router