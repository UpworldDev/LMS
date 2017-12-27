module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [{
      inSchool: false,
      ncesID: null,
      goals: 'GED',
      liveWith: 'parents',
      referredBy: 'website',
      cohort: 'Unknown',
      location: 'Merchandise Mart',
      createdAt: new Date(),
      updatedAt: new Date()},
      //email: 'demo@demo.com'
    {
      inSchool: true,
      ncesID: 1709930,
      goals: 'Graduate',
      liveWith: 'parents',
      referredBy: 'website',
      cohort: 'Unknown',
      location: 'Merchandise Mart',
      createdAt: new Date(),
      updatedAt: new Date()      
    },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
