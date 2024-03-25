const express =  require('express');

const route = express.Router();

route.get('/', (req, res) => res.render("index"))
route.get('/Room', (req, res) => res.render("Room"))
route.get('/Create-pass', (req, res) => res.render("Create-pass"))

module.exports = route 