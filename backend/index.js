const express = require('express');
const connectDB = require('./conn');
require('dotenv').config();
const app = express();
const noteRoutes = require("./routes/noteRoutes")

//port
const PORT = process.env.PORT || 8000;

//db connect
connectDB(process.env.DATABASE_URL);

//middleware
app.use(express.json())
app.use("/",noteRoutes)

//route
app.get("/",(req,res)=> {
    res.send("Hello World");
});

//server start massage
app.listen(PORT,() => {
    console.log(`Server is running on localhost:${PORT}`);
});
