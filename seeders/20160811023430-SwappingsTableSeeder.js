'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Swappings', [{
      firstPersonID: 1,
      firstPersonProductID: 3,
      secondPersonID: 2,
      secondPersonProductID: 6
    }, {
      firstPersonID: 1,
      firstPersonProductID: 2,
      secondPersonID: 3,
      secondPersonProductID: 8
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Swappings', null, {truncate: true});
  }
};
