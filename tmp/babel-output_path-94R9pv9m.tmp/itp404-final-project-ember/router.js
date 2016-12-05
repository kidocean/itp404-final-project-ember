define('itp404-final-project-ember/router', ['exports', 'ember', 'itp404-final-project-ember/config/environment'], function (exports, _ember, _itp404FinalProjectEmberConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _itp404FinalProjectEmberConfigEnvironment['default'].locationType,
    rootURL: _itp404FinalProjectEmberConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('map');
    this.route('about');
    this.route('nodeapilist');
    this.route('search', function () {
      this.route('results', { path: ':term' });
    });
    this.route('searchdisaster', function () {
      this.route('resultsdisaster', { path: ':term' });
    });
    this.route('searchlocation', function () {
      this.route('resultslocation', { path: ':term' });
    });
  });

  exports['default'] = Router;
});