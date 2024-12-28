const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoURI = 'mongodb://localhost:27017/ecommerce';
const authRoutes = require('./routes/auth');


require("dotenv").config();

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);


app.get("/",(req,res) =>{
    res.send("E-commerce API is running");
});


console.log("JWT_SECRET:", process.env.JWT_SECRET);


mongoose.connect('mongodb://localhost:27017/ecommerce',{useNewUrlParser:true, useUnifiedTopology: true})
.then(()=>console.log("Connected to MongoDB"))
.catch(err=>console.error("MongoDB connection error:", err));

const PORT = process.env.PORT||4500;
app.listen(PORT,()=> console.log(`Server running on http:/localhost:${PORT}`));