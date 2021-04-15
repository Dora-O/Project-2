const router = require('express').Router();
const { Projects, Users } = require('../../models');
const withAuth = require('../../utils/auth');

//  CREATE Post on Dashboard
// router.get('/create', withAuth, async (req, res) => {
//     try {
//         // Get all posts and JOIN with user data
//         const projectsData = await Projects.findAll({
//             where: {
//                 user_id: req.session.user_id
//             },
//             include: [
//                 {
//                     model: Comments,
//                     attributes: ['id', 'comment_content', 'posts_id', 'users_id',],
//                 },
//                 {
//                     model: Users,
//                     attributes: ['username', 'name',]
//                 },
//             ],
//         });
//         // Serialize data so the template can read it
//         const projects = projectsData.map((post) => post.get({ plain: true }));
//         // Pass serialized data and session flag into template I will create
//         res.render('createProject', {
//             projects,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// CREATE new project
router.post('/', withAuth, async (req, res) => {
  try {
    //collects the project data
    const projectsData = await Projects.create({
      title: req.body.title,
      description: req.body.description,
      user_id: req.session.user_id
    });

    res.status(200).json(projectsData);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// UPDATE new projects
router.put('/:id', withAuth, async (req, res) => {
  // update a project by its `id` value
  try {
    const projectsData = await Project.update({
      title: req.body.title,
      description: req.body.description,
    }, {
      where: {
        id: req.params.id,
      },
    });
    if (!projectsData[0]) {
      res.status(404).json({ message: 'No information was sent, try again' });
      return;
    }
    res.status(200).json(projectsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE PROJECT 
router.delete('/:id', withAuth, async (req, res) => {
  // delete a PROJECT by its `id` value
  try {
    const projectsData = await Projects.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!projectsData) {
      res.status(404).json({ message: 'No project found with that id!' });
      return;
    }

    res.status(200).json(projectsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;