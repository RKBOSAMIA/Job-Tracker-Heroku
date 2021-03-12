const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

let db_path = '../SQL_DB/jobOpportunites.db';
let db = new sqlite3.Database(db_path,(err)=>{
  if (err){
      return console.error(err.message);
  }
  console.log('Connected to the Job Opportunities Database');
});

router.get('/home',(req,res,next)=>{
    let result = new Array();
    let records = []
    let query = 'SELECT * FROM JobBoards';
    console.log('heelo');
    function getSources(){
      return new Promise((resolve,reject)=>{
        db.all(query, (err, rows) => {
          if (err) {
            console.error(err.message);
          }
          rows.forEach((row)=>{
            result.push(row);
          });
          resolve(result);
        });
      })
    }
    
    async function asyncCall(){
      records = await getSources();
      res.send(records);
    }
    asyncCall();
    //db.close();
  });

  module.exports = router;