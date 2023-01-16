module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
        orderOwner: {
            type: Sequelize.STRING
        },
        foodList: {
            type: Sequelize.ARRAY(Sequelize.STRING)  // or try JSONB to store the whole food model
        },
        totalPrice: {
            type: Sequelize.FLOAT
        }
    });
  
    return Order;
};