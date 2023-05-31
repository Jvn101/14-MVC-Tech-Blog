const sequelize = require('../config/connection');
const { Users, BlogPost, Comments } = require('../models');

const usersData = require('./usersData.json');
const blogPostData = require('./BlogPostData.json');
const commentsData = require('./CommentsData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await Users.bulkCreate(usersData, {
    individualHooks: true,
    returning: true,
  });

  for (const BlogPost of blogPostData) {
    await BlogPost.create({
      ...BlogPost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const Comments = await Comments.bulkCreate(CommentsData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
