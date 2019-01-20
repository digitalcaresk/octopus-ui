import Component from '@ember/component';
import {computed} from '@ember/object';
import layout from 'octopus-ui/templates/components/ui-data-table/row';

export default Component.extend({
    layout,

    tagName: 'tr',
    classNameBindings: ['selected:table-primary'],

    selected: computed.equal('row.selected', true)
});
