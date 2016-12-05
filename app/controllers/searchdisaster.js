import Ember from 'ember';

export default Ember.Controller.extend({
actions:{
  searchdisaster: function(e){
    e.preventDefault();
    console.log('submit');

    var searchTerm = this.get('searchTerm');
    this.transitionToRoute('searchdisaster.resultsdisaster', searchTerm);
  }
}


});
