import Ember from 'ember';
import layout from '../templates/components/paper-radio-with-content';

export default Ember.Component.extend({
  layout,

  classNames: ['paper-radio-with-content'],

  click() {
    if (!this.get('disabled')) {
      if (this.get('toggle')) {
        this.sendAction('onChange', this.get('checked') ? null : this.get('value'));
      } else {
        this.sendAction('onChange', this.get('value'));
      }
    }
    // Prevent bubbling, if specified. If undefined, the event will bubble.
    return this.get('bubbles');
  }
});
