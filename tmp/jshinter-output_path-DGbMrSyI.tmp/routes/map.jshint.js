QUnit.module('JSHint | routes/map.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/map.js should pass jshint.\nroutes/map.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/map.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/map.js: line 34, col 72, Missing semicolon.\nroutes/map.js: line 37, col 72, Missing semicolon.\nroutes/map.js: line 45, col 13, \'marker\' is already defined.\nroutes/map.js: line 52, col 11, \'marker\' is already defined.\nroutes/map.js: line 58, col 3, Missing semicolon.\n\n7 errors');
});
