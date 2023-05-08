const express = require('express');

const app = express ();

app.get('/',(req,res) =>{
    res.send('main Domain')
})

app.get('/example1',(req,res) =>{
    res.send('main Domain')
})

app.listen(3000,()=>{
    console.log("Server started on port 3000");
})