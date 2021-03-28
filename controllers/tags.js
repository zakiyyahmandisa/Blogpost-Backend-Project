const db = require('../db/db')


class TagControl {
    constructor(){

    }
    checkTag = async(req,res) => {
        const tag = await db.one('SELECT * FROM tags WHERE tagname=$1', req.body.tagname)
        if(user){
            //tagblog relation
        }
        else{
            // createTag()
            
        }
    }
    
    
    createTag = async(req,res) => {
        try{
            await db.none('INSERT INTO tags (tagname) VALUES ($1)', req.body.tagname)
            res.status(200).send('Tag created')
        }catch(err){
            console.log(err)
            res.status(400).send('error occured, tag not created', err)
        }
    }
}
//check if the tag exists
//bring in tagblog function
//I think this is a tagblogpost thing


module.exports = TagControl