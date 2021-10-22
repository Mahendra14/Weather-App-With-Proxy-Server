const express = require('express')
const cors =require('cors')

const app = express()

//setting cors
app.use(cors());

//setting port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT}`);
})