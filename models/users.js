/*
  email: string
  password: string
*/

const Air5 = require('air5');

const database = new Air5('users', {
  provider: 'bson',
  path: './db/',
});

const create = async (email, password) => {
 await database.set(email, {
    email: email,
    password: password
  });
};
