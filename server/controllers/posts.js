//functions for the route post requests
import { MongoClient } from 'mongodb';

import PostMessage from '../models/postMessage.js';
export const getInfo = async (req, res) => {
    try {
        await PostMessage.find({}).then(function(fishes){
            res.send(fishes)
        })
        
        
    }catch (error) {
        res.status(404).json({message: error.message});
    }
}

