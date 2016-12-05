import Ember from 'ember';

export default Ember.Route.extend({
  // model: function(){
  //   var movieid = params.id;
  //   var promise = $.ajax({
  //     type: 'get',
  //     url: 'http://localhost:3000/api/movies'
  //   })
  //   console.log(params);
  // }

    model:function(params){
      var url ='http://localhost:3000/search/' + params.term;
      //url created by me in node to find specific terms that are searched for
      // var url ='http://localhost:3000/api/movies/search/${params.term}';
      return $.getJSON(url);
    },
    afterModel: function(model){
      console.log(model);
    }

});
