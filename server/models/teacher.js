module.exports = (sequelize, DataTypes) => {
	var Teacher = sequelize.define(
		"Teacher",
		{

		},
		{
			timestamps: true
		}
	);

	Teacher.associate = models => {
		Teacher.belongsTo(models.Person, {
			foreignKey: 'personId',
			onDelete: 'CASCADE',
			allowNull: false
		});
	};

	Teacher.associate = models => {
		Teacher.hasMany(models.Class, {
			foreignKey: 'teacherId',
		});
	};
	
	return Teacher;
};
