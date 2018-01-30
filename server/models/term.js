module.exports = (sequelize, DataTypes) => {
	var Term = sequelize.define(
		"Term",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			startDate: {
				type: DataTypes.DATEONLY,
				allowNull: false
			},
			endDate: {
				type: DataTypes.DATEONLY,
				allowNull: false
			}
		},
		{
			timestamps: true
		}
	);

	return Term;
};
