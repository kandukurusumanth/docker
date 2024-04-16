const express = require('express');
const app = express();
app.get('/home', (req,res)=>{
    res.send('ok done');
})
app.listen(3000, ()=>{
    console.log('listening to * 3000');
})