import Component from '@ember/component';
import {observer} from '@ember/object';
import {run} from '@ember/runloop';
import layout from '../templates/components/ui-select';
import {typeOf} from '@ember/utils';
import {computed} from '@ember/object';

export default Component.extend({
    layout,

    tagName: 'select',
    classNameBindings: ['tick:show-tick', 'isInvalid'],
    attributeBindings: [
        'disabled',
        'multiple',
        'title',
        'width:data-width',
        'header:data-header',
        'format:data-selected-text-format',
        'container:data-container',
        'search:data-live-search',
        'actionsBox:data-actions-box',
        'style:data-style'
    ],

    classNames: 'form-control',

    errors: null,

    isInvalid: computed.notEmpty('errors'),

    /**
     * Append the select to a specific element, e.g. container: 'body'
     *
     * @property container
     * @type String
     * @default 'body'
     * @public
     */
    container: 'body',

    /**
     * Disabled select boxes
     *
     * @property disabled
     * @type Boolean
     * @default false
     * @public
     */
    disabled: false,

    /**
     * Multiple select boxes
     *
     * @property multiple
     * @type Boolean
     * @default false
     * @public
     */
    multiple: false,

    /**
     * Show the checkmark icon on standard select boxes
     *
     * @property tick
     * @type Boolean
     * @default true
     * @public
     */
    tick: true,

    /**
     * Collection of all `option-item`s that are children
     * @property options
     * @type {Array}
     */
    options: null,

    /**
     * Select style
     * @property style
     * @type String
     */
    style: 'btn-input',

    /**
     * Select width
     *
     * @property width
     * @type String
     */
    width: '100%',

    /**
     * Placeholder
     *
     * @property placeholder
     * @type String
     */
    placeholder: 'Vyberte',

    selectedTextFormat: 'values',

    search: false,

    init() {
        this._super(...arguments);

        this.set('options', []);
    },

    refresh: observer('disabled', function () {
        this._pickerCall(this._pickerRefresh);
    }),

    updateOptions: observer('options.[]', function () {
        this._pickerCall(this._pickerRefresh);
    }),

    updateValue: observer('value', function () {
        this.$().val(this.getValue());
        this._pickerCall(this._pickerRefresh);
    }),

    getValue() {
        let value = this.value;

        if (value === undefined ||
            value === null) {
            value = '';
        }

        return value;
    },

    _pickerCall(func) {
        run.scheduleOnce('afterRender', this, func);
    },

    _pickerRefresh() {
        this.$().selectpicker('refresh');
    },

    _pickerHide() {
        this.$().selectpicker('hide');
    },

    _pickerSetValue() {
        this.$().selectpicker('val', this.getValue());
    },

    onSelect() {

    },

    didInsertElement() {
        let component = this.$();
        component.selectpicker({
            noneSelectedText: this.placeholder,
            tickIcon: 'far fa-check',
            actionsBox: this.actionsBox,
            liveSearch: this.search,
            selectedTextFormat: this.selectedTextFormat
        });

        this._pickerCall(this._pickerSetValue);
        this._pickerCall(function () {
            component.on('changed.bs.select', () => {
                let value = component.selectpicker('val');

                if (!typeOf(value) === 'array' && !isNaN(value)) {
                    value = parseInt(value);
                }

                this.onSelect(value);
            });
        });
    },

    willDestroyElement() {
        this.$().selectpicker('destroy');
        this.$().off('changed.bs.select');
    }
});
