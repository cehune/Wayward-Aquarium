import postRoutes from './routes/posts.js'
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'



const app = express();
app.use('/posts', postRoutes);
mongoose.set('strictQuery', true);

app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}))
app.use(cors());

const CONNECTION_URL = "mongodb+srv://wayward_zoo:wayward_zoo123@cluster0.hzwgfda.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .then((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);

