import express from 'express';
import { getItemAll, getItemId, addItem, deleteItem, updateItem } from '../controllers/itemCtrl.js'

const router = express.Router()

router.get("/", getItemAll)
router.get("/:id", getItemId)
router.post("/", addItem)
router.delete("/:id", deleteItem)
router.put("/:id", updateItem)

export default router