import Ember from 'ember';

export default Ember.Controller.extend({
actions:{
  searchlocation: function(e){
    e.preventDefault();
    console.log('submit');

    var searchTerm = this.get('searchTerm');
    this.transitionToRoute('searchlocation.resultslocation', searchTerm);
  }
}


});
