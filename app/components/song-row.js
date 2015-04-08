import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  isPlaying: false,

  actions: {
    toggle() {
      this.toggleProperty('isPlaying')
    }
  }

});



