import Ember from 'ember';

export default Ember.Controller.extend({
actions:{
  search: function(e){
    e.preventDefault();
    console.log('submit');

    var searchTerm = this.get('searchTerm');
    this.transitionToRoute('search.results', searchTerm);
  }
}


});
