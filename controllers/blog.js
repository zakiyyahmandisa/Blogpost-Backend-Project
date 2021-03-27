const db = require('../db/db')

class BlogControl {
    constructor(){
        // this.data = ''
    }

    getBlog = async (req, res) => {
        try{
            const data = await db.any('SELECT * FROM blogposts')
            res.status(200).json(data)
        }catch(err){
            console.log(err)
            res.status(400).send('error occured')
        }
    };
    
        createBlog = async (req,res,next) => {
        try{
            const date = new Date()
            await db.none('INSERT INTO blogposts (post,date,user_id) VALUES ($1,$2,$3)', [req.body.post, date, req.body.user_id])
            const data = await db.one('SELECT * FROM blogposts WHERE user_id=$1 AND date=$2', [req.body.user_id, date])
            // res.status(200).json({message:'Post created', data:data})
            next()
        }catch(err){
            console.log(err)
            res.status(400).send('error occured, did not update')
        }
    }
    
    
    //uses blog post id in params
        updateBlog = async (req,res) =>{
        try {
            const id = req.params.id
            await db.none('UPDATE blogposts SET post = $1  WHERE user_id = $2 AND id = $3', [req.body.post,req.body.user_id, id])
            const userBlog = await db.one('SELECT * FROM blogposts WHERE user_id = $1 AND id = $2', [req.body.user_id, id])
            console.log(userBlog)
            
            res.status(200).json({message: 'success', data:userBlog})
        }catch(err){
            console.log(err)
            res.status(400).send('error occured, did not update')
        }
    };
    
        deleteBlog = async (req,res) =>{
        try{
            const id = req.params.id
            console.log(id)
            await db.none('DELETE FROM blogposts WHERE id=$1',id)
            res.status(200).send('Blog deleted')
        }catch(err){
    
        }
    }
}


module.exports = BlogControl