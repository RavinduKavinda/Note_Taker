const express = require('express');
const connectDB = require('./conn');
require('dotenv').config();
const cors = require('cors')
const app = express();
const noteRoutes = require("./routes/noteRoutes")
const path=require("path")


//port
const PORT = process.env.PORT || 8000;

//db connect
connectDB(process.env.DATABASE_URL);

//middleware
app.use(express.json())
const _dirname = path.dirname("")
const buildpath = path.join(__dirname,"../frontend/dist")
app.use(express.static(buildpath));
app.use(
    cors({
        "origin": "*",
    }))

app.use("/",noteRoutes)

//route
app.get("/",(req,res)=> {
    res.send("Hello World");
});

//server start massage
app.listen(PORT,() => {
    console.log(`Server is running on localhost:${PORT}`);
});
