require('dotenv').config()
const express = require("express");
const TagControl = require('./controllers/tags')
const BlogControl = require('./controllers/blog')
const blog = new BlogControl()
const tag = new TagControl()

const { createUsers} = require('./controllers/user')
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000;

app.get("/blogs", blog.getBlog)
app.post('/blogs',blog.createBlog)
//id is blog id not user id
app.put("/blogs/revise/:id", blog.updateBlog)
app.delete("/blogs/:id", blog.deleteBlog)

app.post('/tags',tag.createTag)

// app.post('/user', createUsers)

//flow
    //create blog
    //Check tags on blogs, if the exist finish check make connection on relation table
    //if they dont exist make them and connect on relation table




app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});