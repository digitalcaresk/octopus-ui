import HeaderCell from './header-cell';
import layout from 'octopus-ui/templates/components/ui-data-table/column/selectable-header-cell';
import {computed} from '@ember/object';

export default HeaderCell.extend({
    layout,

    width: 30,
    areAllSelected: computed('rows.@each.selected', function () {
        return this.rows.filterBy('selected', true).length === this.rows.length;
    }),

    toggleSelected() {
        let areAllSelected = this.areAllSelected;

        this.rows.forEach(row => {
            row.set('selected', !areAllSelected);
        })
    }
});
