import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  interests: DS.attr('string'),
  favoriteColor: DS.attr('string'),
  imageUrl: DS.attr('string'),
  fullName: Ember.computed('firstName', 'lastName', function(key, value) {
  	return this.get('firstName') + ' ' + this.get('lastName');
  })
});