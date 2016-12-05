'use strict';

define('itp404-final-project-ember/tests/acceptance/results-test', ['exports', 'qunit', 'itp404-final-project-ember/tests/helpers/module-for-acceptance'], function (exports, _qunit, _itp404FinalProjectEmberTestsHelpersModuleForAcceptance) {

  (0, _itp404FinalProjectEmberTestsHelpersModuleForAcceptance['default'])('Acceptance | results');

  (0, _qunit.test)('/search takes you to search', function (assert) {
    visit('/search');

    andThen(function () {
      assert.equal(currentURL(), '/search');
    });
  });

  (0, _qunit.test)('Searching "Algeria" shows 80 results', function (assert) {
    visit('/search');
    fillIn('input', 'Algeria');
    click('button');

    andThen(function () {
      assert.equal(find('.dataprinted').length, 80);
    });
  });

  (0, _qunit.test)('Searching "Eart" shows disasters with "Eart"', function (assert) {
    visit('/searchdisaster');
    fillIn('input', 'Eart');
    click('button');

    andThen(function () {
      assert.equal(find('.dataprinted').length, 64);
    });
  });
});
define('itp404-final-project-ember/tests/acceptance/results-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/results-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/results-test.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 6, col 1, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 13, col 3, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('itp404-final-project-ember/tests/controllers/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/index.js should pass jshint.\ncontrollers/index.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/index.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('itp404-final-project-ember/tests/controllers/mapcontrol.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/mapcontrol.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/mapcontrol.js should pass jshint.\ncontrollers/mapcontrol.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/mapcontrol.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('itp404-final-project-ember/tests/controllers/search.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/search.js should pass jshint.\ncontrollers/search.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/search.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('itp404-final-project-ember/tests/controllers/searchdisaster.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/searchdisaster.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/searchdisaster.js should pass jshint.\ncontrollers/searchdisaster.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/searchdisaster.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('itp404-final-project-ember/tests/controllers/searchlocation.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/searchlocation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/searchlocation.js should pass jshint.\ncontrollers/searchlocation.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/searchlocation.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('itp404-final-project-ember/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('itp404-final-project-ember/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'itp404-final-project-ember/tests/helpers/start-app', 'itp404-final-project-ember/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _itp404FinalProjectEmberTestsHelpersStartApp, _itp404FinalProjectEmberTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _itp404FinalProjectEmberTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _itp404FinalProjectEmberTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('itp404-final-project-ember/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/helpers/resolver', ['exports', 'itp404-final-project-ember/resolver', 'itp404-final-project-ember/config/environment'], function (exports, _itp404FinalProjectEmberResolver, _itp404FinalProjectEmberConfigEnvironment) {

  var resolver = _itp404FinalProjectEmberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _itp404FinalProjectEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _itp404FinalProjectEmberConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('itp404-final-project-ember/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/helpers/start-app', ['exports', 'ember', 'itp404-final-project-ember/app', 'itp404-final-project-ember/config/environment'], function (exports, _ember, _itp404FinalProjectEmberApp, _itp404FinalProjectEmberConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _itp404FinalProjectEmberConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _itp404FinalProjectEmberApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('itp404-final-project-ember/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/itp404-final-project-ember/templates/p5.min.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | itp404-final-project-ember/templates/p5.min.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'itp404-final-project-ember/templates/p5.min.js should pass jshint.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 308, Expected an assignment or function call and instead saw an expression.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 309, Missing semicolon.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 554, Missing semicolon.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 554, Expected an identifier and instead saw \'=\'.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 554, Expected an assignment or function call and instead saw an expression.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 555, Missing semicolon.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 574, Expected an assignment or function call and instead saw an expression.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 575, Missing semicolon.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 667, Missing semicolon.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 689, Missing semicolon.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 709, Missing semicolon.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 791, Missing semicolon.\nitp404-final-project-ember/templates/p5.min.js: line 2, col 9818, A leading decimal point can be confused with a dot: \'.001\'.\nitp404-final-project-ember/templates/p5.min.js: line 2, col 9827, A leading decimal point can be confused with a dot: \'.001\'.\nitp404-final-project-ember/templates/p5.min.js: line 3, col 23322, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 3, col 23753, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 3, col 23911, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 7825, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 7834, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 7915, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 7924, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 17892, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 17899, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 17933, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 17940, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 17945, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 18042, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 18070, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 7289, A leading decimal point can be confused with a dot: \'.5522847498\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 7686, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 7689, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 7778, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 7782, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 8725, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 8728, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 9237, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 9241, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 29562, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 6, col 8877, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 6, col 8966, A leading decimal point can be confused with a dot: \'.2126\'.\nitp404-final-project-ember/templates/p5.min.js: line 6, col 8974, A leading decimal point can be confused with a dot: \'.7152\'.\nitp404-final-project-ember/templates/p5.min.js: line 6, col 8982, A leading decimal point can be confused with a dot: \'.0722\'.\nitp404-final-project-ember/templates/p5.min.js: line 6, col 9122, A leading decimal point can be confused with a dot: \'.2126\'.\nitp404-final-project-ember/templates/p5.min.js: line 6, col 9130, A leading decimal point can be confused with a dot: \'.7152\'.\nitp404-final-project-ember/templates/p5.min.js: line 6, col 9138, A leading decimal point can be confused with a dot: \'.0722\'.\nitp404-final-project-ember/templates/p5.min.js: line 6, col 12491, A leading decimal point can be confused with a dot: \'.01\'.\nitp404-final-project-ember/templates/p5.min.js: line 7, col 5109, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 7, col 5132, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 7, col 5404, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 7, col 14531, A leading decimal point can be confused with a dot: \'.1\'.\nitp404-final-project-ember/templates/p5.min.js: line 7, col 14531, Too many errors. (77% scanned).\n\n51 errors');
  });
});
define('itp404-final-project-ember/tests/p5.min.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | p5.min.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'p5.min.js should pass jshint.\np5.min.js: line 1, col 308, Expected an assignment or function call and instead saw an expression.\np5.min.js: line 1, col 309, Missing semicolon.\np5.min.js: line 1, col 554, Missing semicolon.\np5.min.js: line 1, col 554, Expected an identifier and instead saw \'=\'.\np5.min.js: line 1, col 554, Expected an assignment or function call and instead saw an expression.\np5.min.js: line 1, col 555, Missing semicolon.\np5.min.js: line 1, col 574, Expected an assignment or function call and instead saw an expression.\np5.min.js: line 1, col 575, Missing semicolon.\np5.min.js: line 1, col 667, Missing semicolon.\np5.min.js: line 1, col 689, Missing semicolon.\np5.min.js: line 1, col 709, Missing semicolon.\np5.min.js: line 1, col 791, Missing semicolon.\np5.min.js: line 2, col 9818, A leading decimal point can be confused with a dot: \'.001\'.\np5.min.js: line 2, col 9827, A leading decimal point can be confused with a dot: \'.001\'.\np5.min.js: line 3, col 23322, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 3, col 23753, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 3, col 23911, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 7825, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 7834, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 7915, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 7924, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 17892, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 17899, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 17933, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 17940, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 17945, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 18042, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 18070, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 5, col 7289, A leading decimal point can be confused with a dot: \'.5522847498\'.\np5.min.js: line 5, col 7686, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 5, col 7689, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 5, col 7778, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 5, col 7782, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 5, col 8725, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 5, col 8728, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 5, col 9237, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 5, col 9241, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 5, col 29562, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 6, col 8877, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 6, col 8966, A leading decimal point can be confused with a dot: \'.2126\'.\np5.min.js: line 6, col 8974, A leading decimal point can be confused with a dot: \'.7152\'.\np5.min.js: line 6, col 8982, A leading decimal point can be confused with a dot: \'.0722\'.\np5.min.js: line 6, col 9122, A leading decimal point can be confused with a dot: \'.2126\'.\np5.min.js: line 6, col 9130, A leading decimal point can be confused with a dot: \'.7152\'.\np5.min.js: line 6, col 9138, A leading decimal point can be confused with a dot: \'.0722\'.\np5.min.js: line 6, col 12491, A leading decimal point can be confused with a dot: \'.01\'.\np5.min.js: line 7, col 5109, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 7, col 5132, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 7, col 5404, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 7, col 14531, A leading decimal point can be confused with a dot: \'.1\'.\np5.min.js: line 7, col 14531, Too many errors. (77% scanned).\n\n51 errors');
  });
});
define('itp404-final-project-ember/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'resolver.js should pass jshint.\nresolver.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nresolver.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('itp404-final-project-ember/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 5, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nrouter.js: line 25, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
  });
});
define('itp404-final-project-ember/tests/routes/about.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/about.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/about.js should pass jshint.\nroutes/about.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/about.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('itp404-final-project-ember/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/index.js: line 4, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('itp404-final-project-ember/tests/routes/map.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/map.js should pass jshint.\nroutes/map.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/map.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/map.js: line 38, col 72, Missing semicolon.\nroutes/map.js: line 41, col 72, Missing semicolon.\nroutes/map.js: line 49, col 13, \'marker\' is already defined.\nroutes/map.js: line 56, col 11, \'marker\' is already defined.\nroutes/map.js: line 44, col 30, \'lat\' used out of scope.\nroutes/map.js: line 49, col 32, \'lat\' used out of scope.\nroutes/map.js: line 56, col 30, \'lat\' used out of scope.\nroutes/map.js: line 44, col 35, \'lon\' used out of scope.\nroutes/map.js: line 49, col 37, \'lon\' used out of scope.\nroutes/map.js: line 56, col 35, \'lon\' used out of scope.\nroutes/map.js: line 62, col 3, Missing semicolon.\n\n13 errors');
  });
});
define('itp404-final-project-ember/tests/routes/nodeapilist.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/nodeapilist.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/nodeapilist.js should pass jshint.\nroutes/nodeapilist.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/nodeapilist.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/nodeapilist.js: line 4, col 1, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('itp404-final-project-ember/tests/routes/p5.min.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/p5.min.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/p5.min.js should pass jshint.\nroutes/p5.min.js: line 1, col 308, Expected an assignment or function call and instead saw an expression.\nroutes/p5.min.js: line 1, col 309, Missing semicolon.\nroutes/p5.min.js: line 1, col 554, Missing semicolon.\nroutes/p5.min.js: line 1, col 554, Expected an identifier and instead saw \'=\'.\nroutes/p5.min.js: line 1, col 554, Expected an assignment or function call and instead saw an expression.\nroutes/p5.min.js: line 1, col 555, Missing semicolon.\nroutes/p5.min.js: line 1, col 574, Expected an assignment or function call and instead saw an expression.\nroutes/p5.min.js: line 1, col 575, Missing semicolon.\nroutes/p5.min.js: line 1, col 667, Missing semicolon.\nroutes/p5.min.js: line 1, col 689, Missing semicolon.\nroutes/p5.min.js: line 1, col 709, Missing semicolon.\nroutes/p5.min.js: line 1, col 791, Missing semicolon.\nroutes/p5.min.js: line 2, col 9818, A leading decimal point can be confused with a dot: \'.001\'.\nroutes/p5.min.js: line 2, col 9827, A leading decimal point can be confused with a dot: \'.001\'.\nroutes/p5.min.js: line 3, col 23322, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 3, col 23753, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 3, col 23911, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 7825, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 7834, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 7915, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 7924, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 17892, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 17899, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 17933, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 17940, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 17945, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 18042, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 18070, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 5, col 7289, A leading decimal point can be confused with a dot: \'.5522847498\'.\nroutes/p5.min.js: line 5, col 7686, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 5, col 7689, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 5, col 7778, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 5, col 7782, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 5, col 8725, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 5, col 8728, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 5, col 9237, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 5, col 9241, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 5, col 29562, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 6, col 8877, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 6, col 8966, A leading decimal point can be confused with a dot: \'.2126\'.\nroutes/p5.min.js: line 6, col 8974, A leading decimal point can be confused with a dot: \'.7152\'.\nroutes/p5.min.js: line 6, col 8982, A leading decimal point can be confused with a dot: \'.0722\'.\nroutes/p5.min.js: line 6, col 9122, A leading decimal point can be confused with a dot: \'.2126\'.\nroutes/p5.min.js: line 6, col 9130, A leading decimal point can be confused with a dot: \'.7152\'.\nroutes/p5.min.js: line 6, col 9138, A leading decimal point can be confused with a dot: \'.0722\'.\nroutes/p5.min.js: line 6, col 12491, A leading decimal point can be confused with a dot: \'.01\'.\nroutes/p5.min.js: line 7, col 5109, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 7, col 5132, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 7, col 5404, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 7, col 14531, A leading decimal point can be confused with a dot: \'.1\'.\nroutes/p5.min.js: line 7, col 14531, Too many errors. (77% scanned).\n\n51 errors');
  });
});
define('itp404-final-project-ember/tests/routes/search.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/search.js should pass jshint.\nroutes/search.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/search.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('itp404-final-project-ember/tests/routes/search/results.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/search/results.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/search/results.js should pass jshint.\nroutes/search/results.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/search/results.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('itp404-final-project-ember/tests/routes/searchdisaster.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/searchdisaster.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/searchdisaster.js should pass jshint.\nroutes/searchdisaster.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/searchdisaster.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('itp404-final-project-ember/tests/routes/searchdisaster/resultsdisaster.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/searchdisaster/resultsdisaster.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/searchdisaster/resultsdisaster.js should pass jshint.\nroutes/searchdisaster/resultsdisaster.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/searchdisaster/resultsdisaster.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('itp404-final-project-ember/tests/routes/searchlocation.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/searchlocation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/searchlocation.js should pass jshint.\nroutes/searchlocation.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/searchlocation.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('itp404-final-project-ember/tests/routes/searchlocation/resultslocation.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/searchlocation/resultslocation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/searchlocation/resultslocation.js should pass jshint.\nroutes/searchlocation/resultslocation.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/searchlocation/resultslocation.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('itp404-final-project-ember/tests/test-helper', ['exports', 'itp404-final-project-ember/tests/helpers/resolver', 'ember-qunit'], function (exports, _itp404FinalProjectEmberTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_itp404FinalProjectEmberTestsHelpersResolver['default']);
});
define('itp404-final-project-ember/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/unit/controllers/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:index', 'Unit | Controller | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('itp404-final-project-ember/tests/unit/controllers/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/unit/controllers/mapcontrol-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:mapcontrol', 'Unit | Controller | mapcontrol', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('itp404-final-project-ember/tests/unit/controllers/mapcontrol-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/mapcontrol-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/mapcontrol-test.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/unit/controllers/search-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:search', 'Unit | Controller | search', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('itp404-final-project-ember/tests/unit/controllers/search-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/search-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/search-test.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('itp404-final-project-ember/tests/unit/routes/about-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/about-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('itp404-final-project-ember/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/unit/routes/map-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:map', 'Unit | Route | map', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('itp404-final-project-ember/tests/unit/routes/map-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/map-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/map-test.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/unit/routes/nodeapilist-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:nodeapilist', 'Unit | Route | nodeapilist', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('itp404-final-project-ember/tests/unit/routes/nodeapilist-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/nodeapilist-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/nodeapilist-test.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/unit/routes/results-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:results', 'Unit | Route | results', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('itp404-final-project-ember/tests/unit/routes/results-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/results-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/results-test.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/unit/routes/search-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:search', 'Unit | Route | search', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('itp404-final-project-ember/tests/unit/routes/search-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/search-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/search-test.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/unit/routes/search/results-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:search/results', 'Unit | Route | search/results', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('itp404-final-project-ember/tests/unit/routes/search/results-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/search/results-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/search/results-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('itp404-final-project-ember/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
