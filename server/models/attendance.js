module.exports = (sequelize, DataTypes) => {
	var Attendance = sequelize.define(
		"Attendance",
		{
			attendanceDate: {
				type: DataTypes.DATEONLY,
				allowNull: false
			},

			present: {
				type: DataTypes.STRING,  // present, absent or tardy - or just bool for present absent
				allowNull: false
			},
			teacherId: {
				type: DataTypes.INTEGER,  // id of the teacher
				allowNull: false
			}
		},
		{
			timestamps: true
		}
	);

	Attendance.associate = models => {
		Attendance.belongsTo(models.Person, {
			foreignKey: 'personId',
			onDelete: 'CASCADE',
			allowNull: false
		});
	};

	return Attendance;
};
