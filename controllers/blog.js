const db = require('../db/db')

class BlogControl {
    constructor(){
        // this.data = ''
    }

    getAllBlog = async (req, res) => {
        try{
            const data = await db.any('SELECT * FROM blogposts')
            res.status(200).json(data)
        }catch(err){
            console.log(err)
            res.status(400).send('error occured')
        }
    };
    
    getUserBlog = async (req,res) => {
        try{
            
            const data = await db.any('SELECT * FROM blogposts WHERE user_id=$1 LIMIT 5 OFFSET $2', [req.params.id, req.params.offset])
            const fData = this.formatPost(data)
            console.log(fData)
            res.status(200).json(fData)
        }catch(err){
            console.log(err)
            res.status(400).send('error occured, user does not exist')
        }
    }

    createBlog = async (req,res,next) => {
    try{
        const date = new Date()
        await db.none('INSERT INTO blogposts (post,date,user_id, media) VALUES ($1,$2,$3,$4)', [req.body.post, date, req.body.user_id, req.body.media])
        const data = await db.one('SELECT * FROM blogposts WHERE user_id=$1 AND date=$2', [req.body.user_id, date])
        res.status(200).json({message:'Post created', data:data})
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
        await db.none('UPDATE blogposts SET post = $1, media = $4 WHERE user_id = $2 AND id = $3', [req.body.post,req.body.user_id, id,req.body.media])
        const userBlog = await db.one('SELECT * FROM blogposts WHERE user_id = $1 AND id = $2', [req.body.user_id, id])
        
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
        res.status(400).send('error occured, did not delete')
    }
}
    formatPost = (data) =>{
        data.forEach((blog) =>{
            if(blog.media){
                let post = blog.post.split(" ");
                let media = blog.media.split(",")
            }
        })
        return data
        //cant access individual blogs w/o foreach? so ill do it on front 
    }
}


module.exports = BlogControl