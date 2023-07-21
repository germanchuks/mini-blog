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

export const login = (req, res, next) => {
    // CHECK USER EXIST
    const qry = "SELECT * FROM users WHERE username = ?"

    db.query(qry, [req.body.username], (err, data) => {
        if (err) return res.json(err)
        if (data.length === 0) return res.status(404).json("User not found")

        //Compares password IF user exists
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password)

        if (!isPasswordCorrect) return res.status(404).json("Wrong username or password")

        //GENERATE JWT TOKEN
        
        //Create unique id to identify each user and related posts. 
        const userId = { id: data[0].id}
        const userKey = process.env.ACCESS_TOKEN_SECRET    //Generate random key

        function generateAccessToken(userId) {
            return jwt.sign(userId, userKey, {expiresIn: '500s'})
        }

        
        const token = generateAccessToken(userId)
        // const token = jwt.sign(userId, userKey);

        //Separate user password from response data
        const { password, ...other } = data[0]


        // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
        // res.setHeader('Access-Control-Allow-Credentials', 'true');
        // res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

        //Parse token as cookie
        res.cookie('accessToken', token, {maxAge: 900000, httpOnly: true })
        res.json({...other, token})
        next();

    });

};

/////






/////

export const logout = (req, res) => {
    res.json('Auth logout from control')
}