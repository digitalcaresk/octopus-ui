import HeaderCell from './header-cell';
import layout from 'octopus-ui/templates/components/ui-data-table/column/sortable-header-cell';
import {computed} from '@ember/object';

export default HeaderCell.extend({
    layout,

    classNames: ['table-sortable'],
    classNameBindings: ['sortingClass'],

    isSortedBy: computed('property', 'sortedBy', function () {
        return this.property === this.sortedBy;
    }),

    sortingClass: computed('isSortedBy', 'sortDirection', function() {
        return this.isSortedBy ? `active ${this.sortDirection}` : null;
    }),

    onSort() {

    },

    click(event) {
        event.preventDefault();

        this.onSort(this.property);
    }
});
