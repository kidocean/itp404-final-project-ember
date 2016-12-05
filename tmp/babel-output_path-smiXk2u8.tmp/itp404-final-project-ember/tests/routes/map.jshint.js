define('itp404-final-project-ember/tests/routes/map.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/map.js should pass jshint.\nroutes/map.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/map.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/map.js: line 38, col 72, Missing semicolon.\nroutes/map.js: line 41, col 72, Missing semicolon.\nroutes/map.js: line 49, col 13, \'marker\' is already defined.\nroutes/map.js: line 56, col 11, \'marker\' is already defined.\nroutes/map.js: line 44, col 30, \'lat\' used out of scope.\nroutes/map.js: line 49, col 32, \'lat\' used out of scope.\nroutes/map.js: line 56, col 30, \'lat\' used out of scope.\nroutes/map.js: line 44, col 35, \'lon\' used out of scope.\nroutes/map.js: line 49, col 37, \'lon\' used out of scope.\nroutes/map.js: line 56, col 35, \'lon\' used out of scope.\nroutes/map.js: line 62, col 3, Missing semicolon.\n\n13 errors');
  });
});