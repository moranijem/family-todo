const express = require('express');
const app = express();

app.use(express.static('public'));

const port = process.env.PORT || 4000;
app.listen(port, ()=>{console.log('server Listen on port',port)}); 