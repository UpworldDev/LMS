module.exports = (sequelize, DataTypes) => {
	var Student = sequelize.define(
		"Student",
		{
			inSchool: {
				type: DataTypes.BOOLEAN,
				allowNull: false
			},

			// the front end team will have to figure
			// out a way to query an API for those or
			// regularly check in to update data for
			// schools in our system.
			// there may be some sort of national or
			// local registries that have this info.
			ncesID: {
				type: DataTypes.INTEGER,
				allowNull: true
			},

			// type is long form text of some sort
			// or just some dropdown menu with options:
			// college, job, internship, other (input field)
			goals: {
				type: DataTypes.STRING,
				allowNull: false
			},

			liveWith: {
				type: DataTypes.STRING,
				allowNull: true
			},

			// parent/guardian, institution, school, website,
			// other
			referredBy: {
				type: DataTypes.STRING,
				allowNull: false
			},

			// revisit this for proper labels/stars
			cohort: {
				type: DataTypes.STRING,
				allowNull: false
			},

			location: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{
			timestamps: true
		}
	);

	Student.associate = (models) => {
		Student.hasMany(models.Assesment, {
		  foreignKey: 'studentId',
		  as: 'assessments',
		});
	  };	
	  
	Student.associate = models => {
		Student.belongsTo(models.Person, {
			foreignKey: {
				allowNull: false
			}
		});
	};
	return Student;
};
