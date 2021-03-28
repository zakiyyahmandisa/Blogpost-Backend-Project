const db = require('../db/db')

class CommentControl {
    constructor(){

    }
//create a comment 
createComment = async (req,res) => {
    try{ 
        await db.none ("INSERT INTO comments (content,post_id,user_id) VALUES ($1,$2,$3)", [req.body.content, req.params.post_id, req.body.user_id])
        const userComment = await db.one ("SELECT * FROM comments WHERE post_id=$1 AND content=$2", [req.params.post_id, req.body.content])
        res.status(200).json(userComment) 
    }
    catch(err){
        res.status(500).send(err)

    }
}
//retrieve all comments 
comments = async(req,res) => {
    try{ 
        const allComments = await db.any(`SELECT * FROM comments`)
        res.status(200).json(allComments)
    }
    catch(err){
        res.status(500).send(err)

    }
}
//update a comment
updateComment = async (req,res) =>{
    try{ 
        const id2 = req.params.id
        console.log(req.body)

        await db.none ("UPDATE comments SET content = $1 WHERE user_id = $3 AND id = $4" , [req.body.content, req.body.post_id, req.body.user_id, id2])
        const update = await db.one ("SELECT * FROM comments WHERE id = $1 ", id2)
        res.status(200).json(update) 

    }
    catch(err){
        res.status(500).send(err)

    }
}
}



module.exports = CommentControl