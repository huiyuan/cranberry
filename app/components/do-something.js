import Ember from 'ember';

export default Ember.Component.extend({
	click: function(){
		this.sendAction('action', this.get('score'), this.get('behavior'));
	}
});
