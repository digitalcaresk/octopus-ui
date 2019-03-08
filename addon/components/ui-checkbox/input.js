import Checkbox from '@ember/component/checkbox';
import {run} from '@ember/runloop';

export default Checkbox.extend({
    classNames: ['custom-control-input'],

    onChange() {

    },

    change() {
        this._super(...arguments);

        run.scheduleOnce('actions', this, this.onChange);
    }
});
