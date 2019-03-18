import Component from '@ember/component';
import {computed} from '@ember/object';
import layout from '../templates/components/ui-date-input';

export default Component.extend({
    layout,
    tagName: '',

    minDate: null,
    disabled: false,
    mode: 'single',
    enable: [],

    dateFormat: computed('enableTime', function() {
        return this.enableTime ? 'H:i d.m.Y' : 'd.m.Y';
    }),

    updateValue(selectedDates) {
        if (this.isInRangeMode) {
            this.set('value', selectedDates);
        } else {
            let [date] = selectedDates;

            this.set('value', date);
        }
    },

    isInRangeMode: computed.alias('mode', 'range')
});
