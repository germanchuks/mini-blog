import db from "../db.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = (req, res) => {
    // res.json('Auth from control')

    // CHECK EXISTING USER
    const qry = "SELECT * FROM users WHERE email = ?  OR username = ?"

    db.query(qry, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err);
        //data.length checks if there is a data. Does not run if data is 0
        //status(409) returns already existing user error
        if (data.length) return res.status(409).json("User already exists!");

        //ENCRYPT USER PASSWORD USING BCRYPTJS
        //Hash the password and create a user
        const salt = bcrypt.genSaltSync(5);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const qry = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ]

        db.query(qry, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("User has been created")
        })


    })


}

export const login = (req, res) => {

    // CHECK USER EXIST
    const qry = "SELECT * FROM users WHERE username = ?"

    db.query(qry, [req.body.username], (err, data) => {
        if (err) return res.json(err)
        if (data.length === 0) return res.status(404).json("User not found")

        //Compares password IF user exists
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password)

        if (!isPasswordCorrect) return res.status(404).json("Wrong username or password")

        //Create unique id to identify each user and related posts. 
        const userId = { id: data[0].id}
        const userKey = 'jwtkey'    //Generate random key

        const token = jwt.sign(userId, userKey);

         //Separate user password from response data
         const {password, ...other} = data[0]

        //Parse token as cookie
        res.cookie("access_token", token, {
            httpOnly: true  //Applications  in script wont reach cookie directly. For api request only.  
        }).status(200).json(other)

    })

}

export const logout = (req, res) => {
    res.json('Auth logout from control')
}