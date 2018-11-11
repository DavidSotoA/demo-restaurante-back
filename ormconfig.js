require('dotenv').config()

module.exports = {
   "type":         process.env.DB_DRIVER,
   "host":         process.env.DB_HOST,
   "port":         process.env.DB_PORT,
   "username":     process.env.DB_USER,
   "password":     process.env.DB_PASSWORD,
   "database":     process.env.DB_DATABSE,
   "synchronize":  true,
   "logging":      false,
   "entities": [
        `./${process.env.NODE_ENV == "development" ? "src" : "dist" }/models/**/*.{ts,js}`
   ],
   "migrations": [
      "src/database/migrations/**/*.js"
   ],
   "cli": {
        "migrationsDir": "src/database/migrations"
    }
}