import Ember from 'ember';
import config from './config/environment';


const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('map');
  this.route('about');
  this.route('nodeapilist');
  this.route('search', function() {
    this.route('results', { path: ':term'});
  });
  this.route('searchdisaster', function() {
    this.route('resultsdisaster', { path: ':term'});
  });
  this.route('searchlocation', function() {
    this.route('resultslocation', { path: ':term'});
  });
});

export default Router;
