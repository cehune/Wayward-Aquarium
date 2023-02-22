
import express from "express";
import {getInfo } from '../controllers/posts.js'


const router = express.Router();


router.get('/', getInfo)
// router.post('/', )

export default router