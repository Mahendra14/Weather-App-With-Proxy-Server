const express = require('express')
const cors =require('cors')
require('dotenv').config()
const rateLimit = require('express-rate-limit')
const app = express()



//adding rate limiting middleware
// Rate limiting
//we can see in the response header a X-rate-limit
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 Mins
    max: 100, //max requests made
  })
  app.use(limiter)
  app.set('trust proxy', 1)
//setting cors
app.use(cors());


//making our public one the static folder in express to open when the server loads
app.use(express.static('public'))

//we can directly open our application usin the localhost:5000 now cuz its static now

//setting port
const PORT = process.env.PORT || 5000;


//to redirect it to routes/index file
//generally we need to use ./routes/file_name.js as it is index its fine
app.get("/api",require("./routes"))

app.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT}`);
})