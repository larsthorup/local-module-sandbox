var Knex = require('knex');
var util = require('../utilities')

module.exports = {
  hello: function () {
    console.log('model', util.hello())
    return 'model';
  }
}