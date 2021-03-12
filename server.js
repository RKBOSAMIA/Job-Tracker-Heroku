const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path'); 
const morgan = require('morgan');
const PORT = process.env.PORT || 8000;

var homeRouter = require('./routes/home')
var resultRouter = require('./routes/results');

app.use(cors({
  origin : "*",
  credentials:true
}));
app.use(morgan('common'));
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.use('/',homeRouter);
app.use('/results',resultRouter);
app.listen(PORT,()=>{
    console.log(`Running on http://localhost:${PORT}`)
});
