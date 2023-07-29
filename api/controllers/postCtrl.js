export const getPostAll= (req,res, next) => {
    const qry = req.query.cat 
        ? "SELECT * FROM posts WHERE cat=?"
        : "SELECT * FROM posts";
}

export const getPostId = (req,res, next) => {
    res.json('post from controller')
}

export const addPost = (req,res) => {
    res.json('post from controller')
}

export const deletePost = (req,res) => {
    res.json('post from controller')
}

export const updatePost = (req,res) => {
    res.json('post from controller')
}
