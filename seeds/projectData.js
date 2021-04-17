const { Projects } = require('../models');

const projectdata = [
    {
        title: '블랙핑크 - How You Like That',
        media_link: 'https://www.youtube.com/embed/ioNng23DkIM',
        description: 'BlackPink 블랙핑크 performing How You Like That',
        users_id: '4',
    },
    {
        title: 'TRAVIS SCOTT "FRANCHISE"',
        media_link: 'https://www.youtube.com/embed/_VRyoaNF9sk',
        description: ' Directed by Travis Scott ||  Shot by White Trash Tyler & Jordan Hemingway || US scenes produced by Randy Donaldson & Kevin Schroeder for Freenjoy',
        users_id: '2',
    },
    {
        title: 'Justin Park - Bay to the City',
        media_link: 'https://www.youtube.com/embed/45jP3y5ykSc',
        description: 'Official music video by 5A Label',
        users_id: '4',
    },
    {
        title: 'Yellowcard - Ocean Avenue',
        media_link: 'https://www.youtube.com/embed/X9fLbfzCqWw',
        description: 'Music video by Yellowcard performing Ocean Avenue.',
        users_id: '3',
        users_name: 'daddyRath'
    },
    {
        title: 'J. Balvin, Bad Bunny - CUIDAO POR AHÍ',
        media_link: 'https://www.youtube.com/embed/zvAUZQxb0ME',
        description: 'Official Music Video',
        users_id: '2',
    },
    
];

const seedProject = () => Projects.bulkCreate(projectdata);

module.exports = seedProject;
