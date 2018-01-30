module.exports = (sequelize, DataTypes) => {

	var Class = sequelize.define(
		"Class",
		{

		},
		{
			timestamps: true
		}
	);

	Class.associate = models => {
		Class.belongsTo(models.Course, {
			foreignKey: 'courseId',
			onDelete: 'CASCADE',
			allowNull: false
		});
	};

	Class.associate = models => {
		Class.belongsTo(models.Teacher, {
			foreignKey: 'teacherId',
			onDelete: 'CASCADE',
			allowNull: false
		});
	};

	Class.associate = models => {
		Class.belongsTo(models.Term, {
			foreignKey: 'termId',
			onDelete: 'CASCADE',
			allowNull: false
		});
	};

	Class.associate = models => {
		Class.hasMany(models.ClassMember, {
			foreignKey: 'classId'
		});
	};

	return Class;
};
