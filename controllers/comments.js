const db = require('../db/db')


//create a comment 
const createComment = async (req,res) => {
    try{ 
        const id = req.param.id
    const userId = await db.none ("INSERT INTO comments SET content = $1 WHERE post_id = $2 AND user_id = $3 AND id = $4", [req.body.content, req.body.post_id, req.body.user_id, id])
    const userComment = await db.one ("SELECT * FROM comments WHERE post_id = $1 AND user_id = $2 AND id = $3", [req.body.post_id, req.body.user_id, id])
    res.status(200).json(userComment) 
       
    }
    catch(err){
        res.status(500).send(err)

    }
}
//retrieve all comments 
const comments = async(req,res) => {
    try{ 
        const allComments = await db.any(`SELECT * FROM comments`)
        res.status(200).json(allComments)
    }
    catch(err){
        res.status(500).send(err)

    }
}
//update a comment
const updateComment = async (req,res) =>{
    try{ 
        const id2 = req.params.id

        await db.none ("UPDATE comments SET content = $1 WHERE post_id = $2 AND user_id = $3 AND id = $4" , [req.body.content, req.body.post_id, req.body.user_id, id2])
        const update = await db.one ("SELECT * FROM comments WHERE post_id = $1 AND user_id = $2 AND id = $3 ", [req.body.post_id, req.body.user_id, id2])
        res.status(200).json(update) 

    }
    catch(err){
        res.status(500).send(err)

    }
}




module.exports = {
    createComment,
    comments,
    updateComment
}