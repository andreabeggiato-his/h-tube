const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('<p>Hello World</p>');
});

app.get('/users/create', (req, res) => {
  res.render('pages/users/create');
});


app.listen(4000, () => console.log('Server started on 4000'));