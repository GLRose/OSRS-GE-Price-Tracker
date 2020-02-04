// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) =>  response.sendFile(`${__dirname}/index.html`));

app.post('/index', (request, response) => {
  const postBody = request.body;
  //data refers to the json data
  console.log(postBody.data);
});

//you want to use a database

app.listen(3000, () => console.info('Application running on port 3000'));

