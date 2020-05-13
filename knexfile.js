const connectionString = process.env.DATABASE_URL || ''

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true, 
    connection: {
      filename: './data/blog.db3',
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // needed when using foreign keys
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  },

  production: {
    client: 'pg',
    connection: connectionString,
    pool: {
      min: 1,
      max: 4
    },
    migrations: {
      directory: './data/migrations'
    }
  }

};
