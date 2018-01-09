module.exports = (sequelize, DataTypes) => {
	var StudentGuardianRelationship = sequelize.define(
		"StudentGuardianRelationship",
		{
			content: {
				type: DataTypes.STRING,
				allowNull: false
			}			
		},
		{
			timestamps: true
		}
	);

	StudentGuardianRelationship.associate = models => {
		StudentGuardianRelationship.belongsTo(models.Person, {
			foreignKey: 'personId',
			onDelete: 'CASCADE',
			allowNull: false
		});
	};

	StudentGuardianRelationship.associate = models => {
		StudentGuardianRelationship.belongsTo(models.Person, {
			foreignKey: {
				field: "Guardian",
				allowNull: false
			}
		});
	};

	return StudentGuardianRelationship;
};
