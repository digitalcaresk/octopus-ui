import Component from '@ember/component';
import {computed} from '@ember/object';
import layout from '../templates/components/ui-date-input';
import {isEmpty} from '@ember/utils';

export default Component.extend({
    layout,
    tagName: '',

    minDate: null,
    maxDate: null,
    disabled: false,
    autoOpen: false,
    highlightWhenSelected: false,
    flatpickr: null,
    icon: true,
    mode: 'single',
    enable: [],

    onSelect() {

    },

    onDayCreate() {

    },

    setFlatpickr(flatpickr) {
        this.set('flatpickr', flatpickr);

        if (this.autoOpen) {
            this.flatpickr.open();
        }
    },

    dateFormat: computed('enableTime', function () {
        return this.enableTime ? 'H:i d.m.Y' : 'd.m.Y';
    }),

    shouldHighlight: computed('value', 'highlightWhenSelected', function () {
        return this.highlightWhenSelected && !isEmpty(this.value);
    }),

    updateValue(selectedDates) {
        if (this.isInRangeMode || this.isInMultipleMode) {
            this.set('value', selectedDates);

            this.onSelect(selectedDates);
        } else {
            let [date] = selectedDates;

            this.set('value', date);

            this.onSelect(date);
        }
    },

    isInRangeMode: computed.equal('mode', 'range'),
    isInMultipleMode: computed.equal('mode', 'multiple'),
});
