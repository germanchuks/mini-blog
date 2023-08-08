import blog_db from "../db.js";

export const getItemAll = (req, res) => {
    const qry = req.query.cat
        ? "SELECT * FROM items WHERE cat = ?"
        : "SELECT * FROM items";
    // const qry = "SELECT * FROM items"

    blog_db.query(qry, [req.query.cat], (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data);
    })
}

export const getItemId = (req, res) => {
    res.json('post from controller')
}

export const addItem = (req, res) => {
    res.json('post from controller')
}

export const deleteItem = (req, res) => {
    res.json('post from controller')
}

export const updateItem = (req, res) => {
    res.json('post from controller')
}
