require('dotenv').config()
const express = require("express");
// const pgPromise = require("pgpromise")()


const { getBlogs } = require('./controllers/blog')

const PORT = process.env.PORT || 3000;
//creates a new blog post 
//display all blog post 
app.get("/blog", getBlogs)
//updates a blog post
//deletes a blog post 




app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});