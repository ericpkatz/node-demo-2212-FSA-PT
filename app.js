const fs = require('fs');
const scoreFunctions = require('./scoreFunctions');

console.log('hello world');

fs.readFile('scores.txt', (err, data)=> {
  if(err){
    console.log(err);
  }
  else {
    console.log(scoreFunctions.processScores(data.toString()));
  }
});
