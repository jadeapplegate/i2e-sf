import Ember from 'ember';
var inject = Ember.inject;
var computed = Ember.computed;

export default Ember.Component.extend({
  tagName: 'tr',
  classNameBindings: ['isCurrentSong'],
  player: inject.service(),
  favorites: inject.service(),

  isFavorite: computed('favorites.songs.@each', function() {
    var song = this.get('song');
    return this.get('favorites.songs').contains(song);
  }),

  isCurrentSong: computed('player.song', 'song', function() {
    return this.get('player.song') === this.get('song');
  }),

  isPlaying: computed('player.isPlaying', 'isCurrentSong', function() {
    return this.get('player.isPlaying') && this.get('isCurrentSong');
  }),

  actions: {

    toggle() {
      if (this.get('isPlaying')) {
        this.get('player').pause(this.get('song'));
      } else {
        this.get('player').play(this.get('song'));
      }
    },

    fav() {
      var song = this.get('song');
      this.get('favorites').toggle(song);
    }
  }
});



