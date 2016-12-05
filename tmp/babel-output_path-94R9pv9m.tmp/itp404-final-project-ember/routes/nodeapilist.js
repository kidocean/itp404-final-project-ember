define('itp404-final-project-ember/routes/nodeapilist', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      console.log($.getJSON('http://localhost:3000'));
      return $.getJSON('http://localhost:3000');
    }
  });

  // var i = 0;
  //   $.getJSON('http://localhost:3000', function(data){
  //     for (i = 0; i < data.length; i++) {
  //     console.log(data[i].Country + " " + data[i].Location + " " + data[i].Disastertype + " " + data[i].Totaldeaths);
  // }
  // })

  // var controller = this;
  //
  //     var promise = $.ajax({
  //       url: 'http://localhost:3000',
  //       type: "GET",
  //       success: function(data) {
  //         console.log(data);
  //         controller.set('response', data);
  //       },
  //       dataType: 'json'
  //     });
});