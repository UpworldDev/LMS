module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('People', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userType: {
				type: Sequelize.STRING,
				allowNull: false
			},
			firstName: {
				type: Sequelize.STRING,
				allowNull: false
			},
			lastName: {
				type: Sequelize.STRING,
				allowNull: false
			},
			dateOfBirth: {
				type: Sequelize.DATE,
				allowNull: true
			},
			isHispanic: {
				type: Sequelize.BOOLEAN,
				allowNull: true
			},
			race: {
				type: Sequelize.STRING,
				allowNull: true
			},
			gender: {
				type: Sequelize.STRING,
				allowNull: true
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
    queryInterface.dropTable('People'),
};