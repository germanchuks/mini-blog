import { createRequire } from "module";
import express from "express"
import postRoute from "./routes/postRoute.js"
import authRoute from "./routes/authRoute.js"
// import userRoute from "./routes/userRoute.js"
import cors from 'cors';


const require = createRequire(import.meta.url);
require('dotenv').config()
const cookieParser = require('cookie-parser');


const app = express();

//Allow json file from client side using express
app.use(express.json())

//Allow app to parse tokens as cookie
app.use(cookieParser())

//Allow clientside to access API endpoints
app.use(cors());

//Get posts from api
app.use("/api/posts", postRoute)

// Get users from api
// app.use("/api/users", userRoute)


// //Get auth from api
app.use("/api/auth", authRoute)


app.listen(8000, () => {
    console.log("Connected!")
})