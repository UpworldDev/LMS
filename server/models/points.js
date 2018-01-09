module.exports = (sequelize, DataTypes) => {
	var Point = sequelize.define(
		"Point",
		{
			pointBalance: {
				type: DataTypes.INTEGER,
				allowNull: false
			},

		},
		{
			timestamps: true
		}
	);

	Point.associate = models => {
		Point.belongsTo(models.Person, {
			foreignKey: 'personId',
				onDelete: 'CASCADE',
				allowNull: false
		});
	};

	return Point;
};
