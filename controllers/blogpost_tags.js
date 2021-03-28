const db = require("../db/db")

class TagBlog {
    constructor(){

    }
    getRelation = async (req,res) => {
        try{
            const list = await db.any('SELECT * FROM blogpost_tags')
            res.status(200).json(list)
        }catch(err){
            console.log(err)
            res.status(400).send('error occured, did not update')
        }
    }

    setRelation = async (req,res) => {
        try{  
            console.log(req.body)
            await db.none('INSERT INTO blogpost_tags (blogpost_id,tag_id) VALUES ($1,$2)', [req.body.post_id, req.body.tag_id])
            const relation = await db.one('SELECT * FROM blogpost_tags WHERE blogpost_id=$1', [req.body.post_id, req.body.tag_id])
            console.log(relation)
            res.status(200).json('Relation set', relation)
        }catch(err){
            console.log(err)
            res.status(400).send('error occured, did not update')
        }
    }
    
    deleteRelation = async (req,res) => {
        try{
            const relation = db.one('DELETE FROM blogpost_tags WHERE blogpost_id=${post_id} AND tag_id=${tag_id}', req.body)
            res.status(200).json('Relation dropped')
        }catch(err){
    
        }
    }
}

module.exports = TagBlog