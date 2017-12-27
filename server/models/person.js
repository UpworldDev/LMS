module.exports = (sequelize, DataTypes) => {
	const Person = sequelize.define('Person', {
		// enum list, types: student, mentor, parent/guardian,
		// inactive students, graduate (nonmentors).
		// graduate (mentors)
		userType: {
			type: DataTypes.STRING,
			allowNull: false
		},

		// for the future, for when students and
		// mentors can log in
		// username: {}

		firstName: {
			type: DataTypes.STRING,
			allowNull: false
		},

		lastName: {
			type: DataTypes.STRING,
			allowNull: false
		},

		dateOfBirth: {
			type: DataTypes.DATE,
			allowNull: true
			// required for students, not mentors
		},

		isHispanic: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		},

		race: {
			type: DataTypes.STRING,
			allowNull: true
		},

		gender: {
			type: DataTypes.STRING,
			allowNull: true
		}

		// revist this later
		// lastModifiedBy: {
		// 	type: DataTypes.String,
		// 	allowNull: false
		// }
	},
	//	{
	//		timestamps: true
	//	}
	);
	return Person;
};

// remember to make association with children tables
// Contact
