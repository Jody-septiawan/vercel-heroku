# Postgresql implementation with NodeJs

## Pre-requesite
- Install postgresql driver for NodeJs using npm command:
```
  npm install pg
```

## Create Database
![alt text](https://github.com/DumbwaysDotId/pre-class-chapter-2/db-diagram.png "Database ERD")
- Note: create column authorId on day 6 (relation)

## Setup db connection
```javascript
// import postgres Pool
const { Pool } = require('pg')


// setup connection pool
const dbPool = new Pool({
  database: 'db_blog',
  port: 5432,
  user: 'postgres',
  password: 'root' //based on your first postgres setup
})

// export db pool to be used for query
module.exports = dbPool
```

## Get data using db query in blog route
```javascript
// define route for get blog page
app.get('/blog', (req, res) => {
  //rende blogs data to page 

  // checkout connection
  db.connect((err, client, done) => {
    if (err) throw err

    // execute query to get data
    client.query('SELECT * FROM blogs', (err, result) => {
      done()
      if (err) throw err

      res.render('blog', { isLogin: isLogin, blogs: result.rows[0]})
    })
  })
})
```