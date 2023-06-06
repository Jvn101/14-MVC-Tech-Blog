const router = require('express').Router();
const { Comments } = require('../../models');


router.get('/', (req,res) => {
  Comments.findAll({})
  .then(CommentsData => res.json(CommentsData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err)
  });
});

router.get('/:id', (req, res) => {
  Comments.findAll({
          where: {
              id: req.params.id
          }
      })
      .then(CommentsData => res.json(CommentsData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      })
});

router.post('/', async (req, res) => {
  try {
    const newComments = await Comments.create({
      comment_description: req.body.comment_description,
      user_id: req.session.user_id,
      blog_id: req.params.id
    });
    res.json(newComments);
    console.log(newComments)
  
  // try {
  //   console.log('req.body');
  //   console.log(req.body);
  //   const newComment = await Comments.create({
  //     comment_description: req.body.comment_description,
  //     user_id: req.session.user_id,
  //     blog_id: req.params.id,
  //   });

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const CommentsData = await Comments.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!CommentsData) {
      res.status(404).json({ message: 'No comments found with this id!' });
      return;
    }

    res.status(200).json(CommentsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
