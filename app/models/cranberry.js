import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  moods: DS.attr('array'),
  happyScore: DS.attr('number'),
});
