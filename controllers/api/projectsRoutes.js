const router = require('express').Router();
const {Projects} = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new project
router.post('/', withAuth, async  (req, res) => {
    try  {
        //collects the project data
      const projectsData = await Projects.create({
        title: req.body.title,
        description: req.body.description,
        user_id: req.session.user_id
      });
  
        res.status(200).json(projectData);

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


// UPDATE new projects
  router.put('/:id', withAuth, async (req, res) => {
    // update a project by its `id` value
    try {
      const projectData = await Project.update({
        title: req.body.title,
        description: req.body.description,
      }, {
        where: {
          id: req.params.id,
        },
      });
      if (!projectData[0]) {
        res.status(404).json({ message: 'No information was sent, try again' });
        return;
      }
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// DELETE PROJECT 
  router.delete('/:id', withAuth, async (req, res) => {
    // delete a PROJECT by its `id` value
    try {
      const projectData = await Projects.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!projectData) {
        res.status(404).json({ message: 'No project found with that id!' });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;