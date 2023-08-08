import { createRequire } from "module";
import express from "express"
import itemRoute from "./routes/itemRoute.js"
import authRoute from "./routes/authRoute.js"
// import userRoute from "./routes/userRoute.js"
import cors from 'cors';


const require = createRequire(import.meta.url);

//Allow access to dotenv files
require('dotenv').config()

//ALlow api to store cookies to browser
const cookieParser = require('cookie-parser');


const app = express();

//Allow json file from client side using express
app.use(express.json())

//Allow app to parse tokens as cookie
app.use(cookieParser())

//Allow clientside to access API endpoints
app.use(cors());

//CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

//Get posts from api
app.use("/api/items", itemRoute)

// Get users from api
// app.use("/api/users", userRoute)


// //Get auth from api
app.use("/api/auth", authRoute)


app.listen(8000, () => {
    console.log("Connected!")
})