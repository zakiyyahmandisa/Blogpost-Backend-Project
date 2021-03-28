require('dotenv').config()
const express = require("express");
const cors = require('cors')
const TagControl = require('./controllers/tags')
const BlogControl = require('./controllers/blog')
const { createUser, getUser} = require('./controllers/user')
const { createComment, comments, updateComment} = require('./controllers/comments')

const app = express()


////Cors
const whitelist = ["http://localhost:3001/"]
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(
                new Error("Not allowed by CORS; origin domain needs to be added to whitelist.")
            );
        }
    },
};

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000;

const blog = new BlogControl()
const tag = new TagControl()


app.get("/blogs", blog.getAllBlog)
app.get("/blogs/:id/:offset", blog.getUserBlog)
app.post('/blogs',blog.createBlog)
//id is blog id not user id
app.put("/blogs/revise/:id", blog.updateBlog)
app.delete("/blogs/:id", blog.deleteBlog)

app.post('/tags',tag.createTag)

//creates a new blog post 
//display all blog post 
app.get("/users", getUser)
app.post("/createuser", createUser)
app.post("/create/comment/:post_id", createComment)
app.get("/comments", comments)
//takes comment id
app.put("/update/comment/:id", updateComment)


//updates a blog post
//deletes a blog post 



app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});