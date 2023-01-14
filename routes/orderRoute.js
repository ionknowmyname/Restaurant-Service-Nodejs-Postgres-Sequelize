const express = require("express");
const router = express.Router();

const orders = require("../controllers/orderController");



router.post("/new", orders.create);

router.get("/ownerName/:name", orders.findAllByOwnerName);

router.get("/id/:id", orders.findOne);

router.put("/update/:id", orders.update);

router.delete("/delete/:id", orders.delete);




module.exports = router;