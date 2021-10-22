const express = require("express")
const router = express.Router()
const needle = require('needle')
const url = require("url")
const apicache = require("apicache")

// Environment vars
const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_NAME = process.env.API_KEY_NAME
const API_KEY_VALUE = process.env.API_KEY_VALUE

//cache middleware
let cache = apicache.middleware


//adding to cache for 2 minutes

//in the response header we can see in cache-control
router.get('/api' , cache('2 minutes'),
    async (req, res, next) => {
        try {

            //tested locally in postman using localhost:5000/api?q=Hyderabad
          const params = new URLSearchParams({
            [API_KEY_NAME]: API_KEY_VALUE,
            //to get query param from the url of request sent
            ...url.parse(req.url, true).query,
          })
      
          const apiRes = await needle('get', `${API_BASE_URL}?${params}`)
          const data = apiRes.body
      
          // Log the request to the public API
          if (process.env.NODE_ENV !== 'production') {
            console.log(`REQUEST: ${API_BASE_URL}?${params}`)
          }
      
          res.status(200).json(data)
        } catch (error) {
          console.log(error);
        } 
  

});

module.exports = router