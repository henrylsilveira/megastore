const express = require('express');
const ProductController = require('./app/controllers/ProductController');
const routes = express.Router();

routes.get('/', function (req, res) {
    return res.render("layout.njk")
});
routes.get("/products/:id/edit", ProductController.edit)
routes.get("/products/create", ProductController.create)
routes.post("/products", ProductController.post)
routes.put("/products", ProductController.put)
routes.delete("/products", ProductController.delete)


routes.get("/ads/create", function(req,res){
    return res.redirect("/products/create")
})

module.exports = routes;
