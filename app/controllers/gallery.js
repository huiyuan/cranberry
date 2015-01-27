import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions: {
		fadeOut: function() {
			this.toggleProperty('modalOpen');
		}
	},

	itemController: 'gallery.show'
});
