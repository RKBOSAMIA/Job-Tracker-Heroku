const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path'); 
const morgan = require('morgan');
const PORT = 8000;

var homeRouter = require('./routes/home')
var resultRouter = require('./routes/results');

app.use(cors({
  origin : "http://localhost:3000",
  credentials:true
}));
app.use(morgan('common'));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/',homeRouter);
app.use('/results',resultRouter);
app.listen(PORT,()=>{
    console.log(`Running on http://localhost:${PORT}`)
});