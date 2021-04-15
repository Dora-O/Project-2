const { Users } = require('../models');

const userData = [
{
    name: 'Kyle',
    username: 'KyleTheDestroyer',
    email: 'kyle@mail.com',
    password: '12345678'
},
{
    name: 'Manuel',
    username: 'MannyMoon',
    email: 'manuel@mail.com',
    password: '12345678'
},
{
    name: 'Manorath',
    username: 'daddyRath',
    email: 'manorath@mail.com',
    password: '12345678'
},
{
    name: 'Dora',
    username: 'DoraStark',
    email: 'dora@mail.com',
    password: '12345678'
},
];

const seedUser = () => Users.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;
