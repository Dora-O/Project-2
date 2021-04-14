const { Projects } = require('../models');

const projectdata = [
    {
        title: 'ReadMe Generator',
        media_link: 'https://youtu.be/LJDEDQDcHeM',
        description: 'How to install and use readme generator'
    },
    {
        title: 'Team Profile Generator',
        media_link: 'https://youtu.be/GQsDzlJ7brE',
        description: 'How to install and use profile generator'
    },
    {
        title: 'Team Profile Generator',
        media_link: 'https://youtu.be/GQsDzlJ7brE',
        description: 'How to install and use profile generator'
    },
    {
        title: 'Team Profile Generator',
        media_link: 'https://youtu.be/GQsDzlJ7brE',
        description: 'How to install and use profile generator'
    },
    {
        title: 'Team Profile Generator',
        media_link: 'https://youtu.be/GQsDzlJ7brE',
        description: 'How to install and use profile generator'
    },
];

const seedProject = () => Projects.bulkCreate(projectdata);

module.exports = seedProject;
