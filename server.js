require('dotenv').config()
const express = require("express");
const { getBlog, createBlog, updateBlog, deleteBlog } = require('./controllers/blog')
const { createUsers} = require('./controllers/user')
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000;
//creates a new blog post 
//display all blog post 
app.get("/blogs", getBlog)
app.post('/blogs', createBlog)
app.put("/blogs/revise/:id", updateBlog)
app.delete("/blogs/:id", deleteBlog)
// app.post('/user', createUsers)
//updates a blog post
//deletes a blog post 




app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});