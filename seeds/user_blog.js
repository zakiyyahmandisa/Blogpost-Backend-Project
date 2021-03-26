const userData = require('../json/user')
const blogData = require('../json/blog')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('blogposts').del()
    .then(() =>knex('users').del())
    .then(() => {
      //
      return knex('users').insert(userData);
    })
    .then(() =>{
      let blogPromises = []
      blogData.forEach((blog) => {
        let user = blog.user
        blogPromises.push(createBlog(knex,blog,user))
      })

      return Promise.all(blogPromises)
    })
};

const createBlog = (knex,blog,user) =>{
      return knex('users').where('fname', user).first()
      .then((blogRecord) => {
        return knex('blogposts').insert({
          post: blog.posts,
          date: blog.date,
          user_id: blogRecord.id
        })
      })
}
