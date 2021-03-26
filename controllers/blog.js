const db = require('../db/db')


const getBlogs = async (req, res) => {
    //get all blogpost in db
    try{
        const data = await db.any('SELECT * from blogposts')
        console.log(data)
    }catch(err){
        console.log(err)
        res.status(400).send('error occured')
    }
}






module.exports = {
    getBlogs
}