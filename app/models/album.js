import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  artwork: attr('string'),
  name: attr('string'),
  artist: attr('string'),
  isExplicit: attr('boolean'),
  songs: DS.hasMany('song')
});
