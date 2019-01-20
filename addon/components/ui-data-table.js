import UiTable from './ui-table';
import layout from '../templates/components/ui-data-table';

export default UiTable.extend({
    layout,

    columnFilters: false,
    itemsPerPage: 20
});
