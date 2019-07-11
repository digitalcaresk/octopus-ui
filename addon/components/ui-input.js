import TextField from '@ember/component/text-field';
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

    input() {
        this._super(...arguments);

        this.onChange(this.value);
    }
});
