module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('PointHistorys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      transaction: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      event: {
        type: Sequelize.STRING,
        defaultValue: false,
      },
      user: {
        type: Sequelize.STRING,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('PointHistorys'),
};