import Service from '@ember/service';
import {get} from '@ember/object';
import {Promise} from 'rsvp';
import { isEmpty } from '@ember/utils';

export default Service.extend({
    stack: null,

    init() {
        this._super(...arguments);

        this.set('stack', []);
    },

    addToStack(modal) {
        this.stack.addObject(modal);
    },

    close() {
        let stack = this.stack;

        return new Promise(resolve => {
            if (isEmpty(stack)) {
                return resolve();
            }

            stack.lastObject.close().then(() => {
                resolve()
            });
        });
    }
});
