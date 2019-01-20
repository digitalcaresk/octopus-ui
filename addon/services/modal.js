import Service from '@ember/service';
import {get} from '@ember/object';
import {Promise} from 'rsvp';

export default Service.extend({
    currentModal: null,

    close() {
        let modal = get(this, 'currentModal');

        return new Promise(resolve => {
            if (!modal) {
                return resolve();
            }

            modal.close().then(() => {
                resolve()
            });
        });
    }
});
