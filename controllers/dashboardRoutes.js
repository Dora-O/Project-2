const router = require('express').Router();
const { Projects, Users, Comments } = require('../models');

// GET all Projects for Dashboard
router.get('/', async (req, res) => {
    try {
        const dbProjectsData = await Projects.findAll({
            include: [
                {
                    model: Projects,
                    attributes: [
                        'id',
                        'title',
                        'media_link',
                        'exhibition_date',
                        'post_content',
                        'post_date',
                    ],
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

        const projects = dbProjectsData.map((projects) =>
            projects.get({ plain: true })
        );
        // Send over the 'loggedIn' session variable to the 'Dashboard' template
        res.render('dashboard', {
            projects,
            loggedIn: req.session.loggedIn,
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
                    attributes: [
                        'id',
                        'title',
                        'media_link',
                        'exhibition_date',
                        'post_content',
                        'post_date',

                    ],
                },
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
    try {
        // Get all posts and JOIN with user data
        const projectsData = await Projects.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                    model: Comments,
                    attributes: ['id', 'comment_content', 'posts_id', 'users_id',],
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
        res.render('dashboard', {
            projects,
            logged_in: req.session.logged_in
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