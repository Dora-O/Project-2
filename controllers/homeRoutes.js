const router = require('express').Router();
const { Projects, Users, Comments } = require('../models');
const withAuth = require('../utils/auth');

//? HOMEPAGE DISPLAYS LOGGED IN USERS'S POSTS //

//render homepage
router.get('/', withAuth, async (req, res) => {
  try {
      // Get all posts and JOIN with user data
      const projectData = await Projects.findAll({
        include: [
          {
            model: Comments,
            attributes: ['id', 'comment_content', 'projects_id', 'users_id',],
          },
          {
            model: Users,
            attributes: ['username', 'name']
          },
        ],
      });
  
      // Serialize data so the template can read it
      const projects = projectData.map((post) => post.get({ plain: true }));
  
      // Pass serialized data and session flag into template I will create
      res.render('homepage', { 
        projects, 
        loggedIn: req.session.loggedIn 
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  
});


// Render Log in page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Render Sign Up page
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});


//render posts by id
router.get('/projects/:id', withAuth, async (req, res) => {
  try {
      const projectsData = await Projects.findByPk(req.params.id, {
        include: [
          {
            model: Comments,
            attributes: ['id', 'comment_content', 'projects_id', 'users_id',],
          },
          {
            model: Users,
            attributes: ['username', 'name',]
          },
        ],
      });

        // serialize the data
      const projects = projectsData.get({ plain: true });
  
        // pass data to template
      res.render('premierePage', {
        ...projects,
        loggedIn: req.session.loggedIn
      });
    } catch (err) {
      res.status(500).json(err);
    }
});




module.exports = router;