import Component from '@ember/component';
import {computed} from '@ember/object';
import layout from '../templates/components/ui-data-sorter';
import PersistentComponent from 'octopus-ui/mixins/persistent-component';

export default Component.extend(PersistentComponent, {
    layout,

    tagName: '',

    sortBy: 'updatedAt',
    sortDirection: 'desc',

    persistentProperties: ['sortBy', 'sortDirection'],

    sortingDefinition: computed('sortBy', 'sortDirection', function() {
        return [`${this.sortBy}:${this.sortDirection}`];
    }),

    sortedContent: computed.sort('content', 'sortingDefinition'),

    sortContent(property) {
        if (this.sortBy === property) {
            this.set('sortDirection', this.sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            this.set('sortBy', property);
        }
    }
});
