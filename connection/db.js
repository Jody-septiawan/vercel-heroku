// import postgres Pool
const { Pool } = require('pg')


// setup connection pool
const dbPool = new Pool({
  database: 'db_blog',
  port: 5432,
  user: 'postgres',
  password: null
})

// export db pool to be used for query
module.exports = dbPool