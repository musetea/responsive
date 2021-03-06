const express = require('express');
const path  = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => { res.sendFile('./public/index.html') }); 

app.listen(4001, () => { console.log('Response Web Server Port 4001 is Running...')})