import Component from '@ember/component';
import {computed} from '@ember/object';
import layout from '../templates/components/ui-date-input';

export default Component.extend({
    layout,
    tagName: '',

    minDate: null,

    dateFormat: computed('enableTime', function() {
        return this.enableTime ? 'H:i d.m.Y' : 'd.m.Y';
    }),

    updateValue(selectedDates) {
        let [date] = selectedDates;

        this.set('value', date);
    }
});
