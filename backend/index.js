import express, { response } from "express";
import { PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import  booksRoute from "./routes/booksRoute.js"
import cors from "cors"


console.log("what the heck")
const app = express()

//solving cors
//birinci yol 
app.use(cors())
//ikinci yol
// app.use(cors({
//   origin: "http://localhost:300",
//   methods:["GET","POST","PUT","DELETE"],
//   allowedHeaders:["Content-Type"]
// }))


app.use(express.json())
app.get("/", (request, response) => {
  console.log(request)
  return response.status(234).send("welcome to mern stact tutorial")
})

app.use("/books",booksRoute)//burda books yazdığımız için ordan siliyoruz



mongoose.connect(mongoDBURL)
.then(() => {
    console.log("connected to the database successfully")
    app.listen(PORT, () => {
      console.log(`LİSTENİNG TO THİS PORT:${PORT}`)
    })
  })
.catch((error) => { console.log(error) })
