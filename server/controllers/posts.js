//functions for the route post requests

import PostMessage from '../models/postMessage.js';
export const getInfo = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        console.log(req.body)
        res.status(200).json(postMessages);
    }catch (error) {
        res.status(404).json({message: error.message});
    }
}
const setFavourite = async (req, res) => {
    const post = req.body;
    
    try{
       
    } catch {

    }
}

