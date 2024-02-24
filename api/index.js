const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONOGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));


// app.use("/anna", (req, res)=>{
//     console.log("hey this is anna url")
// })
app.listen("5000", () => {
    console.log("Backend is running.");
});