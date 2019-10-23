import Checkbox from '@ember/component/checkbox';
import {computed} from '@ember/object';
import {run} from '@ember/runloop';

export default Checkbox.extend({
    classNames: ['custom-control-input'],
    classNameBindings: ['isInvalid'],

    isInvalid: computed.notEmpty('errors'),

    onChange() {

    },

    change() {
        this._super(...arguments);

        run.scheduleOnce('actions', this, this.onChange);
    }
});
