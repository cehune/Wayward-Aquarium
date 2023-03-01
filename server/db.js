import { MongoClient } from 'mongodb';

let dbConnection;
let uri  = "{Mongodb API connection}";

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
