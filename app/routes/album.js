import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('album', params.album_id );
    // this syntax above is the default -- if you deleted this file the tests would still pass (up to this point)
  }
});


