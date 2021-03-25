require('dotenv').config()
const express = require("express");

const { getBlogs } = require('./controllers/blog')
const { createUsers} = require('./controllers/user')


const PORT = process.env.PORT || 3000;
//creates a new blog post 
//display all blog post 
app.get("/blog", getBlogs)
app.post('/user', createUsers)
//updates a blog post
//deletes a blog post 




app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});