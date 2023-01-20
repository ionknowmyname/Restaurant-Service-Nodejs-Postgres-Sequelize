'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
        'category',
        [
          {
            id: 1,
            name: 'category1',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 2,
            name: 'category2',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 3,
            name: 'category3',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
    );

    await queryInterface.bulkInsert(
        'food',
        [
          {
            id: 1,
            name: 'food1',
            category_id: 1,
            price: 50,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 2,
            name: 'food2',
            category_id: 1,
            price: 50,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 3,
            name: 'food3',
            category_id: 2,
            price: 50,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 4,
            name: 'food4',
            category_id: 2,
            price: 50,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 5,
            name: 'food5',
            category_id: 3,
            price: 50,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
    );

    await queryInterface.bulkInsert(
        'order',
        [
          {
            id: 1,
            orderOwner: 'order1',
            foodList: ["food1, food2"],
            totalPrice: 100,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 2,
            orderOwner: 'order2',
            foodList: ["food1"],
            totalPrice: 50,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 3,
            orderOwner: 'order3',
            foodList: ["food1, food2, food3, food4"],
            totalPrice: 200,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
    );
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('category', null, bulkDeleteOptions);
    await queryInterface.bulkDelete('food', null, bulkDeleteOptions);
    await queryInterface.bulkDelete('order', null, bulkDeleteOptions);
  }
};
