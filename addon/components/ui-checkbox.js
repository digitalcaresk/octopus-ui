import Component from '@ember/component';
import {computed} from '@ember/object'
import layout from '../templates/components/ui-checkbox';

export default Component.extend({
    layout,

    classNames: ['custom-control custom-checkbox'],
    classNameBindings: ['inline:custom-control-inline'],

    inline: false,

    checkboxId: computed('elementId', function () {
        return `${this.elementId}-checkbox`;
    })
});
