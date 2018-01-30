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

	Course.associate = models => {
		Course.hasMany(models.Class, {
			foreignKey: 'courseId',
		});
	};

	return Course;
};