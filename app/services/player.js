import Ember from 'ember';
var on = Ember.on;

export default Ember.Service.extend({
  isPlaying: false,
  audioElement: null,
  currentTime: 0,

  setupAudioElement: on('init', function() {
    var el = document.createElement('audio');
    el.addEventListener('play', Ember.run.bind(this, 'didStartPlaying'));
    el.addEventListener('pause', Ember.run.bind(this, 'didPause'));
    el.addEventListener('timeupdate', Ember.run.bind(this, 'currentTimeChanged'));
    this.set('audioElement', el);
  }),

  didStartPlaying() {
    this.set('isPlaying', true);
  },

  didPause() {
    this.set('isPlaying', false);
  },

  play(song) {
    this.set('song', song);
    this.set('audioElement.src', song.get('url'));
    this.get('audioElement').play();
  },

  pause() {
    this.get('audioElement').pause();
  },

  resume() {
    this.get('audioElement').play();
  },

// this willDestroy is just used to pass the tests, not necessarily used to implement the play/pause
  willDestroy() {
    this.get('audioElement').src = '';
  },

  currentTimeChanged() {
    this.set('currentTime', Math.floor(this.get('audioElement.currentTime')));
  }
});
