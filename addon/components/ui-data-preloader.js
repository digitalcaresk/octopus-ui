import Component from '@ember/component';
import layout from '../templates/components/ui-data-preloader';

export default Component.extend({
    layout,
    tagName: '',

    didReceiveAttrs() {
        this.task.perform();
    }
});
