import Ember from 'ember';
var inject = Ember.inject;
var computed = Ember.computed;

export default Ember.Component.extend({
  tagName: 'tr',
  isPlaying: false,
  player: inject.service(),

  favorites: inject.service(), // New!

  isFavorite: computed('favorites.songs.@each', function() {
    var song = this.get('song');
    return this.get('favorites.songs').contains(song);
  }),

  actions: {

    toggle() {
      if (this.get('player').get('isPlaying')) {
        this.set('isPlaying', false);
        this.get('player').pause(this.get('song'));
      } else {
        this.set('isPlaying', true);
        this.get('player').play(this.get('song'));
      }
    },

    fav() {
      var song = this.get('song');
      this.get('favorites').toggle(song);
    }
  }
});



