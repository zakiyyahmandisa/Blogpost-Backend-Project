require('dotenv').config()
const express = require("express");
const { getBlogs } = require('./controllers/blog')
const { createUser, getUser} = require('./controllers/user')
const { createComment, comments, updateComment} = require('./controllers/comments')

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000;
//creates a new blog post 
//display all blog post 
app.get("/blogs", getBlogs)
app.get("/users", getUser)
app.post("/createuser", createUser)
app.post("/createcomment", createComment)
app.get("/comments", comments)
app.post("/updatecomment", updateComment)


//updates a blog post
//deletes a blog post 
,



app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});