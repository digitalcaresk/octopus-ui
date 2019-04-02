import Service from '@ember/service';
import {inject as service} from '@ember/service';

export default Service.extend({
    router: service(),

    init() {
        this._super(...arguments);

        this.set('state', {});
        this.set('components', []);

        this.router.on('routeWillChange', () => {
            this.persistComponents();
        })
    },

    registerComponent(component) {
        this.components.addObject(component);
    },
    unregisterComponent(component) {
        this.components.removeObject(component);
    },

    stateFor(component) {
        let routeName = this.router.currentURL,
            path = `${routeName}@${component.componentName}`;

        return this.state[path] || null;
    },

    persistComponents() {
        let routeName = this.router.currentURL,
            state = this.state;

        this.components.forEach(component => {
            let path = `${routeName}@${component.componentName}`;

            state[path] = component.serialize();
        });

        this.set('state', state);
    }
});
