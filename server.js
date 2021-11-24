// import express to create a express app
const express = require('express')

// initialize app
const app = express()

// initialize hello world 
app.get('/', (req, res) => {
  res.send("Hello World")
})

// start server listener on PORT 5000
app.listen(5000, () => {
  console.log('server starting on PORT: 5000')
})
