const express = require('express');

const route = express.Router();

const studentList = [
    {'name':'imran','college':'fcrit'},
    {'name':'aryan','college':'tsec'},
    {'name':'arshi','college':'kandivli'},
    {'name':'arhaan','college':'matunga'},
    {'name':'srushti','college':'fcrit'},
]

route.get('/',(req,res)=>{
    res.send(studentList);
})

route.get('/:id',(req,res)=>{
    const id = req.params.id;
    if(isNaN(id)){
        res.status(400).send('Invalid id');
    }
    else if(id<0 || id>=studentList.length){
        return res.status(404).send('No student found with id '+id);
    }
    else{
        res.send(studentList[id])
    }
})

module.exports = route;

// routes are like miniapps which can be mounted on different paths on the main app
// using routes is like a miniserver, but it can't listen on its own, we can define routes and then mount them on the main app