const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');



router.get('/', async (req, res) => {
    try {
        // Get all posts and JOIN with user data
        const dbCommentData = await Comments.findAll({
          attributes: [
            'id',
            ' users_id',
            'projects_id',
            'comment_content',
            'date',
  
        ],
        });
    
        // Serialize data so the template can read it
        const comment = dbCommentData.map((post) => post.get({ plain: true }));
    
/* 
      // Pass serialized data and session flag into template I will create
      res.render('comments', { 
        projects, 
        logged_in: req.session.logged_in 
      });
 */
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    
  });
  


// CREATE comment
router.post('/', withAuth, async (req, res) => {
    try {
        console.log(req.body)
        const dbCommentData = await Comments.create({
            projects_id: req.body.projects_id,
            comment_content: req.body.comment_content,
        });

        // Set up sessions with a 'loggedIn' variable set to `true`
        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbCommentData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Delete Comments 
router.delete('/:id', async (req, res) => {
    try {
        const dbCommentData = await Comments.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!dbCommentData) {
            res
                .status(400)
                .json({ message: 'No comments was found with ID!' });
            return;
        }

        res.status(200).json(dbCommentData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
