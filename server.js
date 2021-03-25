const express = require("express");
const PORT = process.env.PORT || 3000;
//creates a new blog post 
//display all blog post 
app.get("/blog", (req, res) => {
    res.render("/blog")
})
//updates a blog post
//deletes a blog post 




app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});