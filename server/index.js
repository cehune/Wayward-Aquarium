import postRoutes from './routes/posts.js'
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import {connectToDb, getDb} from './db.js'
// import {MongoClient} 


const app = express();
mongoose.set('strictQuery', true);
const CONNECTION_URL = "mongodb+srv://wayward_zoo:wayward_zoo123@cluster0.hzwgfda.mongodb.net/fish_data?retryWrites=true&w=majority"

mongoose.Promise = global.Promise;
app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}))
app.use(cors());
app.use("/api", postRoutes);
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


//mongoose.set('useFindAndModify', false);

