PORT = process.env.PORT || 3000;

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");


const app = express();
app.use(express.json());
app.use(morgan("tiny"));

const catRouter = require("./routes/catRouter");
const indexRouter = require("./routes/indexRouter");
mongoose
    .connect("mongodb://localhost:27017/catTest",{useNewUrlParser:true})
    .then(()=>{
        console.log("Database connected succesfully.");
        app.use("/",indexRouter);
        app.use("/cats",catRouter);
});


app.listen(PORT,() =>{
    console.log("Listening to the port : " + PORT);

})