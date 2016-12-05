import { test } from 'qunit';
import moduleForAcceptance from 'itp404-final-project-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | results');

test('/search takes you to search', function(assert) {
  visit('/search');

  andThen(function() {
    assert.equal(currentURL(), '/search');
  });
});


test('Searching "Algeria" shows 80 results', function(assert) {
  visit('/search');
  fillIn('input', 'Algeria');
  click('button');

  andThen(function() {
    assert.equal(find('.dataprinted').length, 80);
  });
});

test('Searching "Eart" shows disasters with "Eart"', function(assert) {
  visit('/searchdisaster');
  fillIn('input', 'Eart');
  click('button');

  andThen(function() {
    assert.equal(find('.dataprinted').length, 64);
  });
});
