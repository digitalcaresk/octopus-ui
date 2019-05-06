import UiButton from './ui-button';
import {computed} from '@ember/object';
import layout from '../templates/components/ui-task-button';

export default UiButton.extend({
    layout,

    task: null,
    perform: false,

    disabled: computed.equal('task.isRunning', true),

    click(event) {
        if (this.perform) {
            this.task.perform();

            event.preventDefault();
        } else {
            this._super(event);
        }
    }
});
