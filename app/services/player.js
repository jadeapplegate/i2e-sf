import Ember from 'ember';
var on = Ember.on;

export default Ember.Service.extend({
  isPlaying: false,
  audioElement: null,

  setupAudioElement: on('init', function() {
    var el = document.createElement('audio');
    el.addEventListener('play', Ember.run.bind(this, 'didStartPlaying'));
    el.addEventListener('pause', Ember.run.bind(this, 'didPause'));
    this.set('audioElement', el);
  }),

  didStartPlaying() {
    this.set('isPlaying', true);
  },

  didPause() {
    this.set('isPlaying', false);
  },

  play(song) {
    this.set('isPlaying', true);
    this.set('audioElement.src', song.get('url'));
    this.get('audioElement').play();
  },

  pause() {
    this.set('isPlaying', false);
    this.get('audioElement').pause()
  },

// this willDestroy is just used to pass the tests, not necessarily used to implement the play/pause
  willDestroy() {
    this.get('audioElement').src = '';
  }
});
