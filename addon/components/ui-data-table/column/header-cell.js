import Cell from './cell';
import layout from 'octopus-ui/templates/components/ui-data-table/column/header-cell';

export default Cell.extend({
    layout,

    tagName: 'th',
    attributeBindings: ['width']
});
