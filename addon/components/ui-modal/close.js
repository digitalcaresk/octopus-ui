import Component from '@ember/component';
import {get} from '@ember/object';
import {inject} from '@ember/service';
import layout from 'octopus-ui/templates/components/ui-modal/close';

export default Component.extend({
    layout,

    modal: inject(),

    tagName: 'button',
    type: 'button',
    classNames: ['btn', 'btn-close'],

    attributeBindings: ['type'],

    confirm: null,

    click() {
        let confirm = get(this, 'confirm');

        if (!confirm || (confirm && window.confirm(confirm))) {
            get(this, 'modal').close();
        }
    }
});
