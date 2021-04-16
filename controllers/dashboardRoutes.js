const router = require('express').Router();
const sequelize = require('../config/connection');
const { Projects, Users, Comments } = require('../models');
const withAuth = require('../utils/auth');

// GET all Projects for Dashboard
router.get('/', async (req, res) => {
 
    try {
        const dbProjectsData = await Projects.findAll({
           
             where: {
                // use the ID from the session
                users_id: req.session.users_id
              }, 
            include: [
                {
                    model: Comments,
                    attributes: ['id', 'comment_content', 'projects_id'],
                },

                {
                    model: Users,
                    attributes: [
                        'id',
                        'name',
                        'username',
                    ],
                },
            ],
        });

        const loggedInUser = await Users.findByPk(
            req.session.users_id
        )

        console.log(loggedInUser);

        const projects = dbProjectsData.map((project) =>  project.get({ plain: true })
        );




       /*  const projects = dbProjectsData.map((project) =>
            project.get({ plain: true })
        ); */
        // Send over the 'loggedIn' session variable to the 'Dashboard' template
        console.log(req.session);
        res.render('dashboard', {
            projects,
            loggedIn: req.session.loggedIn,
            users : {
                username: loggedInUser.username
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one project
router.get('/projects/:id', async (req, res) => {
    try {
        const dbProjectsData = await Projects.findByPk(req.params.id, {
            include: [
                {
                    model: Projects,
                    attributes: ['id','title','media_link','description','projects_date','users_id'
                    ], include: {
                            model: Users,
                            attributes: ['username', 'name']
                          }
                },
                {
                    model: Users,
                    attributes: ['username', 'name']
                  }
            ],
        });

        const projects = dbProjectsData.get({ plain: true });
        // Send over the 'loggedIn' session variable to the 'gallery' template
        res.render('projects', { projects, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// CREATE Post on Dashboard
router.get('/create', withAuth, async (req, res) => {
    console.log(req.session.user_id)
    try {
        // Get all posts and JOIN with user data
        const projectsData = await Projects.findAll({
            where: {
                users_id: req.session.users_id
            },
            include: [
                {
                    model: Comments,
                    attributes: ['id', 'comment_content', 'projects_id', 'date'],
                },
                {
                    model: Users,
                    attributes: ['username', 'name',]
                },
            ],
        });
        // Serialize data so the template can read it
        const projects = projectsData.map((post) => post.get({ plain: true }));
        // Pass serialized data and session flag into template I will create
        res.render('createProjects', {
            projects,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login route
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
});

module.exports = router;