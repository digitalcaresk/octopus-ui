import HeaderCell from './header-cell';
import layout from 'octopus-ui/templates/components/ui-data-table/column/sortable-header-cell';

export default HeaderCell.extend({
    layout,

    classNames: ['table-sortable'],

    onSort() {

    },

    click(event) {
        event.preventDefault();

        this.onSort(this.property);
    }
});
