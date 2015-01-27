import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		increaseBy: function(increment) {
			if( this.isMaxedOut() ){
				alert('She\'s really happy right now, give her a break!');
				return;
			}
			this.set('happyScore', Math.min(this.get('happyScore') + increment, 100));
		},

		decreaseBy: function (decrement) {
			if( this.isReachedLow() ){
				alert('She feels miserable, stop doing bad things to her!!');
				return;
			}
			this.set('happyScore', Math.max(this.get('happyScore') - decrement, 0));
		}
	},

	isMaxedOut: function () {
		return this.get('happyScore') === 100;
	},

	isReachedLow: function () {
		return this.get('happyScore') === 0;
	},

	currentMood: {},

	getCurrentMood: function () {
  	var moodLevelIndex = Math.floor(this.get('happyScore') / 25);
  	this.set('currentMood', this.get('moods')[moodLevelIndex]);
  }.observes('happyScore'),

  moodImageUrl: function () {
  	return this.get('currentMood').image;
  }.property('currentMood'),

  status: function() {
  	return this.get('currentMood').mood;
  }.property('currentMood')
});
