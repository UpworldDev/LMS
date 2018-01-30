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
	
	return Teacher;
};
