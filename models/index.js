const Users = require('./Users');
const BlogPost = require('./BlogPost');
const Comments = require('./Comments');

Users.hasMany(BlogPost, {
  foreignKey: 'user_id'
});

BlogPost.belongsTo(Users, {
  foreignKey: 'user_id'
});

Users.hasMany(Comments, {
  foreignKey: 'user_id'
})

Comments.belongsTo(Users, {
  foreignKey: 'user_id'
})

//is foreign key correct???
BlogPost.hasMany(Comments, {
  foreignKey: 'blog_id'
})

Comments.belongsTo(BlogPost, {
  foreignKey: 'blog_id'
})

module.exports = { Users, BlogPost, Comments };
