define('itp404-final-project-ember/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/index.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/index.js: line 34, col 72, Missing semicolon.\nroutes/index.js: line 37, col 72, Missing semicolon.\nroutes/index.js: line 45, col 13, \'marker\' is already defined.\nroutes/index.js: line 52, col 11, \'marker\' is already defined.\nroutes/index.js: line 58, col 3, Missing semicolon.\n\n7 errors');
  });
});