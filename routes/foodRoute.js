const express = require("express");
const router = express.Router();

const foods = require("../controllers/foodController");


router.post("/new", foods.create);

router.get("/", foods.findAll);

router.get("/:id", foods.findOne);

router.put("/:id", foods.update);

router.delete("/:id", foods.delete);




module.exports = router;