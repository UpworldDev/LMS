module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Points', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pointBalance: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      personId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'People',
          key: 'id',
          as: 'personId',
        }
      }  
    }),
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('Points'),
};