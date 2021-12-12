module.exports = {
  development: {
    username: 'pguser',
    password: 'pgpassword',
    database: 'edifpi',
    host: 'localhost',
    dialect: 'postgres'
  },
  test: {
    username: 'root',
    password: '',
    database: '',
    host: '',
    dialect: 'postgres'
  },
  production: {
    username: '',
    password: '',
    database: '',
    host: '',
    dialect: 'postgres'
  }
}
