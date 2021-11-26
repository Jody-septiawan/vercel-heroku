// import postgres Pool
const { Pool } = require('pg')


// setup connection pool
const dbPool = new Pool({
  database: 'db_blog',
  port: 5432,
  user: 'postgres',
  password: 'root' //based on your first postgresql installation setup
})

// export db pool to be used for query
module.exports = dbPool