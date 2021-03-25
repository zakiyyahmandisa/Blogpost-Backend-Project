const db = require('../db/db')


const createUser = async (req,res) =>{
    try{
        const data = await db.none('INSERT INTO USERS (fname,username,password,profile_pic) VALUES($1,$2,$3,$4)', [
            req.body.name,
            req.body.username,
            
        ])
    }
    catch(err){

    }
}

module.exports = {
    createUser
}