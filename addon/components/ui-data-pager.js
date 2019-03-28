import Component from '@ember/component';
import {computed} from '@ember/object';
import layout from '../templates/components/ui-data-pager';
import PersistentComponent from 'octopus-ui/mixins/persistent-component';

export default Component.extend(PersistentComponent, {
    layout,

    tagName: '',

    page: 1,
    itemsPerPage: 10,

    persistentProperties: ['page', 'itemsPerPage'],

    pagedContent: computed('content.[]', 'itemsPerPage', 'page', function () {
        let content = this.content,
            itemsPerPage = this.itemsPerPage;

        if (itemsPerPage === -1) {
            return content;
        }

        let computedPage = this.page - 1,
            beginIndex = computedPage * itemsPerPage,
            endIndex = beginIndex + itemsPerPage;

        return content.slice(beginIndex, endIndex);
    }),
});
