// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_NAME || 'pernwithknex',
      user: process.env.POSTGRES_USER || 'kevinhaith',
      password: process.env.POSTGRES_USER_PW || '',
      port: process.env.POSTGRES_PORT || 5432,
      host: process.env.POSTGRES_HOST || 'localhost'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    // {
    //   database: 'my_db',
    //   user:     'username',
    //   password: 'password'
    // },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  }

};
