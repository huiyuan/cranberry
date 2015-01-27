import DS from 'ember-data';
import Ember from 'ember';

var inflector = Ember.Inflector.inflector;

inflector.uncountable('gallery');
inflector.uncountable('cranberry');

export default DS.RESTAdapter.extend({
	namespace: 'api'
});