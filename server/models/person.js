module.exports = (sequelize, DataTypes) => {
	const Person = sequelize.define('Person', {
		// enum list, types: student, mentor, parent/guardian,
		// inactive students, graduate (nonmentors).
		// graduate (mentors)
		client: {
			type: DataTypes.STRING,
			defaultValue: "Development",
			allowNull: false
		},

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
			defaultValue: false,
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
	});

	Person.associate = (models) => {
		Person.hasMany(models.Assessment, {
			foreignKey: 'personId',
			as: "assessments"
		});
		Person.hasMany(models.Contact, {
			foreignKey: 'personId',
			as: "contacts"
		});
		Person.hasOne(models.Point, {
			foreignKey: 'personId',
			as: "points"
		});
		Person.hasMany(models.PointHistory, {
			foreignKey: 'personId',
			as: "pointHistories"
		});
		Person.hasOne(models.Student, {
			foreignKey: 'personId',
			as: "Students"
		});
		Person.hasOne(models.Teacher, {
			foreignKey: 'personId',
			as: "Teachers"
		});
	};

	return Person;
};
