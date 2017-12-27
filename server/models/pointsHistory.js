module.exports = (sequelize, DataTypes) => {
	var PointHistory = sequelize.define(
		"PointHistory",
		{
			transaction: {
				type: DataTypes.INTEGER,
				allowNull: false
			},

			event: {
				// text field, revisit
				type: DataTypes.STRING,
				allowNull: false
			},

			// NOT person. can be automated
			user: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{
			timestamps: true
		}
	);

	PointHistory.associate = models => {
		PointHistory.belongsTo(models.Person, {
			foreignKey: {
				field: "studentID",
				allowNull: false
			}
		});
	};

	return PointHistory;
};
