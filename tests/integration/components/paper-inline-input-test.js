import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('paper-inline-input', 'Integration | Component | paper inline input', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{paper-inline-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#paper-inline-input}}
      template block text
    {{/paper-inline-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
