//functions for the route post requests
import { MongoClient } from 'mongodb';

import PostMessage from '../models/postMessage.js';
export const getAllInfo = async (req, res) => {
    try {
        await PostMessage.find({}).then(function(fishes){
            res.send(fishes)
        })

    }catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getOne = async (req, res) => {
    try {
        await PostMessage.find({title: req.params.title}).then(function(fishes){
            res.send(fishes)
        })

    }catch (error) {
        res.status(404).json({message: error.message});
    }
}

