import Ember from 'ember';

export default Ember.Service.extend({
  songs: [],

  toggle(song) {
    var songs = this.get('songs');

    if (songs.contains(song)) {
      songs.removeObject(song);
    } else {
      songs.pushObject(song);
    }
  }
});

