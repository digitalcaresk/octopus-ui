import Component from '@ember/component';
import {schedule} from '@ember/runloop';
import {get, set} from '@ember/object';
import {inject} from '@ember/service';
import {Promise} from 'rsvp';
import layout from '../templates/components/ui-modal';

export default Component.extend({
    layout,

    tagName: '',

    scrollable: false,

    onClose() {

    },
    onInsert() {
        
    }
});
