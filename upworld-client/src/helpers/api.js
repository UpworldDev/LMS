module.exports = {};

//module.exports.apiUrl = "https://aqueous-journey-57962.herokuapp.com/api/";
module.exports.apiUrl = "http://localhost:3000/api/";

module.exports.personUrl = function(personId){
//  return "https://aqueous-journey-57962.herokuapp.com/api/persons/"+personId
  return "http://localhost:3000/api/"+personId
};

