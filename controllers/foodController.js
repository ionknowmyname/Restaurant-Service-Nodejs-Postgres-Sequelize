const db = require("../models");
const Food = db.food;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  
    if (!req.body.name || !req.body.category || !req.body.price) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });

        return;
    }

    let condition = { 
        name: {
            [Op.eq]: `${req.body.name}`
        } 
    }
    // SELECT * FROM Food WHERE name = req.body.name;

    Food.findAll({ where: condition }) 
        .then(data => {
            if(data.length > 0) {
                console.log("data --> " + data);
                res.status(403).send({
                    msg: "Food with name already exists"
                })
            } else {  // doesn't exist, now create food
                
                const food = {
                    name: req.body.name,
                    category: req.body.category,
                    price: req.body.price,
                    created: Date.now()
                };
                
                Food.create(food)
                    .then(data => {
                        res.status(200).send({
                            msg: "Food Created Successfully",
                            data: data 
                        });
                    })
                    .catch(err => {
                        res.status(500).send({
                            msg:
                            err.message || "Some error occurred while creating the Food."
                        });
                    });
            }
        })
        .catch(err => {
            console.log("Error while creating food --> " + err.message);

            res.status(500).send({
                msg: "Error creating food, try again"
            });
        });
    
    
};

exports.findAll = (req, res) => {
  
    Food.findAll()  
        .then(data => {
            if (data) {
                res.status(200).send({
                    msg: "Successful",
                    data: data
                });
            } else {
                res.status(404).send({
                    msg: `Cannot find any Food.`
                });
            }
        })
        .catch(err => {
            console.log("Error while finding all foods --> " + err.message);

            res.status(500).send({
                msg: "Error retrieving all Foods"
            });
        });
};

exports.findAllByCategory = (req, res) => {
  
    const category = req.params.category;

    let condition = { 
        category: {
            [Op.eq]: `${category}`
        } 
    }
    // SELECT * FROM Food WHERE category = category;

    Food.findAll({ where: condition })  
        .then(data => {
            if (data) {
                res.status(200).send({
                    msg: "Successful",
                    data: data
                });
            } else {
                res.status(404).send({
                    msg: `Cannot find any food with category=${category}.`
                });
            }
        })
        .catch(err => {
            console.log("Error while finding food by category --> " + err.message);

            res.status(500).send({
                msg: "Error retrieving Food with category = " + category
            });
        });
};

exports.findAllBySimilarName = (req, res) => {
  
    const name = req.params.name;

    let condition = { 
        name: {
            [Op.like]: `%${name}%`
        } 
    }
    // SELECT * FROM Food WHERE name LIKE name;

    Food.findAll({ where: condition })  
        .then(data => {
            if (data) {
                res.status(200).send({
                    msg: "Successful",
                    data: data
                });
            } else {
                res.status(404).send({
                    msg: `Cannot find any food with name like = ${name}.`
                });
            }
        })
        .catch(err => {
            console.log("Error while finding food by name like --> " + err.message);

            res.status(500).send({
                msg: "Error retrieving Food with name like = " + name
            });
        });
};

exports.findOne = (req, res) => {
  
    const id = req.params.id;

    let condition = { 
        id: {
            [Op.eq]: `${id}`
        } 
    }
    // SELECT * FROM Food WHERE id = id;

    Food.findAll({ where: condition })  // Food.findByPk(id)
        .then(data => {
            if (data) {
                res.status(200).send({
                    msg: "Successful",
                    data: data
                });
            } else {
                res.status(404).send({
                    msg: `Cannot find Food with id = ${id}.`
                });
            }
        })
        .catch(err => {
            console.log("Error while finding food by id --> " + err.message);

            res.status(500).send({
                msg: "Error retrieving Food with id = " + id
            });
        });
};

exports.update = (req, res) => {
  
    const id = req.params.id;

    Food.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {  // updated successfully
                res.status(200).send({
                    msg: "Food was updated successfully.",
                    updatedData: req.body
                });
            } else {
                res.status(400).send({
                    msg: `Cannot update Food with id=${id}.`
                });
            }
        })
        .catch(err => {
            console.log("Error while updating food --> " + err.message);

            res.status(500).send({
                msg: "Error updating Food with id=" + id
            });
        });
};

exports.delete = (req, res) => {

    const id = req.params.id;

    Food.destroy(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {  // deleted successfully
                res.status(200).send({
                    msg: "Food was deleted successfully.",
                });
            } else {
                res.status(400).send({
                    msg: `Cannot delete Food with id=${id}.`
                });
            }
        })
        .catch(err => {
            console.log("Error while deleting food --> " + err.message);

            res.status(500).send({
                msg: "Error deleting Food with id=" + id
            });
        });
  
};