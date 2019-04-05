const express = require('express');
var burger = require('../models/burger');
const log = console.log;
var router = express.Router();

// TODO set routes and export to server.js

router.get('/', (req, res) => {
  burger.getAll((data) => {
    // res.json(data)
    res.render('index', { title: 'Eat da Burger', burgers: data });
  });
});
router.post('/post/:burger_name', (req, res) => {
    const burgerName = req.params.burger_name
    burger.addNew({ burger_name: burgerName, devoured: 0 }, () => {
    res.redirect('/');
    // location.reload();
  });
});
router.put('/post/:id', (req, res) => {
  let burgerId = req.params.id;
  burger.devour("devoured", `id=${burgerId}`, () => {
    res.json({ message: 'Success', data: burgerId });
    // location.reload();
  });
  // res.redirect("/");
});
router.delete('/delete/:id', (req,res)=> {
  let burgerId = req.params.id
  burger.delete(burgerId,(data)=>{
    res.json({data})
  })
})
module.exports = router;
