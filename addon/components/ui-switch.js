import Component from '@ember/component';
import {computed} from '@ember/object'
import layout from '../templates/components/ui-switch';

export default Component.extend({
    layout,

    classNames: ['custom-control custom-switch'],
    classNameBindings: ['inline:custom-control-inline'],

    inline: false,

    switchId: computed('elementId', function() {
        return `${this.elementId}-switch`;
    })
});
