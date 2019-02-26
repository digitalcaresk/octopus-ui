import TextField from '@ember/component/text-field';
import {observer} from '@ember/object';
import {schedule} from '@ember/runloop';

export default TextField.extend({
    classNames: 'form-control',

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
