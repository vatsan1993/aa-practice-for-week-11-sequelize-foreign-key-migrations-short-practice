'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    queryInterface.addColumn('Musicians', 'bandId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Bands', // this is table name. not model name,
        key: 'id',
      },
      onDelete: 'CASCADE', // this should be outside the references
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeColumn('Musicians', 'bandId');
  },
};
