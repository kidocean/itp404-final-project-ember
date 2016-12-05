define('itp404-final-project-ember/controllers/searchdisaster', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      searchdisaster: function searchdisaster(e) {
        e.preventDefault();
        console.log('submit');

        var searchTerm = this.get('searchTerm');
        this.transitionToRoute('searchdisaster.resultsdisaster', searchTerm);
      }
    }

  });
});