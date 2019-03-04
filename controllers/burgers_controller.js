const express = require('express')
var burger = require("../models/burger")
const log = console.log
var router = express.Router()



// TODO set routes and export to server.js

router.get("/", (req, res) => {
    burger.getAll((data) => {
        res.render("index", { title: 'Eat da Burger', burgers: data });
    })
});
router.post("/post", (req, res) => {

    burger.addNew({ burger_name: req.body }, () => {

        res.json(res)
        location.reload()
    })

})
router.put("/post/:id", (req, res) => {
    let burgerId = req.params.id

    res.redirect("/")
})

module.exports = router