import { MongoClient } from 'mongodb';

let dbConnection;
let uri  = "mongodb+srv://wayward_zoo:wayward_zoo123@cluster0.hzwgfda.mongodb.net/fish?retryWrites=true&w=majority";

export const connectToDb= (cb) => {
      MongoClient.connect(uri)
        .then(client => {
          dbConnection = client.db()
          return cb()
        })
        .catch(err => {
          console.log(err)
          return cb(err)
        })
    }
    
export const getDb= () => dbConnection