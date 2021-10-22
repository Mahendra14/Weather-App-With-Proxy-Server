const express = require('express')
const cors =require('cors')
require('dotenv').config()

const app = express()

//setting cors
app.use(cors());

//setting port
const PORT = process.env.PORT || 5000;


//to redirect it to routes/index file
//generally we need to use ./routes/file_name.js as it is index its fine
app.get("/api",require("./routes"))

app.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT}`);
})