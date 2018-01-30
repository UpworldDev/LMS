module.exports = (sequelize, DataTypes) => {
	var Course = sequelize.define(
		"Course",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{
			timestamps: true
		}
	);

	return Course;
};
