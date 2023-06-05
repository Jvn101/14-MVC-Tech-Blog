const router = require('express').Router();
const { Comments } = require('../../models');


router.get('/', (req,res) => {
  Comment.findAll({})
  .then(commentData => res.json(commentData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err)
  });
});

router.get('/:id', (req, res) => {
  Comment.findAll({
          where: {
              id: req.params.id
          }
      })
      .then(commentData => res.json(commentData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      })
});

router.post('/', async (req, res) => {
  try {
    const newComment = await Comments.create({
      //add title and description instead of ... res.body
      ...req.body,
      user_id: req.session.user_id,
      blog_id: req.params.id,
    });

    res.json(newComment).redirect(`/blog/:${req.params.id}`);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const commentData = await Comments.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comments found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
