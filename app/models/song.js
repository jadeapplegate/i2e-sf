import DS from 'ember-data';var attr = DS.attr;

export default DS.Model.extend({
  track: attr('number'),
  name: attr('string'),
  duration: attr('number'),
  url: attr('string'),
  album: DS.belongsTo('album')
});

