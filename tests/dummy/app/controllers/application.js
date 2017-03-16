import Ember from 'ember';

export default Ember.Controller.extend({
  showAddons: Ember.computed.equal('selectedFavorite', 'addons'),
  showComponents: Ember.computed.equal('selectedFavorite', 'components'),
  showOther: Ember.computed.equal('selectedFavorite', 'other')
});
