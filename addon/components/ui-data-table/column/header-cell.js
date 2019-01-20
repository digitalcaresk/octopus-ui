import Component from '@ember/component';
import layout from 'octopus-ui/templates/components/ui-data-table/column/header-cell';

export default Component.extend({
    layout,

    tagName: 'th',
    attributeBindings: ['width']
});
