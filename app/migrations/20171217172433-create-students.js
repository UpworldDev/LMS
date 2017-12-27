module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
			inSchool: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			ncesID: {
				type: Sequelize.INTEGER,
				allowNull: true
			},
			goals: {
				type: Sequelize.STRING,
				allowNull: false
			},
			liveWith: {
				type: Sequelize.STRING,
				allowNull: true
			},
			referredBy: {
				type: Sequelize.STRING,
				allowNull: false
			},
			cohort: {
				type: Sequelize.STRING,
				allowNull: false
			},
			location: {
				type: Sequelize.STRING,
				allowNull: false
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
    queryInterface.dropTable('Students'),
};