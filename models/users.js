const Air5 = require('air5');

const database = new Air5('users', {
  provider: 'bson',
  path: './db/',
});

const create = (email, password) => {
  database.set(email, {
    email: email,
    password: password
  });
};