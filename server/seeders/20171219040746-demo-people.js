module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Person', [{
      userType: 'student',
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '2000-03-25',
      isHispanic: false,
      race: 'white',
      gender: 'male',
      createdAt: new Date(),
      updatedAt: new Date()},
      //email: 'demo@demo.com'
    {
      userType: 'student',
      firstName: 'Julie',
      lastName: 'Cook',
      dateOfBirth: '2000-01-22',
      isHispanic: false,
      race: 'white',
      gender: 'female',
      createdAt: new Date(),
      updatedAt: new Date()      
    },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Person', null, {});
  }
};
