module.exports = (sequelize, DataTypes) => {
	var Point = sequelize.define(
		"Point",
		{
			pointBalance: {
				type: DataTypes.INTEGER,
				allowNull: false
			}

			// need point history table
		},
		{
			timestamps: true
		}
	);

	Point.associate = models => {
		Point.belongsTo(models.Person, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Point;
};
