import Component from '@ember/component';
import {schedule} from '@ember/runloop';
import {get, set} from '@ember/object';
import {inject} from '@ember/service';
import {Promise} from 'rsvp';
import layout from '../templates/components/ui-modal';

export default Component.extend({
    layout,

    modal: inject(),
    classNames: ['modal', 'fade'],
    backdrop: true,
    scrollable: false,

    onClose() {

    },

    close() {
        return new Promise(resolve => {
            return this.$().on('hidden.bs.modal', function() {
                resolve();
            }).modal('hide');
        });
    },

    didInsertElement() {
        set(this, 'modal.currentModal', this);

        schedule('render', () => {
            this.$().modal({
                backdrop: get(this, 'backdrop')
            }).on('hidden.bs.modal', () => {
                set(this, 'modal.currentModal', null);

                get(this, 'onClose')();
            });
        });
    },
});