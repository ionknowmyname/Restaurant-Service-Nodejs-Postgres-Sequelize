const express = require("express");
const router = express.Router();

const foods = require("../controllers/foodController");


router.post("/new", foods.create);

router.get("/all", foods.findAll);

router.get("/category/:name", foods.findAllByCategory);

router.get("/name/:category", foods.findAllBySimilarName);

router.get("/id/:id", foods.findOne);

router.put("/update/:id", foods.update);

router.delete("/delete/:id", foods.delete);




module.exports = router;