
import express from "express";
import {getAllInfo, getOne } from '../controllers/posts.js'


const router = express.Router();

//get fish data from controllers
router.get('/', getAllInfo)
router.get('/:title', getOne)
// router.post('/', )

export default router