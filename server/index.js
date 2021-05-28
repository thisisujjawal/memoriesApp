const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const postRoutes = require('./routes/posts.js');

//CONFIGURATION
const app = express();
dotenv.config({path: "./config.env"})
const PORT = process.env.PORT || 8000;

//MONGODB
const CONNECTION_URL = process.env.CONNECTION_URL;
mongoose.connect(CONNECTION_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("connection for mongoDB has been successful..."))
.catch((err) => console.log(`connection for mongoDB has been failed --> error : ${err}`));
// mongoose.set('useFindAndModify' , false);


//MIDDLEWARE
app.use(express.json({
    extended:true,
    limit:"30mb"
}));
app.use(express.urlencoded({
    extended:true,
    limit:"30mb"    
}));
app.use(cors());

//ROUTES
app.use('/posts' , postRoutes);

//APP LISTENER
app.listen(PORT , (err)=>{
    if(err) console.log("Failed to run server")
    else console.log(`Server listening successfully on PORT ${PORT}` )
})
