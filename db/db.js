require('dotenv').config()
const pgp = require("pg-promise")()

const cn = {

    database: 'blogtest',
    user: process.env.USER,
    password: process.env.PASSWORD
}

const db = pgp(cn)

module.exports = {
    db
}