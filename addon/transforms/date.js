import DS from 'ember-data';
import moment from 'moment';

export default DS.Transform.extend({
    deserialize(serialized) {
        if (!serialized) {
            return null;
        }

        return moment(serialized).toDate();
    },

    serialize(deserialized) {
        if (!deserialized) {
            return null;
        }

        return moment(deserialized).format('YYYY-MM-DD HH:mm:ss');
    }
});
