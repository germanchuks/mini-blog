import express from "express"
import postRoute from "./routes/postRoute.js"
import authRoute from "./routes/authRoute.js"
// import userRoute from "./routes/userRoute.js"

const app = express();

app.use(express.json())
 
//Get posts from api
app.use("/api/posts", postRoute)


// Get users from api
// app.use("/api/users", userRoute)


// //Get auth from api
app.use("/api/auth", authRoute)

app.listen(5000, () => {
    console.log("Connected!")
})