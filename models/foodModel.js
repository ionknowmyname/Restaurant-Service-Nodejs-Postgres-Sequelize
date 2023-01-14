module.exports = (sequelize, Sequelize) => {
    const Food = sequelize.define("food", {
        name: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.FLOAT
        },
        created: {
            type: Sequelize.DATE
        }
    });
  
    return Food;
};