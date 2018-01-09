module.exports = (sequelize, DataTypes) => {
	var Contact = sequelize.define(
		"Contact",
		{
			contactType: {
				type: DataTypes.STRING,
				allowNull: false
			},

			// revist this later for failure cases:
			// fail gracefully when contact type
			// goes inactive
			value: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{
			timestamps: true
		}
	);

	Contact.associate = models => {
		Contact.belongsTo(models.Person, {
			foreignKey: 'personId',
			onDelete: 'CASCADE',
			allowNull: false
		});
	};

	return Contact;
};
