import Mixin from '@ember/object/mixin';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';
import {isArray} from '@ember/array';

export default Mixin.create({
    componentState: service(),

    restoreState: true,

    init() {
        this._super(...arguments);

        this.componentState.registerComponent(this);

        let state = this.componentState.stateFor(this);

        if (state && this.restoreState) {
            this.setProperties(state);
        }
    },

    willDestroyElement() {
        this.componentState.unregisterComponent(this);
    },

    componentName: computed(function () {
        let regex = this.toString().match(/<[a-zA-Z\-]+@[a-zA-Z]+:(?:[a-z]+[\/])*([-a-z]+)::[a-zA-Z]+[0-9]+>/);

        return regex[regex.length - 1];
    }),

    serialize() {
        let serialized = {};

        if (this.persistentProperties && isArray(this.persistentProperties)) {
            this.persistentProperties.forEach(property => {
                serialized[property] = this.get(property);
            })
        }

        return serialized;
    }
});