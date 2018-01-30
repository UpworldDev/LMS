module.exports = (sequelize, DataTypes) => {

	var ClassMember = sequelize.define(
		"ClassMember",
		{

		},
		{
			timestamps: true
		}
	);

	ClassMember.associate = models => {
		ClassMember.belongsTo(models.Class, {
			foreignKey: 'classId',
			onDelete: 'CASCADE',
			allowNull: false
		});
	};

	ClassMember.associate = models => {
		ClassMember.belongsTo(models.Student, {
			foreignKey: 'studentId',
			onDelete: 'CASCADE',
			allowNull: false
		});
	};

	return ClassMember;
};
