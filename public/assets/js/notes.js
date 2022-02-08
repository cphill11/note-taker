//attempting to establish functionality to accomplish challgenge goals

const fs = require('fs');
const express =require('express');
// instantiate server
const app = express();

const { index } = require('./develop/public/index');
const { notes } = require ('./develop/public/notes');


app.get('/api/index', (req, res) => {
    res.send('INDEX');
  });
  
  app.get('/api/notes' , (req, res) => {
    res.send('NOTES');
  });
  
// chain listen method
app.listen(3001, () => {
    console.log(`API server now on port 3001!`)
  });