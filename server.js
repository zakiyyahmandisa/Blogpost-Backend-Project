require('dotenv').config()
const express = require("express");
const { createTag, checkTag } = require('./controllers/tags')
const { getBlog, createBlog, updateBlog, deleteBlog } = require('./controllers/blog')
const { createUsers} = require('./controllers/user')
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000;

app.get("/blogs", getBlog)
app.post('/blogs',createBlog, checkTag)
//id is blog id not user id
app.put("/blogs/revise/:id", updateBlog)
app.delete("/blogs/:id", deleteBlog)

app.post('/tags',createTag)

// app.post('/user', createUsers)

//flow
    //create blog
    //Check tags on blogs, if the exist finish check make connection on relation table
    //if they dont exist make them and connect on relation table




app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});