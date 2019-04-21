import Component from '@ember/component';
import {computed} from '@ember/object';
import layout from 'octopus-ui/templates/components/ui-data-pager/pagination';

export default Component.extend({
    layout,

    tagName: '',

    pages: computed('count', 'itemsPerPage', function () {
        if (this.itemsPerPage === -1) {
            return 1;
        }

        return Math.ceil(this.count / this.itemsPerPage);
    }),

    isFirstPage: computed.equal('page', 1),
    isLastPage: computed('page', 'pages', function () {
        return this.page === this.pages || this.pages === 0;
    }),

    showingFrom: computed('page', 'itemsPerPage', function() {
        return (this.page * this.itemsPerPage) - (this.itemsPerPage - 1);
    }),
    showingTo: computed('page', 'itemsPerPage', 'count', function() {
        let items = this.page * this.itemsPerPage;

        return items > this.count ? this.count : items;
    }),

    setItemsPerPage(itemsPerPage) {
        this.setProperties({
            page: 1,
            itemsPerPage: itemsPerPage
        })
    },

    goToFirstPage() {
        this.set('page', 1);
    },

    goToLastPage() {
        this.set('page', this.pages);
    },

    goToPreviousPage() {
        this.decrementProperty('page');
    },

    goToNextPage() {
        this.incrementProperty('page');
    }
});
