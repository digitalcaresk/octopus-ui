import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
    align: null,

    classNameBindings: ['alignClass'],

    alignClass: computed('align', function() {
        return this.align ? `text-${this.align}` : null;
    })
});
