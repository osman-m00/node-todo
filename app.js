import express from 'express';
import mongoose from 'mongoose';
import config from './config';


const app = express();
const PORT = process.env.PORT || 3000;

//middleware to access static files and handle templating
app.use('/assets', express.static(__dirname + '/public'));
app.view('view engine', 'ejs');

mongoose.Connection(config.getDbConnection());


app.listen(PORT, ()=>{
    console.log(`Server running on Port: ${PORT}`);
})