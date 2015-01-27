import Ember from 'ember';

export default Ember.ObjectController.extend({

	needs: ['gallery'],

	actions: {
		showPrev: function() {
			this.showByDiff(-1);
		},

		showNext: function() {
			this.showByDiff(1);
		}
	},

	showByDiff: function(diff) {
		var currentId = parseInt(this.get('id')),
				total = this.get('controllers.gallery').get('length'),
				showId = (currentId + diff) % total;
		if(showId === 0) {
			showId = total;
		}

		this.transitionToRoute('gallery.show', this.store.find('gallery', showId));
	}
});
