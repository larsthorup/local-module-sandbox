const Knex = require('knex');
const local = require('@larsthorup/local');
const util = local('utilities');

module.exports = {
  hello: function () {
    console.log('model', util.hello())
    return 'model';
  }
}