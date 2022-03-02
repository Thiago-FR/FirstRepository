'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books',
      [
        {
          title: 'A Game of Thrones',
          author: 'George R.R. Martin',
          page_quantity: 1000,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: 'A Clash of Kings',
          author: 'George R.R. Martin',
          page_quantity: 1000,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: 'A Storm of Swords',
          author: 'George R.R. Martin',
          page_quantity: 1000,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: 'The Lord of The Rings - The Fellowship of the Ring',
          author: 'J.R.R Tolkien',
          page_quantity: 1000,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: 'Foundation',
          author: 'Isaac Asimov',
          page_quantity: 1000,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {})
  }
};
