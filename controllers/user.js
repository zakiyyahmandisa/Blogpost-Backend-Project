const db = require('../db/db')

//get all created users 
const getUser = async(req,res) => {
    try{ 
        const users = await db.many(`SELECT * FROM users`)

    }
    catch(err){
        res.status(500).send(err)

    }
}
//create one user 
const createUser = async (req,res) =>{
    try{ const user = await db.one (`INSERT INTO users (fname, username, password, profile_pic) VALUES (${fname}, ${username}, ${password}, ${profile_pic})`)
      req.body  

    }
    catch(err){
        res.status(500).send(err)

    }
}

module.exports = {
    getUser,
    createUser
}