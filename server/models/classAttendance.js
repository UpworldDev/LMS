module.exports = (sequelize, DataTypes) => {
	//
	// Id
	// ClassMember_id
	// Date
	// Present (T/F)

	var ClassAttendance = sequelize.define(
		"ClassAttendance",
		{
			date: {
				type: DataTypes.DATEONLY,
				allowNull: false
			},
			present: {
				type: DataTypes.BOOLEAN,
				allowNull: false
			}
		},
		{
			timestamps: true
		}
	);

	ClassAttendance.associate = models => {
		ClassAttendance.belongsTo(models.ClassMember, {
			foreignKey: 'classMemberId',
			onDelete: 'CASCADE',
			allowNull: false
		});
	};


	return ClassAttendance;
};
