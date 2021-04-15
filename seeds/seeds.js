const sequelize = require('../config/connection');
const seedUser = require('./userData.js');
const seedProject = require('./projectData');
const seedComment = require('./commentData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedUser();
  
    await seedProject();

    await seedComment();
  
    process.exit(0);
  };
  
  seedAll();


// const sequelize = require('../config/connection');
// const { User, Project } = require('../models');

// const seedUser = require('./userData.js');
// const seedProject = require('./projectData');
// const seedComment = require('./commentData');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const project of projectData) {
//     await Project.create({
//       ...project,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   process.exit(0);
// };

// seedDatabase();
