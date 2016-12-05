define('itp404-final-project-ember/routes/searchlocation/resultslocation', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {
      var url = 'http://localhost:3000/searchlocation/' + params.term;
      return $.getJSON(url);
    },
    afterModel: function afterModel(model) {
      console.log(model);
    }

  });
});