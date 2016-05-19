const local = require('@larsthorup/local');
const util = local('utilities');
const model = local('model');

console.log('app', util.hello());
console.log('app', model.hello());