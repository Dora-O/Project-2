const { Projects } = require('../models');

const projectdata = [
    {
        title: 'ReadMe Generator',
        media_link: 'https://youtu.be/LJDEDQDcHeM',
        description: 'How to install and use readme generator',
        users_id: '1',
    },
    {
        title: 'Team Profile Generator',
        media_link: 'https://youtu.be/GQsDzlJ7brE',
        description: 'How to install and use profile generator',
        users_id: '2',
    },
    {
        title: 'Team Profile Generator',
        media_link: 'https://youtu.be/GQsDzlJ7brE',
        description: 'How to install and use profile generator',
        users_id: '3',
    },
    {
        title: 'Team Profile Generator',
        media_link: 'https://youtu.be/GQsDzlJ7brE',
        description: 'How to install and use profile generator',
        users_id: '2',
    },
    
];

const seedProject = () => Projects.bulkCreate(projectdata);

module.exports = seedProject;
