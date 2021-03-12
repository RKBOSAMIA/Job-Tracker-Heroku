const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const url = require('url');

let db_path = '../SQL_DB/jobOpportunites.db';
let db = new sqlite3.Database(db_path,(err)=>{
  if (err){
      return console.error(err.message);
  }
  console.log('Connected to the Job Opportunities Database');
});

router.post('/',(req,res)=>{
    let result = new Array();
    let records = []
    param = url.parse(req.url,true).query;
    const source = param.company_name;
    let query = `SELECT id,company_name,job_title,job_url FROM JobListings WHERE job_source = ? 
                AND (company_name IS NOT NULL OR company_name != "Unknown")
                AND job_title IS NOT NULL
                ORDER BY 1 DESC`;
  
    function getRecords(){
      return new Promise((resolve,reject)=>{
        db.all(query, [source], (err, rows) => {
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
      records = await getRecords();
      res.send(records);
    }
    asyncCall();
});

module.exports = router;