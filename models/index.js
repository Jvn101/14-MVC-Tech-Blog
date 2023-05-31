const Users = require('./Users');
const BlogPost = require('./BlogPost');
const Comments = require('./Comments');

Users.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BlogPost.belongsTo(Users, {
  foreignKey: 'user_id'
});

//is foreign key correct???
BlogPost.hasMany(Comments, {
  foreignKey: 'comments_id'
})

Comments.belongsTo(BlogPost, {
  foreignKey: 'BlogPost_id'
})

module.exports = { Users, BlogPost, Comments };
