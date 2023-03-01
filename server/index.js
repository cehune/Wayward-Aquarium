import postRoutes from './routes/posts.js'
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

// import {MongoClient} 
const app = express();
mongoose.set('strictQuery', true);
const CONNECTION_URL = "{MongoDB API Connection}"

mongoose.Promise = global.Promise;
app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}))
app.use(cors());

//using routes in the api extension
app.use("/api", postRoutes);
const PORT = process.env.PORT || 5000;

//Mongoose to mongodb connection
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


