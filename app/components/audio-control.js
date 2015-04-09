import Ember from 'ember';
var inject = Ember.inject;


export default Ember.Component.extend({
  player: inject.service(),

  actions: {
    play() {
      this.get('player').resume();
    },

    pause() {
      this.get('player').pause();
    }

  }
});
