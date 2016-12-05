define('itp404-final-project-ember/tests/routes/searchlocation.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/searchlocation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/searchlocation.js should pass jshint.\nroutes/searchlocation.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/searchlocation.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});