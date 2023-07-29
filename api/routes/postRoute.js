import express from 'express';
import {addPost, getPostId, updatePost, deletePost, getPostAll} from '../controllers/postCtrl.js'

const router = express.Router()

router.get("/", getPostAll)
router.get("/:id", getPostId)
router.post("/", addPost)
router.delete("/:id", deletePost)
router.put("/:id", updatePost)
 
export default router