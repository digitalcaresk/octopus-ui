import TextArea from '@ember/component/text-area';
import {computed} from '@ember/object';

export default TextArea.extend({
    classNames: 'form-control',
    classNameBindings: ['isInvalid'],

    errors: null,

    isInvalid: computed.notEmpty('errors')
});
