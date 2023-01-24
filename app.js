const fs = require('fs');
const scoreFunctions = require('./scoreFunctions');

fs.readFile('scores.txt', (err, data)=> {
  if(err){
    console.log(err);
  }
  else {
    console.log(scoreFunctions.processScores(data.toString()));
  }
});
