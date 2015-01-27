import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'nav',

	actions: {
		toggleNav: function () {
			this.toggleProperty('showNavigation');
		}
	}
});
