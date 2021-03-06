import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js';


const app = express();




app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes );
const  CONNECTION_URL = 'mongodb+srv://elmahdi43:YGpZqO4g4sHWEebq@clusternodejs.gt1y0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)) )
    .catch(()=> (error) => console.log(error.message) );



    //mongoose.set('useFindAndModify', false);

// const app = express();


// app.use(bodyParser.json());
// const db = require('./config/key').mongoURI;

// mongoose
//         .connect(db)
//         .then( ()=> console.log('MongoDB Connected ...'))
//         .catch( err=> console.log(err));
// // ues routes

// app.use('/api/items', items);


// const port = process.env.PORT  || 5000 ;

// app.listen(port,  ()=> console.log(`Server started on port ${port}`));