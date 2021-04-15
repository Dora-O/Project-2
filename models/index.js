const Users = require('./users');
const Projects = require('./Projects');
const Comments = require('./Comments');
const Emailer = require('./Emailer');

Users.hasMany(Projects, {
    foreignKey: 'users_id',
    onDelete: 'CASCADE'
});

Projects.belongsTo(Users, {
    foreignKey: 'users_id'
});

Comments.belongsTo(Users, {
    foreignKey: 'users_id',
});

Comments.belongsTo(Projects, {
    foreignKey: 'projects_id'
});

Users.hasMany (Comments, {
    foreignKey: 'users_id',
    onDelete: 'CASCADE'
});

Projects.hasMany(Comments, {
    foreignKey: 'projects_id',
    onDelete: 'CASCADE'
});


module.exports = {Users, Projects, Comments, Emailer};