import  db  from "../db.js"


export const register = (req,res) => {
    res.json('Auth from control')

    // CHECK EXISTING USER
    const qry = "SELECT * FROM users WHERE email = ?  OR username = ?"
    
    db.query(qry, [req.body.email, req.body.username], (err,data) => {
        if (err) return res.json(err);
        //data.length checks if there is a data. Does not run if data is 0
        //status(409) returns already existing user error
        if (data.length) return res.status(409).json("User already exists!");
        
        
    })
}

export const login = (req,res) => {
    res.json('Auth login from control')
}

export const logout = (req,res) => {
    res.json('Auth logout from control')
}