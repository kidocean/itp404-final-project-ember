define('itp404-final-project-ember/controllers/searchlocation', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      searchlocation: function searchlocation(e) {
        e.preventDefault();
        console.log('submit');

        var searchTerm = this.get('searchTerm');
        this.transitionToRoute('searchlocation.resultslocation', searchTerm);
      }
    }

  });
});