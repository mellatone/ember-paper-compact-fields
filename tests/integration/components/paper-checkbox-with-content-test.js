import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('paper-checkbox-with-content', 'Integration | Component | paper checkbox with content', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{paper-checkbox-with-content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#paper-checkbox-with-content}}
      template block text
    {{/paper-checkbox-with-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
