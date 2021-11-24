// import express to create a express app
const express = require('express')


// initialize app
const app = express()

app.set('view engine', 'hbs');// set up template engine

app.use('/public', express.static(__dirname + '/public')); // serving static files

// initialize hello world 
app.get('/', (req, res) => {
  res.send("Hello World")
})

// hard code login state
const isLogin = true

// define route for get home page 
app.get('/home', (req, res) => {
  res.render('index')
})

// define route for get blog page
app.get('/blog', (req, res) => {
  res.render('blog', {isLogin: isLogin})
})

// define route for get form blog page
app.get('/add-blog', (req, res) => {
  res.render("form-blog")
})

// define route for get blog detail page with params
app.get('/blog/:id', (req, res) => {
  // get selected blog id with params
  const blogId = req.params.id
  // render blog-detail page and send data to view
  res.render('blog-detail', { post: {
    id: blogId,
    title: 'Pasar Coding di Indonesia Dinilai Masih Menjanjikan',
    postDate: '12 Jul 2021 22:30 WIB',
    author: 'Ichsan Emrald Alamsyah',
    content: `Ketimpangan sumber daya manusia (SDM) di sektor digital masih
    menjadi isu yang belum terpecahkan. Berdasarkan penelitian
    ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
    meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
    dolor sit amet consectetur adipisicing elit. Quam, molestiae
    numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
    eligendi debitis?`
  }})
})

// define route for receive post data from client
app.post('/blog', (req, res) => {
  console.log({
    title: req.title,
    content: req.content
  })

  // redirect to specific route
  res.redirect('/blog')
})

// start server listener on PORT 5000
app.listen(5000, () => {
  console.log('server starting on PORT: 5000')
})
