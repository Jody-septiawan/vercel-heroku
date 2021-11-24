# NodeJs Introduce

NodeJs is a runtime built for make backend development possible

## Pre-requesite
- Make sure you have editor to ease your project development
- Download & Install NodeJs [here](https://nodejs.org/en/download/)

## Hello world
```javascript
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
```

## Create Blog Form with Bootstrap

Boostrap is a CSS Framework built for boost productivity in styling with simplicity setup and use

- Go to Boostrap official documentation to [get started](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
- Copy CSS and attach to in your html `head` element
- Explore components in the documentation for creating blog form page (navbar and forms section)


