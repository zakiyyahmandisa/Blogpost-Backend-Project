const db = require('../db/db')

//get all created users 
const getUser = async(req,res) => {
    try{ 
        const users = await db.any(`SELECT * FROM users`)
        res.status(200).json(users)
    }
    catch(err){
        res.status(500).send(err)

    }
}
//create one user 
const createUser = async (req,res) =>{
    try{ 
        const user = await db.none ("INSERT INTO users (fname, username, password, profile_pic) VALUES (${fname}, ${username}, ${password}, ${profile_pic})" , req.body)
        const data = await db.one ("SELECT * FROM users WHERE username = ${username} AND password = ${password} ", req.body)
        res.status(200).json(data) 

    }
    catch(err){
        res.status(500).send(err)

    }
}

module.exports = {
    getUser,
    createUser
}