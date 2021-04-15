const { Comments } = require('../models');

const commentdata = [
    {
        users_id: '1',
        projects_id: '1',
        comment_content: 'Wow! Thanks for helping me understand this!',
    },
    {
        users_id: '2',
        projects_id: '2',
        comment_content: 'This is pretty cool!',
    },
    {
        users_id: '3',
        projects_id: '2',
        comment_content: 'Coolest Video Ever',
    },
    {
        users_id: '3',
        projects_id: '1',
        comment_content: 'What dependencies do I need to install?',
    },
    {
        users_id: '4',
        projects_id: '2',
        comment_content: 'Great walkthrough video!',
    },
];

const seedComment = () => Comments.bulkCreate(commentdata);

module.exports = seedComment;
