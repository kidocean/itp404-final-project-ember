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