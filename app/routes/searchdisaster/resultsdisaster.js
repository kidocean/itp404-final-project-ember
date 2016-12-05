import Ember from 'ember';

export default Ember.Route.extend({


    model:function(params){
      var url ='http://localhost:3000/searchdisaster/' + params.term;
      return $.getJSON(url);
    },
    afterModel: function(model){
      console.log(model);
    }

});
