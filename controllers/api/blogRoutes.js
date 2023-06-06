const router = require('express').Router();
const { BlogPost } = require('../../models');


router.post('/', async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create({
      title: req.body.title,
      description: req.body.description,
      user_id: 1,
    });

    //issue with this line
    res.status(200).json(newBlogPost);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const blogData = await BlogPost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
