import TextField from '@ember/component/text-field';
import {observer} from '@ember/object';
import {schedule} from '@ember/runloop';
import {computed} from '@ember/object';

export default TextField.extend({
    classNames: 'form-control',
    classNameBindings: ['isInvalid'],

    errors: null,

    isInvalid: computed.notEmpty('errors'),

    onChange() {

    },

    onKeyPress() {

    },

    keyPress() {
        this.onKeyPress();
    },

    valueObserver: observer('value', function () {
        schedule('actions', this, function () {
            this.onChange();
        });
    })
});
