import DS from 'ember-data';

var attr = DS.attr;
// var computed = Ember.computed <-- can use this syntax so you don't have to type Ember.computed everytime

export default DS.Model.extend({
  artwork: attr('string'),
  name: attr('string'),
  artist: attr('string'),
  isExplicit: attr('boolean'),
  songs: DS.hasMany('song'),

durations: Ember.computed.mapBy('songs', 'duration'),
totalDuration: Ember.computed.sum('durations'),

// // The above computed properties are a shorter version of below.
// totalDuration: Ember.computed('songs.@each.duration', function() {
//   return this.get('songs').reduce(function(sum, song){
//   return sum + song.get('duration')
//   }, 0)
// }),

songCount: Ember.computed.alias('songs.length')
// // The above computed property is shorter version of below
// songCount: Ember.computed('songs', function() {
//   return this.get('songs.length');
// })

});

