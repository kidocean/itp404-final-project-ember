define('itp404-final-project-ember/tests/controllers/searchdisaster.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/searchdisaster.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/searchdisaster.js should pass jshint.\ncontrollers/searchdisaster.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/searchdisaster.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});