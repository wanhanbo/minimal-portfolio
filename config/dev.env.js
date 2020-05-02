'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  TMDB_ACCOUNT_ID: '"OTI3NzAxMw=="',
  TMDB_API_KEY: '"ZDZiYTE0OGI3NjRlMGRjYTJiNTM4ZTQzNzBjNDc3Zjc="',
  TMDB_SESSION_ID: '"MTZmYTRiZWZlNGNmMDJjNGNiNmQ2N2I5MTFhZGVmZjI5NzQ3OTYzMw=="'
})
