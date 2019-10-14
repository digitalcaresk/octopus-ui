import Component from '@ember/component';
import {schedule} from '@ember/runloop';
import {get, set} from '@ember/object';
import {inject} from '@ember/service';
import {Promise} from 'rsvp';

export default Component.extend({
    modal: inject(),
    classNames: ['modal', 'fade'],
    backdrop: true,

    onClose() {

    },
    onInsert() {

    },

    close() {
        return new Promise(resolve => {
            return this.$().on('hidden.bs.modal', function() {
                resolve();
            }).modal('hide');
        });
    },

    didInsertElement() {
        this.modal.addToStack(this);

        this.onInsert(this);

        schedule('render', () => {
            this.$().modal({
                backdrop: false
            }).on('hidden.bs.modal', () => {
                this.modal.stack.popObject();

                get(this, 'onClose')();
            });
        });
    },
});
