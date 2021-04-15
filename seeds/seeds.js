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

